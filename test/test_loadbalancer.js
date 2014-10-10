'use strict';

var should = require('should');
var assert = require('assert');

var path = require('path');
var root = path.dirname(__dirname);
module.paths.unshift(root + '/lib');
var saklient = require('saklient');

var fs = require('fs');
var dateformat = require('dateformat');
var exec = require('child_process').exec;
var Fiber = require('fibers');

describe('LoadBalancer', function(){
	
	var config, api;
	
	function trace(msg) {
		console.log("        "+msg);
	}
	
	
	
	before(function(){
		
		// load config file
		trace('loading config file');
		var testOkFile = root + '/testok';
		assert(fs.existsSync(testOkFile), testOkFile + ' is not found (You must "touch" this file to confirm that the tests can make your expenses)');
		var configFile = root + '/config.sh';
		assert(fs.existsSync(configFile), configFile + ' is not found (Read README.md)');
		config = {};
		fs.readFileSync(configFile, 'utf8').split(/\n/).forEach(function(line){
			var m = line.match(/^\s*export\s+(\w+)\s*=\s*(.+?)\s*$/);
			if (!m) return;
			var key = m[1];
			var value = m[2];
			config[key] = value.replace(/'([^']*)'|"([^"]*)"|.(.)|(.)/g, function(n,n1,n2,n3,n4){
				return n1 || n2 || n3 || n4;
			});
		});
		assert(config.SACLOUD_TOKEN, 'SACLOUD_TOKEN must be defined in config.sh');
		assert(config.SACLOUD_SECRET, 'SACLOUD_SECRET must be defined in config.sh');
		//assert(config.SACLOUD_ZONE, 'SACLOUD_ZONE must be defined in config.sh');
		
		// authorize
		trace('creating an API instance');
		api = saklient.cloud.API.authorize(config.SACLOUD_TOKEN, config.SACLOUD_SECRET);
		if (config.SACLOUD_ZONE) api = api.inZone(config.SACLOUD_ZONE);
		api.should.be.an.instanceof(saklient.cloud.API);
		
	});
	
	
	
	it('should be CRUDed', function(done){
		Fiber(function(){
			
			var name = '!js_mocha-' + dateformat('yyyyMMdd_hhmmss') + '-' + Math.random().toString(36).slice(2);
			var description = 'This instance was created by saklient.node mocha';
			var tag = 'saklient-test';
			
			// search a switch
			trace('searching a swytch...');
			var swytches = api.swytch.withTag('lb-attached').limit(1).find();
			swytches.length.should.be.above(0);
			var swytch = swytches[0];
			swytch.should.be.an.instanceof(saklient.cloud.resources.Swytch);
			swytch.ipv4Nets.length.should.be.above(0);
			var net = swytch.ipv4Nets[0];
			trace(net.address + '/' + net.maskLen + '->' + net.defaultRoute);
			
			// create a loadbalancer
			trace('creating a LB...');
			var vrid = 123;
			var lb = api.appliance.createLoadBalancer(swytch, vrid, ['133.242.255.244', '133.242.255.245'], true);
			
			var ok = false;
			try {
				lb.save();
			}
			catch (ex) {
				if (ex instanceof saklient.errors.SaklientException) ok = true;
			}
			if (!ok) should.fail('Requiredフィールドが未set時は SaklientException がスローされなければなりません');
			lb.name = name;
			lb.description = '';
			lb.tags = [tag];
			lb.save();
			
			lb.reload();
			lb.defaultRoute.should.equal(net.defaultRoute); 
			lb.maskLen.should.equal(net.maskLen); 
			lb.vrid.should.equal(vrid); 
			lb.swytchId.should.equal(swytch.id); 
			
			// wait the LB becomes up
			trace('waiting the LB becomes up...');
			if (!lb.sleepUntilUp()) should.fail('ロードバランサが正常に起動しません');
			
			// stop the LB
			api.sleep(1);
			trace('stopping the LB...');
			if (!lb.stop().sleepUntilDown()) should.fail('ロードバランサが正常に停止しません');
			
			// delete the LB
			trace('deleting the LB...');
			lb.destroy();
			
			done();
			
		}).run();
	});
	
	
	
	after(function(){
		config = null;
		api = null;
	});
	
	
	
});

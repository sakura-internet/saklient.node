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

describe('Router', function(){
	
	var config, api;
	
	function trace(msg) {
		console.log("        "+msg);
	}
	
	function execSync(cmd) {
		var _fiber = Fiber.current;
		exec(cmd, function(err, stdout, stderr){
			_fiber.run(stdout);
		});
		return Fiber.yield();
	}
	
	function ip2long(a) {
		return parseInt(a.split('.').map(function(x){return ('0'+parseInt(x,10).toString(16)).substr(-2);}).join(''), 16);
	}
	function long2ip(n) {
		return n.toString(16).match(/../g).map(function(x){return parseInt(x,16).toString(10);}).join('.');
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
			var maskLen = 28;
			//
			var swytch = null;
			if (true) {
				trace('ルータ＋スイッチの帯域プランを検索しています...');
				var plans = api.product.router.find();
				var minMbps = 0x7FFFFFFF;
				plans.forEach(function(plan){
					plan.should.be.an.instanceof(saklient.cloud.resources.RouterPlan);
					plan.bandWidthMbps.should.be.above(0);
					minMbps = Math.min(plan.bandWidthMbps, minMbps);
				});
				
				trace('ルータ＋スイッチを作成しています...');
				var router = api.router.create();
				router.name = name;
				router.description = description;
				router.bandWidthMbps = minMbps;
				router.networkMaskLen = maskLen;
				router.save();
				
				trace('ルータ＋スイッチの作成完了を待機しています...');
				if (!router.sleepWhileCreating()) should.fail('ルータが正常に作成されません');
				swytch = router.getSwytch();
			}
			else {
				trace('既存のルータ＋スイッチを取得しています...');
				var swytches = api.swytch.withNameLike('saklient-static-1').limit(1).find();
				swytches.length.should.equal(1);
				swytch = swytches[0];
			}
			swytch.should.be.an.instanceof(saklient.cloud.resources.Swytch);
			swytch.ipv4Nets.length.should.be.above(0);
			swytch.ipv4Nets[0].should.be.an.instanceof(saklient.cloud.resources.Ipv4Net);
			
			//
			trace('ルータ＋スイッチの帯域プランを変更しています...');
			var routerIdBefore = swytch.router.id;
			swytch.changePlan(swytch.router.bandWidthMbps==100 ? 500 : 100);
			swytch.router.id.should.not.equal(routerIdBefore);
			
			//
			if (0 < swytch.ipv6Nets.length) {
				trace('ルータ＋スイッチからIPv6ネットワークの割当を解除しています...');
				swytch.removeIpv6Net();
			}
			trace('ルータ＋スイッチにIPv6ネットワークを割り当てています...');
			var v6net = swytch.addIpv6Net();
			v6net.should.be.an.instanceof(saklient.cloud.resources.Ipv6Net);
			swytch.ipv6Nets.length.should.equal(1);
			
			//
			for (var i=swytch.ipv4Nets.length-1; 1<=i; i--) {
				trace('ルータ＋スイッチからスタティックルートの割当を解除しています...');
				var net = swytch.ipv4Nets[i];
				swytch.removeStaticRoute(net);
			}
			
			trace('ルータ＋スイッチにスタティックルートを割り当てています...');
			var net0 = swytch.ipv4Nets[0];
			var nextHop = long2ip(ip2long(net0.address) + 4);
			var sroute = swytch.addStaticRoute(28, nextHop);
			sroute.should.be.an.instanceof(saklient.cloud.resources.Ipv4Net);
			swytch.ipv4Nets.length.should.equal(2);
			
			done();
			
		}).run();
	});
	
	
	
	after(function(){
		config = null;
		api = null;
	});
	
	
	
});

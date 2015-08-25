'use strict';

var should = require('should');
var assert = require('assert');

var path = require('path');
var root = path.dirname(__dirname);
module.paths.unshift(root + '/lib');
var saklient = require('saklient');

var fs = require('fs');
var dateformat = require('dateformat');

var TESTS_CONFIG_READYMADE_LB_ID = null;

describe('LoadBalancer', function(){
	
	var config, api;
	
	function trace(msg) {
		console.log("        "+msg);
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
		var name = '!js_mocha-' + dateformat('yyyyMMdd_hhmmss') + '-' + Math.random().toString(36).slice(2);
		var description = 'This instance was created by saklient.node mocha';
		var tag = 'saklient-test';
		
		
		
		// create a LB
		
		var lb, swytch, net;
		if (!TESTS_CONFIG_READYMADE_LB_ID) {
			
			// search a switch
			trace('searching a swytch...');
			var swytches = api.swytch.withTag('lb-attached').limit(1).find();
			swytches.length.should.be.above(0);
			swytch = swytches[0];
			swytch.should.be.an.instanceof(saklient.cloud.resources.Swytch);
			swytch.ipv4Nets.length.should.be.above(0);
			net = swytch.ipv4Nets[0];
			trace(net.address + '/' + net.maskLen + '->' + net.defaultRoute);
			
			// create a loadbalancer
			trace('creating a LB...');
			var vrid = 123;
			lb = api.appliance.createLoadBalancer(swytch, vrid, ['133.242.255.244', '133.242.255.245'], true);
			
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
			
		}
		else {
		
			lb = api.appliance.getById(TESTS_CONFIG_READYMADE_LB_ID);
			lb.should.be.an.instanceof(saklient.cloud.resources.LoadBalancer);
			swytch = lb.getSwytch();
			swytch.should.be.an.instanceof(saklient.cloud.resources.Swytch);
			net = swytch.ipv4Nets[0];
			net.should.be.an.instanceof(saklient.cloud.resources.Ipv4Net);
			trace(net.address + '/' + net.maskLen + ' -> ' + net.defaultRoute);
			
		}
		
		
		
		// clear virtual ips
		
		lb.clearVirtualIps();
		lb.save();
		lb.reload();
		lb.virtualIps.length.should.equal(0);
		
		
		
		// setting virtual ips test 1
		
		var vip1Ip     = long2ip(ip2long(net.defaultRoute) + 5);
		var vip1SrvIp1 = long2ip(ip2long(net.defaultRoute) + 6);
		var vip1SrvIp2 = long2ip(ip2long(net.defaultRoute) + 7);
		var vip1SrvIp3 = long2ip(ip2long(net.defaultRoute) + 8);
		var vip1SrvIp4 = long2ip(ip2long(net.defaultRoute) + 9);
		
		lb.addVirtualIp({
			"vip": vip1Ip,
			"port": 80,
			"delay": 15,
			"servers": [
				{ "ip": vip1SrvIp1, "port": 80, "protocol": "http", "pathToCheck": "/index.html", "responseExpected": 200 },
				{ "ip": vip1SrvIp2, "port": 80, "protocol": "https", "pathToCheck": "/", "responseExpected": 200 },
				{ "ip": vip1SrvIp3, "port": 80, "protocol": "tcp" }
			]
		});
		
		var vip2Ip     = long2ip(ip2long(net.defaultRoute) + 10);
		var vip2SrvIp1 = long2ip(ip2long(net.defaultRoute) + 11);
		var vip2SrvIp2 = long2ip(ip2long(net.defaultRoute) + 12);
		
		var vip2 = lb.addVirtualIp();
		vip2.virtualIpAddress = vip2Ip;
		vip2.port = 80;
		vip2.delayLoop = 15;
		var vip2Srv1 = vip2.addServer();
		vip2Srv1.ipAddress = vip2SrvIp1;
		vip2Srv1.port = 80;
		vip2Srv1.protocol = "http";
		vip2Srv1.pathToCheck = "/index.html";
		vip2Srv1.responseExpected = 200;
		var vip2Srv2 = vip2.addServer();
		vip2Srv2.ipAddress = vip2SrvIp2;
		vip2Srv2.port = 80;
		vip2Srv2.protocol = "tcp";
		lb.save();
		lb.reload();
		
		lb.virtualIps.length.should.equal(2);
		lb.virtualIps[0].virtualIpAddress.should.equal(vip1Ip);
		lb.virtualIps[0].servers.length.should.equal(3);
		lb.virtualIps[0].servers[0].ipAddress.should.equal(vip1SrvIp1);
		lb.virtualIps[0].servers[0].port.should.equal(80);
		lb.virtualIps[0].servers[0].protocol.should.equal("http");
		lb.virtualIps[0].servers[0].pathToCheck.should.equal("/index.html");
		lb.virtualIps[0].servers[0].responseExpected.should.equal(200);
		lb.virtualIps[0].servers[1].ipAddress.should.equal(vip1SrvIp2);
		lb.virtualIps[0].servers[1].port.should.equal(80);
		lb.virtualIps[0].servers[1].protocol.should.equal("https");
		lb.virtualIps[0].servers[1].pathToCheck.should.equal("/");
		lb.virtualIps[0].servers[1].responseExpected.should.equal(200);
		lb.virtualIps[0].servers[2].ipAddress.should.equal(vip1SrvIp3);
		lb.virtualIps[0].servers[2].port.should.equal(80);
		lb.virtualIps[0].servers[2].protocol.should.equal("tcp");
		lb.virtualIps[1].virtualIpAddress.should.equal(vip2Ip);
		lb.virtualIps[1].servers.length.should.equal(2);
		lb.virtualIps[1].servers[0].ipAddress.should.equal(vip2SrvIp1);
		lb.virtualIps[1].servers[0].port.should.equal(80);
		lb.virtualIps[1].servers[0].protocol.should.equal("http");
		lb.virtualIps[1].servers[0].pathToCheck.should.equal("/index.html");
		lb.virtualIps[1].servers[0].responseExpected.should.equal(200);
		lb.virtualIps[1].servers[1].ipAddress.should.equal(vip2SrvIp2);
		lb.virtualIps[1].servers[1].port.should.equal(80);
		lb.virtualIps[1].servers[1].protocol.should.equal("tcp");
		
		
		
		// setting virtual ips test 2
		
		lb.getVirtualIpByAddress(vip1Ip).addServer({
			"ip": vip1SrvIp4,
			"port": 80,
			"protocol": "ping"
		});
		lb.save();
		lb.reload();
		
		lb.virtualIps.length.should.equal(2);
		lb.virtualIps[0].servers.length.should.equal(4);
		lb.virtualIps[0].servers[3].ipAddress.should.equal(vip1SrvIp4);
		lb.virtualIps[0].servers[3].port.should.equal(80);
		lb.virtualIps[0].servers[3].protocol.should.equal("ping");
		lb.virtualIps[1].servers.length.should.equal(2);
		
		
		
		// checking status
		
		lb.reloadStatus();
		lb.virtualIps.forEach(function(vip){
			trace('  vip ' + vip.virtualIpAddress + ':' + vip.port + ' every ' + vip.delayLoop + 'sec(s)');
			vip.servers.forEach(function(server){
				var msg = '';
				msg += '    [' + server.status + '(' + server.activeConnections + ')]';
				msg += ' server ' + server.protocol + '://' + server.ipAddress;
				if (server.port) msg += ':' + server.port;
				if (server.pathToCheck) msg += server.pathToCheck;
				msg += ' answers';
				if (server.responseExpected) msg += ' ' + server.responseExpected;
				trace(msg);
				//server.status.should.equal('down');
			});
		});
		
		
		
		// delete the LB
		
		if (!TESTS_CONFIG_READYMADE_LB_ID) {
			
			// stop the LB
			api.sleep(1);
			trace('stopping the LB...');
			if (!lb.stop().sleepUntilDown()) should.fail('ロードバランサが正常に停止しません');
			
			// delete the LB
			trace('deleting the LB...');
			lb.destroy();
			
		}
		
		done();
	});
	
	
	
	after(function(){
		config = null;
		api = null;
	});
	
	
	
});

var should = require('should');
var assert = require('assert');

var path = require('path');
var root = path.dirname(__dirname);
module.paths.push(root + '/lib');
var saclient = require('saclient');

var fs = require('fs');
var dateformat = require('dateformat');
var Fiber = require('fibers');

describe('Server', function(){
	
	var config, api;
	
	
	
	before(function(){
		
		// load config file
		console.log("\t"+'loading config file');
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
			config[key] = value.replace(/'([^']*)'|"([^"]*)"|\\(.)|(.)/g, function(n,n1,n2,n3,n4){
				return n1 || n2 || n3 || n4;
			});
		});
		assert(config.SACLOUD_TOKEN, 'SACLOUD_TOKEN must be defined in config.sh');
		assert(config.SACLOUD_SECRET, 'SACLOUD_SECRET must be defined in config.sh');
		//assert(config.SACLOUD_ZONE, 'SACLOUD_ZONE must be defined in config.sh');
		
		// authorize
		console.log("\t"+'creating an API instance');
		api = saclient.cloud.API.authorize(config.SACLOUD_TOKEN, config.SACLOUD_SECRET);
		if (config.SACLOUD_ZONE) api = api.inZone(config.SACLOUD_ZONE);
		api.should.be.an.instanceof(saclient.cloud.API);
		
	});
	
	
	
	it('should be found', function(){
		Fiber(function(){
			console.log("\t"+'finding servers...');
			var servers = api.server.find();
			servers.should.be.an.instanceof(Array);
			servers.length.should.be.above(0);
			
			console.log("\t"+'checking each server...');
			servers.forEach(function(server){
				server.should.be.an.instanceof(saclient.cloud.resource.Server);
				server.plan.should.be.an.instanceof(saclient.cloud.resource.ServerPlan);
				server.plan.cpu.should.be.above(0);
				server.plan.memoryMib.should.be.above(0);
				server.plan.memoryGib.should.be.above(0);
				(server.plan.memoryMib / server.plan.memoryGib).should.equal(1024);
				server.tags.should.be.an.instanceof(Array);
				server.tags.forEach(function(tag){
					tag.should.be.an.instanceof(String);
				});
			});
			
		}).run();
	});
	
	
	
	it('should be CRUDed and power-controlled', function(done){
		Fiber(function(){
			
			var name = '!js_mocha-' + dateformat('yyyyMMdd_hhmmss') + '-' + Math.random().toString(36).slice(2);
			var description = 'This instance was created by saclient.node mocha';
			var tag = 'saclient-test';
			var cpu = 1;
			var mem = 2;
			//
			console.log("\t"+'creating server...');
			var server = api.server.create();
			server.should.be.an.instanceof(saclient.cloud.resource.Server);
			server.name = name;
			server.description = description;
			server.tags = [tag];
			server.plan = api.product.server.getBySpec(cpu, mem);
			server.save();
			//
			server.id.should.be.above(0);
			server.name.should.equal(name);
			server.description.should.equal(description);
			server.tags.should.be.an.instanceof(Array);
			server.tags.length.should.equal(1);
			server.tags[0].should.equal(tag);
			server.plan.cpu.should.equal(cpu);
			server.plan.memoryGib.should.equal(mem);
			
			console.log("\t"+'booting server...');
			server.boot();
			
			// 'should.throw' does not work correctly in a Fiber
			var ex = null;
			try {
				server.boot();
			}
			catch (ex_) {
				// 'should.*' does not work correctly in a 'catch' block in a Fiber
				ex = ex_;
			}
			ex.should.be.an.instanceof(saclient.cloud.errors.HttpConflictException);
			// 'サーバ起動中の起動試行時は HttpConflictException がスローされなければなりません'
			
			console.log("\t"+'stopping server...');
			server.stop();
			
			console.log("\t"+'checking instance status...');
			server.sleepUntilDown().should.be.ok;
			console.log("\t"+'deleting server...');
			server.destroy();
			done();
			
		}).run();
	});
	
	
	
	after(function(){
		config = null;
		api = null;
	});
	
	
	
});

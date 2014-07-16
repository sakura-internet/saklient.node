var should = require('should');
var assert = require('assert');

var path = require('path');
var root = path.dirname(__dirname);
module.paths.push(root + '/lib');
var saclient = require('saclient');

var fs = require('fs');
var dateformat = require('dateformat');
var Fiber = require('fibers');

describe('Disk', function(){
	
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
	
	
	
	
	it('should be CRUDed', function(done){
		Fiber(function(){
			
			console.log("\t"+'searching archives...');
			var archives = api.archive
				.withNameLike('CentOS 6.5 64bit')
				.withSizeGib(20)
				.withSharedScope()
				.limit(1)
				.find();
			var archive = archives[0];
			
			console.log("\t"+'creating disk...');
			var disk = api.disk.create();
			disk.name = '!js_mocha-' + dateformat('yyyyMMdd_hhmmss') + '-' + Math.random().toString(36).slice(2);
			disk.description = 'This instance was created by saclient.node mocha';
			disk.tags = ['saclient-test'];
			disk.copyFrom(archive);
			disk.save();
			//print_r(disk.apiSerialize(true));
			
			console.log("\t"+'waiting copy...');
			if (!disk.sleepWhileCopying()) fail('アーカイブからディスクへのコピーがタイムアウトしました');
			//print_r(disk.apiSerialize(true));
			
			disk.destroy();
			
			done();
			
		}).run();
	});
	
	
	
	after(function(){
		config = null;
		api = null;
	});
	
	
	
});

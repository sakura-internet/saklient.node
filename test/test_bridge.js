'use strict';

var should = require('should');
var assert = require('assert');

var path = require('path');
var root = path.dirname(__dirname);
module.paths.unshift(root + '/lib');
var saklient = require('saklient');

var fs = require('fs');
var dateformat = require('dateformat');

describe('Bridge', function(){
	
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
		var name = '!js_mocha-' + dateformat('yyyyMMdd_hhmmss') + '-' + Math.random().toString(36).slice(2);
		var description = 'This instance was created by saklient.node mocha';
		//
		trace('リージョンを検索しています...');
		var regions = api.facility.region.find();
		regions.forEach(function(region){
			region.should.be.an.instanceof(saklient.cloud.resources.Region);
		});
		
		trace('ブリッジを作成しています...');
		var bridge = api.bridge.create();
		bridge.name = name;
		bridge.description = description;
		bridge.region = regions[0];
		bridge.save();
		
		trace('ブリッジを削除しています...');
		bridge.destroy();
		
		done();
	});
	
	
	
	after(function(){
		config = null;
		api = null;
	});
	
	
	
});

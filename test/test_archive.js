'use strict';

var should = require('should');
var assert = require('assert');

var path = require('path');
var root = path.dirname(__dirname);
module.paths.unshift(root + '/lib');
var saklient = require('../lib/saklient');

var fs = require('fs');
var dateformat = require('dateformat');
var exec = require('child_process').exec;
var Fiber = require('fibers');

describe('Archive', function(){
	
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
			config[key] = value.replace(/'([^']*)'|"([^"]*)"|\\(.)|(.)/g, function(n,n1,n2,n3,n4){
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
		
			var archive = api.archive.create();
			archive.should.be.an.instanceof(saklient.cloud.resources.Archive);
			archive.name = name;
			archive.description = description;
			archive.tags = [tag];
			archive.sizeGib = 20;
			archive.save();
			
			//
			var ftp = archive.ftpInfo;
			ftp.should.be.an.instanceof(saklient.cloud.resources.FtpInfo);
			(ftp.hostName != null).should.be.true;
			(ftp.user != null).should.be.true;
			(ftp.password != null).should.be.true;
			var ftp2 = archive.openFtp(true).ftpInfo;
			ftp2.should.be.an.instanceof(saklient.cloud.resources.FtpInfo);
			(ftp2.hostName != null).should.be.true;
			(ftp2.user != null).should.be.true;
			(ftp2.password != null).should.be.true;
			ftp2.password.should.not.equal(ftp.password);
			
			//
			var temp = execSync("mktemp -t saklient").replace(/\s+$/, '');
			var cmd = 'dd if=/dev/urandom bs=4096 count=64 > ' + temp + '; ls -l ' + temp;
			trace(cmd);
			trace(execSync('( ' + cmd + ' ) 2>&1'));
			cmd  = 'set ftp:ssl-allow true;';
			cmd += 'set ftp:ssl-force true;';
			cmd += 'set ftp:ssl-protect-data true;';
			cmd += 'set ftp:ssl-protect-list true;';
			cmd += 'put ' + temp + ';';
			cmd += 'exit';
			cmd = 'lftp -u ' + ftp2.user + ',' + ftp2.password + " -p 21 -e '" + cmd + "' " + ftp2.hostName;
			trace(cmd);
			trace(execSync('( ' + cmd + ' ) 2>&1'));
			cmd = 'rm -f ' + temp;
			trace(cmd);
			trace(execSync('( ' + cmd + ' ) 2>&1'));
			
			archive.closeFtp();
			
			//
			archive.destroy();
			
			done();
			
		}).run();
	});
	
	
	
	it('should be copied', function(done){
		Fiber(function(){
			
			var name = '!js_mocha-' + dateformat('yyyyMMdd_hhmmss') + '-' + Math.random().toString(36).slice(2);
			var description = 'This instance was created by saklient.node mocha';
			var tag = 'saklient-test';
		
			var disk = api.disk.create();
			disk.name = name;
			disk.description = description;
			disk.tags = [tag];
			disk.sizeGib = 20;
			disk.plan = api.product.disk.ssd;
			disk.save();
			
			var archive = api.archive.create();
			archive.name = name;
			archive.description = description;
			archive.tags = [tag];
			archive.source = disk;
			archive.save();
			
			if (!archive.sleepWhileCopying()) {
				should.fail('ディスクからアーカイブへのコピーがタイムアウトまたは失敗しました');
			}
			
			disk.destroy();
			
			var ftp = archive.openFtp().ftpInfo;
			ftp.should.be.an.instanceof(saklient.cloud.resources.FtpInfo);
			(ftp.hostName != null).should.be.true;
			(ftp.user != null).should.be.true;
			(ftp.password != null).should.be.true;
			
			archive.closeFtp();
			archive.destroy();
			
			done();
			
		}).run();
	});
	
	
	
	after(function(){
		config = null;
		api = null;
	});
	
	
	
});

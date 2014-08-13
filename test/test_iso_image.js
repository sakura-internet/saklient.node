'use strict';

var should = require('should');
var assert = require('assert');

var path = require('path');
var root = path.dirname(__dirname);
module.paths.unshift(root + '/lib');
var saclient = require('../lib/saclient');

var fs = require('fs');
var dateformat = require('dateformat');
var exec = require('child_process').exec;
var Fiber = require('fibers');

describe('Server', function(){
	
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
		api = saclient.cloud.API.authorize(config.SACLOUD_TOKEN, config.SACLOUD_SECRET);
		if (config.SACLOUD_ZONE) api = api.inZone(config.SACLOUD_ZONE);
		api.should.be.an.instanceof(saclient.cloud.API);
		
	});
	
	
	
	it('should be CRUDed', function(done){
		Fiber(function(){
			
			var name = '!js_mocha-' + dateformat('yyyyMMdd_hhmmss') + '-' + Math.random().toString(36).slice(2);
			var description = 'This instance was created by saclient.node mocha';
			var tag = 'saclient-test';
		
			var iso = api.isoImage.create();
			iso.should.be.an.instanceof(saclient.cloud.resource.IsoImage);
			iso.name = name;
			iso.description = description;
			iso.tags = [tag];
			iso.sizeMib = 5120;
			iso.save();
			
			//
			var ftp = iso.ftpInfo;
			ftp.should.be.an.instanceof(saclient.cloud.resource.FtpInfo);
			(ftp.hostName != null).should.be.true;
			(ftp.user != null).should.be.true;
			(ftp.password != null).should.be.true;
			var ftp2 = iso.openFtp(true).ftpInfo;
			ftp2.should.be.an.instanceof(saclient.cloud.resource.FtpInfo);
			(ftp2.hostName != null).should.be.true;
			(ftp2.user != null).should.be.true;
			(ftp2.password != null).should.be.true;
			ftp2.password.should.not.equal(ftp.password);
			
			//
			var temp = execSync("mktemp -t saclient").replace(/\s+$/, '');
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
			
			iso.closeFtp();
			
			//
			iso.destroy();
			
			done();
			
		}).run();
	});
	
	
	
	it('should be inserted and ejected', function(done){
		Fiber(function(){
			
			var name = '!js_mocha-' + dateformat('yyyyMMdd_hhmmss') + '-' + Math.random().toString(36).slice(2);
			var description = 'This instance was created by saclient.node mocha';
			var tag = 'saclient-test';
			
			// search isos
			trace('searching iso images...');
			var isos = api.isoImage
				.withNameLike('CentOS 6.5 64bit')
				.withSharedScope()
				.limit(1)
				.find();
			isos.length.should.be.above(0);
			var iso = isos[0];
			
			// create a server
			trace('creating a server...');
			var server = api.server.create();
			server.should.be.an.instanceof(saclient.cloud.resource.Server);
			server.name = name;
			server.description = description;
			server.tags = [tag];
			server.plan = api.product.server.getBySpec(1, 1);
			server.save();
			
			// insert iso image while the server is down
			trace('inserting an ISO image to the server...');
			server.insertIsoImage(iso);
			server.instance.isoImage.should.be.an.instanceof(saclient.cloud.resource.IsoImage);
			server.instance.isoImage.id.should.equal(iso.id);
			
			// eject iso image while the server is down
			trace('ejecting the ISO image from the server...');
			server.ejectIsoImage();
			(server.instance.isoImage == null).should.be.true;
			
			// boot
			trace('booting the server...');
			server.boot();
			api.sleep(3);
			
			// insert iso image while the server is up
			trace('inserting an ISO image to the server...');
			server.insertIsoImage(iso);
			server.instance.isoImage.should.be.an.instanceof(saclient.cloud.resource.IsoImage);
			server.instance.isoImage.id.should.equal(iso.id);
			
			// eject iso image while the server is up
			trace('ejecting the ISO image from the server...');
			server.ejectIsoImage();
			(server.instance.isoImage == null).should.be.true;
			
			// stop the server
			api.sleep(1);
			trace('stopping the server...');
			server.stop();
			server.sleepUntilDown().should.be.ok;
			
			// delete the server
			trace('deleting the server...');
			server.destroy();
			
			done();
			
		}).run();
	});
	
	
	
	after(function(){
		config = null;
		api = null;
	});
	
	
	
});

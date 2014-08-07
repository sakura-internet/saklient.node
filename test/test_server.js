'use strict';

var should = require('should');
var assert = require('assert');

var path = require('path');
var root = path.dirname(__dirname);
module.paths.unshift(root + '/lib');
var saclient = require('saclient');

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
	
	
	
	it('should be found', function(){
		Fiber(function(){
			trace('finding servers...');
			var servers = api.server.find();
			servers.should.be.an.instanceof(Array);
			servers.length.should.be.above(0);
			
			trace('checking each server...');
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
			
			servers = api.server.limit(1).find();
			servers.length.should.equal(1);
			
		}).run();
	});
	
	
	
	it('should be CRUDed', function(done){
		Fiber(function(){
			
			var name = '!js_mocha-' + dateformat('yyyyMMdd_hhmmss') + '-' + Math.random().toString(36).slice(2);
			var description = 'This instance was created by saclient.node mocha';
			var tag = 'saclient-test';
			var cpu = 1;
			var mem = 2;
			var hostName = 'saclient-test';
			var sshPublicKey = 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC3sSg8Vfxrs3eFTx3G//wMRlgqmFGxh5Ia8DZSSf2YrkZGqKbL1t2AsiUtIMwxGiEVVBc0K89lORzra7qoHQj5v5Xlcdqodgcs9nwuSeS38XWO6tXNF4a8LvKnfGS55+uzmBmVUwAztr3TIJR5TTWxZXpcxSsSEHx7nIcr31zcvosjgdxqvSokAsIgJyPQyxCxsPK8SFIsUV+aATqBCWNyp+R1jECPkd74ipEBoccnA0pYZnRhIsKNWR9phBRXIVd5jx/gK5jHqouhFWvCucUs0gwilEGwpng3b/YxrinNskpfOpMhOD9zjNU58OCoMS8MA17yqoZv59l3u16CrnrD saclient-test@local';
			var sshPrivateKeyFile = root + '/test-sshkey.txt';
			
			// search archives
			trace('searching archives...');
			var archives = api.archive
				.withNameLike('CentOS 6.5 64bit')
				.withSizeGib(20)
				.withSharedScope()
				.limit(1)
				.find();
			archives.length.should.be.above(0);
			var archive = archives[0];
			
			// search scripts
			trace('searching scripts...');
			var scripts = api.script
				.withNameLike('WordPress')
				.withSharedScope()
				.limit(1)
				.find();
			scripts.length.should.be.above(0);
			var script = scripts[0];
			
			// create a disk
			trace('creating a disk...');
			var disk = api.disk.create();
			disk.name = name;
			disk.description = description;
			disk.tags = [tag];
			disk.source = archive;
			disk.save();
			//console.log(disk.dump());
			
			// create a server
			trace('creating a server...');
			var server = api.server.create();
			server.should.be.an.instanceof(saclient.cloud.resource.Server);
			server.name = name;
			server.description = description;
			server.tags = [tag];
			server.plan = api.product.server.getBySpec(cpu, mem);
			server.save();
			
			// check the server properties
			server.id.should.be.above(0);
			server.name.should.equal(name);
			server.description.should.equal(description);
			server.tags.should.be.an.instanceof(Array);
			server.tags.length.should.equal(1);
			server.tags[0].should.equal(tag);
			server.plan.cpu.should.equal(cpu);
			server.plan.memoryGib.should.equal(mem);
			
			// connect to shared segment
			trace('connecting the server to shared segment...');
			var iface = server.addIface();
			iface.should.be.an.instanceof(saclient.cloud.resource.Iface);
			iface.id.should.be.above(0);
			iface.connectToSharedSegment();
			
			// wait disk copy
			trace('waiting disk copy...');
			if (!disk.sleepWhileCopying()) should.fail('アーカイブからディスクへのコピーがタイムアウトしました');
			disk.source = null;
			disk.reload();
			disk.source.should.be.an.instanceof(saclient.cloud.resource.Archive);
			disk.source.id.should.equal(archive.id);
			disk.sizeGib.should.equal(archive.sizeGib);
			//console.log(disk.dump());
			
			// connect the disk to the server
			trace('connecting the disk to the server...');
			disk.connectTo(server);
			
			// config the disk
			trace('writing configuration to the disk...');
			var diskconf = disk.createConfig();
			diskconf.hostName = hostName;
			diskconf.password = Math.random().toString(36).slice(2);
			diskconf.sshKey = sshPublicKey;
			diskconf.scripts.push(script
			diskconf.write();
			
			// boot
			trace('booting the server...');
			server.boot();
			api.sleep(3);
			
			// boot conflict
			trace('checking the server power conflicts...');
			// 'should.throw' does not work correctly in a Fiber
			var ex = null;
			try {
				server.boot();
			}
			catch (ex_) {
				// 'should.*' does not work correctly in a 'catch' block in a Fiber
				ex = ex_;
			}
			ex.should.be.an.instanceof(saclient.errors.HttpConflictException);
			// 'サーバ起動中の起動試行時は HttpConflictException がスローされなければなりません'
			
			// ssh
			var ipAddress = server.ifaces[0].ipAddress;
			(!!ipAddress).should.be.true;
			var cmd = 'ssh -oStrictHostKeyChecking=no -oUserKnownHostsFile=/dev/null -i'+sshPrivateKeyFile+' root@'+ipAddress+' hostname 2>/dev/null';
			var sshSuccess = false;
			trace('trying to SSH to the server...');
			for (var i=0; i<10; i++) {
				api.sleep(5);
				if (hostName != execSync(cmd).replace(/\s+$/, '')) continue;
				sshSuccess = true;
				break;
			}
			if (!sshSuccess) should.fail('作成したサーバへ正常にSSHできません');
			
			// stop the server
			api.sleep(1);
			trace('stopping the server...');
			server.stop();
			server.sleepUntilDown().should.be.ok;
			
			// disconnect the disk from the server
			trace('disconnecting the disk from the server...');
			disk.disconnect();
			
			// delete the server
			trace('deleting the server...');
			server.destroy();
			
			// duplicate the disk
			trace('duplicating the disk (expanding to 40GiB)...');
			var disk2 = api.disk.create();
			disk2.name = name + '-copy';
			disk2.description = description;
			disk2.tags = [tag];
			disk2.source = disk;
			disk2.sizeGib = 40;
			disk2.save();
			
			// wait disk duplication
			trace('waiting disk duplication...');
			if (!disk2.sleepWhileCopying()) should.fail('ディスクの複製がタイムアウトしました');
			disk2.source = null;
			disk2.reload();
			disk2.source.should.be.an.instanceof(saclient.cloud.resource.Disk);
			disk2.source.id.should.equal(disk.id);
			disk2.sizeGib.should.equal(40);
			
			// delete the disk
			trace('deleting the disk...');
			
			var id = disk2.id;
			disk2.destroy();
			ex = null;
			try { api.disk.getById(id); } catch (ex_) { ex = ex_; }
			ex.should.be.an.instanceof(saclient.errors.HttpNotFoundException);
			
			id = disk.id;
			disk.destroy();
			ex = null;
			try { api.disk.getById(id); } catch (ex_) { ex = ex_; }
			ex.should.be.an.instanceof(saclient.errors.HttpNotFoundException);
			
			done();
			
		}).run();
	});
	
	
	
	after(function(){
		config = null;
		api = null;
	});
	
	
	
});

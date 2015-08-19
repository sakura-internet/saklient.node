'use strict';

var should = require('should');
var assert = require('assert');

var path = require('path');
var root = path.dirname(__dirname);
module.paths.unshift(root + '/lib');
var saklient = require('saklient');

var Util = saklient.Util;
var API = saklient.cloud.API;
var SaklientException = saklient.errors.SaklientException;

describe('Util', function () {
	
	it('should access objects by path', function(){
		var test = {};
		Util.setByPath(test, 'top', 123);
		test.top.should.equal(123);
		Util.setByPath(test, 'first.second', 456);
		test.first.second.should.equal(456);
		Util.setByPath(test, '.weird..path', 789);
		test.weird.path.should.equal(789);
		Util.setByPath(test, 'existing.null', null);
		test.existing.should.be.instanceof(Object);
		Util.getByPath(test, 'existing').should.be.instanceof(Object);
		(Util.getByPath(test, 'existing.null') === null).should.be.true;
		//
		Util.getByPath(test, 'top').should.equal(123);
		Util.getByPath(test, 'first.second').should.equal(456);
		Util.getByPath(test, '.weird..path').should.equal(789);
		//
		(Util.getByPath(test, 'nothing') === null).should.be.true;
		(Util.getByPath(test, 'nothing.child') === null).should.be.true;
		(Util.getByPath(test, 'top.child') === null).should.be.true;
		//
		Util.existsPath(test, 'top').should.be.true;
		Util.existsPath(test, 'top.child').should.be.false;
		Util.existsPath(test, 'first.second').should.be.true;
		Util.existsPath(test, '.weird..path').should.be.true;
		Util.existsPath(test, 'nothing').should.be.false;
		Util.existsPath(test, 'nothing.child').should.be.false;
		Util.existsPath(test, 'existing').should.be.true;
		Util.existsPath(test, 'existing.null').should.be.true;
		//
		test.first.second *= 10;
		Util.getByPath(test, 'first.second').should.equal(4560);
	});
	
	it('should validate arguments', function(){
		(function(){
			API.authorize('abc');
		}).should.throw(/argument_count_mismatch/);
		(function(){
			API.authorize('abc', []);
		}).should.throw(/argument_type_mismatch/);
		(function(){
			var server = API.authorize('a', 'a').server.create();
			server.availability = 'available';
		}).should.throw(/Cannot set property/i);
	});

	it('should convert ip to/from long', function(){
		//
		(Util.ip2long('0.0.0.0') === 0).should.be.true;
		(Util.ip2long('127.255.255.255') === 0x7FFFFFFF).should.be.true;
		(Util.ip2long('128.0.0.0') === 0x80000000).should.be.true;
		(Util.ip2long('255.255.255.255') === 0xFFFFFFFF).should.be.true;
		(Util.ip2long('222.173.190.239') === 0xDEADBEEF).should.be.true;
		//
		(Util.long2ip(0) === '0.0.0.0').should.be.true;
		(Util.long2ip(0x7FFFFFFF) === '127.255.255.255').should.be.true;
		(Util.long2ip(0x80000000) === '128.0.0.0').should.be.true;
		(Util.long2ip(0xFFFFFFFF) === '255.255.255.255').should.be.true;
		(Util.long2ip(0xDEADBEEF) === '222.173.190.239').should.be.true;
		(Util.long2ip(Util.ip2long('127.255.255.255') + 1) === '128.0.0.0').should.be.true;
		//
		(Util.ip2long(null) === null).should.be.true;
		(Util.ip2long(0) === null).should.be.true;
		(Util.ip2long('') === null).should.be.true;
		(Util.ip2long('x') === null).should.be.true;
		(Util.ip2long('0.0.0') === null).should.be.true;
		(Util.ip2long('0.0.0.x') === null).should.be.true;
		(Util.ip2long('0.0.0.0.0') === null).should.be.true;
		(Util.ip2long('255.255.255.256') === null).should.be.true;
		(Util.ip2long('256.255.255.255') === null).should.be.true;
		(Util.long2ip(null) === null).should.be.true;
		(Util.long2ip('0') === '0.0.0.0').should.be.true;
		(Util.long2ip(Util.ip2long('0.0.0.0') - 1) === '255.255.255.255').should.be.true;
		(Util.long2ip(Util.ip2long('255.255.255.255') + 1) === null).should.be.true;
	});

});


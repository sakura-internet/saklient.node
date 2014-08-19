'use strict';

var should = require('should');
var assert = require('assert');

var path = require('path');
var root = path.dirname(__dirname);
module.paths.unshift(root + '/lib');
var saklient = require('saklient');

var ExceptionFactory = saklient.errors.ExceptionFactory;

describe('Exception', function () {

	it('should be created', function () {
		var x;

		x = ExceptionFactory.create(404);
		x.should.be.an.instanceof(saklient.errors.HttpNotFoundException);

		x = ExceptionFactory.create(409, 'server_power_must_be_up');
		x.should.be.an.instanceof(saklient.cloud.errors.ServerPowerMustBeUpException);

		x = ExceptionFactory.create(666, 'nameless_http_error', 'Ia! Cthulhu Fthagn!');
		x.should.be.an.instanceof(saklient.errors.HttpException);
		x.message.should.equal('[nameless_http_error] Ia! Cthulhu Fthagn!');

	});

});


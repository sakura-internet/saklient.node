/// <reference path="../../../node.d.ts" />

export = HttpExpectationFailedException;

import Util = require('../Util');
import HttpException = require('./HttpException');

/**
 * HTTPエラー。Expectation Failed.
 * 
 * @class HttpExpectationFailedException
 * @constructor
 * @extends HttpException
 */
class HttpExpectationFailedException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HttpExpectationFailedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Expectation Failed.";
	
}


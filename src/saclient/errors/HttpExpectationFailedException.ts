/// <reference path="../../node.d.ts" />

export = HttpExpectationFailedException;

import HttpException = require('./HttpException');

'use strict';

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
	 * @member saclient.errors.HttpExpectationFailedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Expectation Failed.";
	
}


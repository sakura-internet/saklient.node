/// <reference path="../../node.d.ts" />

export = HttpRequestTimeoutException;

import HttpException = require('./HttpException');

/**
 * HTTPエラー。Request Timeout.
 * 
 * @class HttpRequestTimeoutException
 * @constructor
 * @extends HttpException
 */
class HttpRequestTimeoutException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpRequestTimeoutException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Request Timeout.";
	
}


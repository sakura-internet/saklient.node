/// <reference path="../../node.d.ts" />

export = HttpRequestTimeoutException;

import HttpException = require('./HttpException');

'use strict';

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
	 * @member saklient.errors.HttpRequestTimeoutException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Request Timeout.";
	
}


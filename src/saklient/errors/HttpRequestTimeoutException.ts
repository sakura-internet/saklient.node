/// <reference path="../../node.d.ts" />

export = HttpRequestTimeoutException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Request Timeout.
 */
class HttpRequestTimeoutException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpRequestTimeoutException#defaultMessage
	 * @default "HTTPエラー。Request Timeout."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Request Timeout.";
	
}


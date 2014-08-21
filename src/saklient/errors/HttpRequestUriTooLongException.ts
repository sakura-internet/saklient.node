/// <reference path="../../node.d.ts" />

export = HttpRequestUriTooLongException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Request Uri Too Long.
 */
class HttpRequestUriTooLongException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpRequestUriTooLongException#defaultMessage
	 * @default "HTTPエラー。Request Uri Too Long."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Request Uri Too Long.";
	
}


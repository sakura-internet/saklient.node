'use strict';

/// <reference path="../../node.d.ts" />

export = HttpRequestUriTooLongException;

import HttpException = require('./HttpException');

/**
 * HTTPエラー。Request Uri Too Long.
 * 
 * @class HttpRequestUriTooLongException
 * @constructor
 * @extends HttpException
 */
class HttpRequestUriTooLongException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpRequestUriTooLongException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Request Uri Too Long.";
	
}


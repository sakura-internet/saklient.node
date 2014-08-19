/// <reference path="../../node.d.ts" />

export = HttpRequestEntityTooLargeException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Request Entity Too Large.
 * 
 * @class HttpRequestEntityTooLargeException
 * @constructor
 * @extends HttpException
 */
class HttpRequestEntityTooLargeException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpRequestEntityTooLargeException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Request Entity Too Large.";
	
}


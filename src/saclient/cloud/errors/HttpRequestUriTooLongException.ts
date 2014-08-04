/// <reference path="../../../node.d.ts" />

export = HttpRequestUriTooLongException;

import Util = require('../../Util');
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
	 * @member saclient.cloud.errors.HttpRequestUriTooLongException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Request Uri Too Long.";
	
}


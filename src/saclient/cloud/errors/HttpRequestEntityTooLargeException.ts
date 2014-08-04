/// <reference path="../../../node.d.ts" />

export = HttpRequestEntityTooLargeException;

import Util = require('../../Util');
import HttpException = require('./HttpException');

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
	 * @member saclient.cloud.errors.HttpRequestEntityTooLargeException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Request Entity Too Large.";
	
}


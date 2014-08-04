/// <reference path="../../node.d.ts" />

export = HttpGoneException;

import HttpException = require('./HttpException');

/**
 * HTTPエラー。Gone.
 * 
 * @class HttpGoneException
 * @constructor
 * @extends HttpException
 */
class HttpGoneException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpGoneException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Gone.";
	
}


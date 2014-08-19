/// <reference path="../../node.d.ts" />

export = HttpGoneException;

import HttpException = require('./HttpException');

'use strict';

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
	 * @member saklient.errors.HttpGoneException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Gone.";
	
}


/// <reference path="../../node.d.ts" />

export = HttpUnsupportedMediaTypeException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Unsupported Media Type.
 * 
 * @class HttpUnsupportedMediaTypeException
 * @constructor
 * @extends HttpException
 */
class HttpUnsupportedMediaTypeException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpUnsupportedMediaTypeException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Unsupported Media Type.";
	
}


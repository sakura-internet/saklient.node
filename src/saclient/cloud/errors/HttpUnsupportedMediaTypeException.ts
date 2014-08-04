/// <reference path="../../../node.d.ts" />

export = HttpUnsupportedMediaTypeException;

import Util = require('../../Util');
import HttpException = require('./HttpException');

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
	 * @member saclient.cloud.errors.HttpUnsupportedMediaTypeException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Unsupported Media Type.";
	
}


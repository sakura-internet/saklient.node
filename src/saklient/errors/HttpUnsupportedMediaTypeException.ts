/// <reference path="../../node.d.ts" />

export = HttpUnsupportedMediaTypeException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Unsupported Media Type.
 */
class HttpUnsupportedMediaTypeException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpUnsupportedMediaTypeException#defaultMessage
	 * @default "HTTPエラー。Unsupported Media Type."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Unsupported Media Type.";
	
}


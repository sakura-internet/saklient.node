/// <reference path="../../node.d.ts" />

export = HttpLengthRequiredException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Length Required.
 */
class HttpLengthRequiredException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpLengthRequiredException#defaultMessage
	 * @default "HTTPエラー。Length Required."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Length Required.";
	
}


/// <reference path="../../node.d.ts" />

export = HttpLengthRequiredException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Length Required.
 * 
 * @class HttpLengthRequiredException
 * @constructor
 * @extends HttpException
 */
class HttpLengthRequiredException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpLengthRequiredException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Length Required.";
	
}


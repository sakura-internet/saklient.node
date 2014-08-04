/// <reference path="../../node.d.ts" />

export = HttpPaymentRequiredException;

import HttpException = require('./HttpException');

/**
 * HTTPエラー。Payment Required.
 * 
 * @class HttpPaymentRequiredException
 * @constructor
 * @extends HttpException
 */
class HttpPaymentRequiredException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpPaymentRequiredException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Payment Required.";
	
}


/// <reference path="../../node.d.ts" />

export = HttpPaymentRequiredException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Payment Required.
 */
class HttpPaymentRequiredException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpPaymentRequiredException#defaultMessage
	 * @default "HTTPエラー。Payment Required."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Payment Required.";
	
}


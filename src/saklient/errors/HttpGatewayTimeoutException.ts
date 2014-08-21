/// <reference path="../../node.d.ts" />

export = HttpGatewayTimeoutException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Gateway Timeout.
 */
class HttpGatewayTimeoutException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpGatewayTimeoutException#defaultMessage
	 * @default "HTTPエラー。Gateway Timeout."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Gateway Timeout.";
	
}


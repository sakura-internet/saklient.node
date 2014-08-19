/// <reference path="../../node.d.ts" />

export = HttpGatewayTimeoutException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Gateway Timeout.
 * 
 * @class HttpGatewayTimeoutException
 * @constructor
 * @extends HttpException
 */
class HttpGatewayTimeoutException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpGatewayTimeoutException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Gateway Timeout.";
	
}


/// <reference path="../../../node.d.ts" />

export = HttpGatewayTimeoutException;

import Util = require('../../Util');
import HttpException = require('./HttpException');

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
	 * @member saclient.cloud.errors.HttpGatewayTimeoutException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Gateway Timeout.";
	
}


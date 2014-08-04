/// <reference path="../../node.d.ts" />

export = HttpBadGatewayException;

import Util = require('../Util');
import HttpException = require('./HttpException');

/**
 * HTTPエラー。Bad Gateway.
 * 
 * @class HttpBadGatewayException
 * @constructor
 * @extends HttpException
 */
class HttpBadGatewayException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpBadGatewayException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Bad Gateway.";
	
}


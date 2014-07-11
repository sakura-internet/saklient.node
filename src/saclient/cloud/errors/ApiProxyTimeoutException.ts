/// <reference path="../../../node.d.ts" />

export = ApiProxyTimeoutException;

import Util = require('../Util');
import HttpGatewayTimeoutException = require('./HttpGatewayTimeoutException');

/**
 * APIプロクシがタイムアウトしました。サーバが混雑している可能性があります。
 * 
 * @class ApiProxyTimeoutException
 * @constructor
 * @extends HttpGatewayTimeoutException
 */
class ApiProxyTimeoutException extends HttpGatewayTimeoutException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ApiProxyTimeoutException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "APIプロクシがタイムアウトしました。サーバが混雑している可能性があります。";
	
}


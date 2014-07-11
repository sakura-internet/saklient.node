/// <reference path="../../../node.d.ts" />

export = ApiProxyTimeoutNonGetException;

import Util = require('../Util');
import HttpGatewayTimeoutException = require('./HttpGatewayTimeoutException');

/**
 * APIプロクシが応答しません。要求は実行された可能性があります。しばらく時間をおいてからご確認ください。
 * 
 * @class ApiProxyTimeoutNonGetException
 * @constructor
 * @extends HttpGatewayTimeoutException
 */
class ApiProxyTimeoutNonGetException extends HttpGatewayTimeoutException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ApiProxyTimeoutNonGetException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "APIプロクシが応答しません。要求は実行された可能性があります。しばらく時間をおいてからご確認ください。";
	
}


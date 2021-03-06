/// <reference path="../../../node.d.ts" />

export = ApiProxyTimeoutNonGetException;

import HttpGatewayTimeoutException = require('../../errors/HttpGatewayTimeoutException');

'use strict';

/**
 * APIプロクシが応答しません。要求は実行された可能性があります。しばらく時間をおいてからご確認ください。
 */
class ApiProxyTimeoutNonGetException extends HttpGatewayTimeoutException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "APIプロクシが応答しません。要求は実行された可能性があります。しばらく時間をおいてからご確認ください。" : message);
	}
	
}


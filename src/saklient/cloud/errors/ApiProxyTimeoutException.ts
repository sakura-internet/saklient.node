/// <reference path="../../../node.d.ts" />

export = ApiProxyTimeoutException;

import HttpGatewayTimeoutException = require('../../errors/HttpGatewayTimeoutException');

'use strict';

/**
 * APIプロクシがタイムアウトしました。サーバが混雑している可能性があります。
 */
class ApiProxyTimeoutException extends HttpGatewayTimeoutException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ApiProxyTimeoutException#defaultMessage
	 * @default "APIプロクシがタイムアウトしました。サーバが混雑している可能性があります。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "APIプロクシがタイムアウトしました。サーバが混雑している可能性があります。";
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message);
	}
	
}


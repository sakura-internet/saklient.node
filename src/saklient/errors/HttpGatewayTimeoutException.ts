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


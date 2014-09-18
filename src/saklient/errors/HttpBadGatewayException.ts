/// <reference path="../../node.d.ts" />

export = HttpBadGatewayException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Bad Gateway.
 */
class HttpBadGatewayException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Bad Gateway." : message);
	}
	
}


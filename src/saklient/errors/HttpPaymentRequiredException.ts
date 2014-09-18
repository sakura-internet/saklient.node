/// <reference path="../../node.d.ts" />

export = HttpPaymentRequiredException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Payment Required.
 */
class HttpPaymentRequiredException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Payment Required." : message);
	}
	
}


/// <reference path="../../node.d.ts" />

export = HttpRequestTimeoutException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Request Timeout.
 */
class HttpRequestTimeoutException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Request Timeout." : message);
	}
	
}


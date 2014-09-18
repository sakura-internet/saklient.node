/// <reference path="../../node.d.ts" />

export = HttpRequestUriTooLongException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Request Uri Too Long.
 */
class HttpRequestUriTooLongException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Request Uri Too Long." : message);
	}
	
}


/// <reference path="../../node.d.ts" />

export = HttpMethodNotAllowedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * 要求されたHTTPメソッドは対応していません。
 */
class HttpMethodNotAllowedException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求されたHTTPメソッドは対応していません。" : message);
	}
	
}


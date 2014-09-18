/// <reference path="../../node.d.ts" />

export = HttpForbiddenException;

import HttpException = require('./HttpException');

'use strict';

/**
 * 要求された操作は許可されていません。権限エラー。
 */
class HttpForbiddenException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作は許可されていません。権限エラー。" : message);
	}
	
}


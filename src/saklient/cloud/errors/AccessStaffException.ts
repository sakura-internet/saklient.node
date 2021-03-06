/// <reference path="../../../node.d.ts" />

export = AccessStaffException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。権限エラー。
 */
class AccessStaffException extends HttpForbiddenException {
	
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


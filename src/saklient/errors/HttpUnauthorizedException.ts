/// <reference path="../../node.d.ts" />

export = HttpUnauthorizedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * この操作は認証が必要です。IDまたはパスワードが誤っている可能性があります。
 */
class HttpUnauthorizedException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "この操作は認証が必要です。IDまたはパスワードが誤っている可能性があります。" : message);
	}
	
}


/// <reference path="../../../node.d.ts" />

export = AccessTokenException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。この操作は有効期限内のトークンが必要です。
 */
class AccessTokenException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.AccessTokenException#defaultMessage
	 * @default "要求された操作は許可されていません。この操作は有効期限内のトークンが必要です。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。この操作は有効期限内のトークンが必要です。";
	
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


/// <reference path="../../../node.d.ts" />

export = AccountNotSpecifiedException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。このAPIはアカウントを特定できる認証方法でアクセスする必要があります。
 */
class AccountNotSpecifiedException extends HttpForbiddenException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作は許可されていません。このAPIはアカウントを特定できる認証方法でアクセスする必要があります。" : message);
	}
	
}


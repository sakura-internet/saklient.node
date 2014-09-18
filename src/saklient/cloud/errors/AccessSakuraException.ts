/// <reference path="../../../node.d.ts" />

export = AccessSakuraException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。さくらインターネットの会員メニューより認証後に実行してください。
 */
class AccessSakuraException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.AccessSakuraException#defaultMessage
	 * @default "要求された操作は許可されていません。さくらインターネットの会員メニューより認証後に実行してください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。さくらインターネットの会員メニューより認証後に実行してください。";
	
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


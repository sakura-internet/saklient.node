/// <reference path="../../node.d.ts" />

export = HttpForbiddenException;

import HttpException = require('./HttpException');

'use strict';

/**
 * 要求された操作は許可されていません。権限エラー。
 */
class HttpForbiddenException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpForbiddenException#defaultMessage
	 * @default "要求された操作は許可されていません。権限エラー。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。権限エラー。";
	
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

/// <reference path="../../../node.d.ts" />

export = TemplateIsIncompleteException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このテンプレートは不完全です。複製処理等の完了後に再度お試しください。
 */
class TemplateIsIncompleteException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.TemplateIsIncompleteException#defaultMessage
	 * @default "要求された操作を行えません。このテンプレートは不完全です。複製処理等の完了後に再度お試しください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このテンプレートは不完全です。複製処理等の完了後に再度お試しください。";
	
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


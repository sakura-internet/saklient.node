/// <reference path="../../node.d.ts" />

export = HttpBadRequestException;

import HttpException = require('./HttpException');

'use strict';

/**
 * 不適切な要求です。パラメータの指定誤り、入力規則違反です。入力内容をご確認ください。
 */
class HttpBadRequestException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpBadRequestException#defaultMessage
	 * @default "不適切な要求です。パラメータの指定誤り、入力規則違反です。入力内容をご確認ください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。パラメータの指定誤り、入力規則違反です。入力内容をご確認ください。";
	
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


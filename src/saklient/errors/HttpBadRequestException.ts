/// <reference path="../../node.d.ts" />

export = HttpBadRequestException;

import HttpException = require('./HttpException');

'use strict';

/**
 * 不適切な要求です。パラメータの指定誤り、入力規則違反です。入力内容をご確認ください。
 */
class HttpBadRequestException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "不適切な要求です。パラメータの指定誤り、入力規則違反です。入力内容をご確認ください。" : message);
	}
	
}


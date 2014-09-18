/// <reference path="../../../node.d.ts" />

export = SizeMismatchException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。参照するリソースのサイズが合致しません。
 */
class SizeMismatchException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.SizeMismatchException#defaultMessage
	 * @default "不適切な要求です。参照するリソースのサイズが合致しません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。参照するリソースのサイズが合致しません。";
	
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


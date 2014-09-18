/// <reference path="../../../node.d.ts" />

export = InvalidFormatException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。パラメータに含まれている値のフォーマットが一部不正です。
 */
class InvalidFormatException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.InvalidFormatException#defaultMessage
	 * @default "不適切な要求です。パラメータに含まれている値のフォーマットが一部不正です。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。パラメータに含まれている値のフォーマットが一部不正です。";
	
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


/// <reference path="../../../node.d.ts" />

export = UnsupportedResClassException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。この種類のリソースは要求された操作に対応しません。
 */
class UnsupportedResClassException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.UnsupportedResClassException#defaultMessage
	 * @default "不適切な要求です。この種類のリソースは要求された操作に対応しません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。この種類のリソースは要求された操作に対応しません。";
	
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


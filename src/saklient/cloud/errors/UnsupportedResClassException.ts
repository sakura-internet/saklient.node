/// <reference path="../../../node.d.ts" />

export = UnsupportedResClassException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。この種類のリソースは要求された操作に対応しません。
 */
class UnsupportedResClassException extends HttpBadRequestException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "不適切な要求です。この種類のリソースは要求された操作に対応しません。" : message);
	}
	
}


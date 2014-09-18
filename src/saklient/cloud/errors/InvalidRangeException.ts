/// <reference path="../../../node.d.ts" />

export = InvalidRangeException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。パラメータに含まれている値の範囲が一部不正です。
 */
class InvalidRangeException extends HttpBadRequestException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "不適切な要求です。パラメータに含まれている値の範囲が一部不正です。" : message);
	}
	
}


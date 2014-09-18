/// <reference path="../../../node.d.ts" />

export = CopyToItselfException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。自分自身をソースとするコピーはできません。
 */
class CopyToItselfException extends HttpBadRequestException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "不適切な要求です。自分自身をソースとするコピーはできません。" : message);
	}
	
}


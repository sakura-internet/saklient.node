/// <reference path="../../../node.d.ts" />

export = FilterNullComparisonException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。nullとは比較できない演算子がフィルタ中に含まれています。
 */
class FilterNullComparisonException extends HttpBadRequestException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "不適切な要求です。nullとは比較できない演算子がフィルタ中に含まれています。" : message);
	}
	
}


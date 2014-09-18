/// <reference path="../../../node.d.ts" />

export = FilterArrayComparisonException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。配列とは比較できない演算子がフィルタ中に含まれています。
 */
class FilterArrayComparisonException extends HttpBadRequestException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "不適切な要求です。配列とは比較できない演算子がフィルタ中に含まれています。" : message);
	}
	
}


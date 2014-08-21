/// <reference path="../../../node.d.ts" />

export = FilterArrayComparisonException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。配列とは比較できない演算子がフィルタ中に含まれています。
 */
class FilterArrayComparisonException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.FilterArrayComparisonException#defaultMessage
	 * @default "不適切な要求です。配列とは比較できない演算子がフィルタ中に含まれています。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。配列とは比較できない演算子がフィルタ中に含まれています。";
	
}


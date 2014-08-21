/// <reference path="../../../node.d.ts" />

export = FilterNullComparisonException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。nullとは比較できない演算子がフィルタ中に含まれています。
 */
class FilterNullComparisonException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.FilterNullComparisonException#defaultMessage
	 * @default "不適切な要求です。nullとは比較できない演算子がフィルタ中に含まれています。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。nullとは比較できない演算子がフィルタ中に含まれています。";
	
}


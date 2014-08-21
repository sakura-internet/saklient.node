/// <reference path="../../../node.d.ts" />

export = FilterBadOperatorException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。フィールドの型に対応していない演算子がフィルタ中に含まれています。
 */
class FilterBadOperatorException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.FilterBadOperatorException#defaultMessage
	 * @default "不適切な要求です。フィールドの型に対応していない演算子がフィルタ中に含まれています。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。フィールドの型に対応していない演算子がフィルタ中に含まれています。";
	
}


/// <reference path="../../../node.d.ts" />

export = FilterNullComparisonException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。nullとは比較できない演算子がフィルタ中に含まれています。
 * 
 * @class FilterNullComparisonException
 * @constructor
 * @extends HttpBadRequestException
 */
class FilterNullComparisonException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.FilterNullComparisonException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。nullとは比較できない演算子がフィルタ中に含まれています。";
	
}


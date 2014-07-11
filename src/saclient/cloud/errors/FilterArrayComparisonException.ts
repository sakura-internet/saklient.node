/// <reference path="../../../node.d.ts" />

export = FilterArrayComparisonException;

import Util = require('../Util');
import HttpBadRequestException = require('./HttpBadRequestException');

/**
 * 不適切な要求です。配列とは比較できない演算子がフィルタ中に含まれています。
 * 
 * @class FilterArrayComparisonException
 * @constructor
 * @extends HttpBadRequestException
 */
class FilterArrayComparisonException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.FilterArrayComparisonException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。配列とは比較できない演算子がフィルタ中に含まれています。";
	
}


/// <reference path="../../../node.d.ts" />

export = FilterBadOperatorException;

import Util = require('../Util');
import HttpBadRequestException = require('./HttpBadRequestException');

/**
 * 不適切な要求です。フィールドの型に対応していない演算子がフィルタ中に含まれています。
 * 
 * @class FilterBadOperatorException
 * @constructor
 * @extends HttpBadRequestException
 */
class FilterBadOperatorException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.FilterBadOperatorException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。フィールドの型に対応していない演算子がフィルタ中に含まれています。";
	
}

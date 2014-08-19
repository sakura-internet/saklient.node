/// <reference path="../../../node.d.ts" />

export = FilterUnknownOperatorException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。不明な演算子がフィルタ中に含まれています。
 * 
 * @class FilterUnknownOperatorException
 * @constructor
 * @extends HttpBadRequestException
 */
class FilterUnknownOperatorException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.FilterUnknownOperatorException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。不明な演算子がフィルタ中に含まれています。";
	
}


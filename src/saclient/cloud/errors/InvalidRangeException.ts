/// <reference path="../../../node.d.ts" />

export = InvalidRangeException;

import Util = require('../Util');
import HttpBadRequestException = require('./HttpBadRequestException');

/**
 * 不適切な要求です。パラメータに含まれている値の範囲が一部不正です。
 * 
 * @class InvalidRangeException
 * @constructor
 * @extends HttpBadRequestException
 */
class InvalidRangeException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.InvalidRangeException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。パラメータに含まれている値の範囲が一部不正です。";
	
}


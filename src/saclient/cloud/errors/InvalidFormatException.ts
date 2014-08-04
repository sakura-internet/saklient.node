/// <reference path="../../../node.d.ts" />

export = InvalidFormatException;

import Util = require('../../Util');
import HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
 * 不適切な要求です。パラメータに含まれている値のフォーマットが一部不正です。
 * 
 * @class InvalidFormatException
 * @constructor
 * @extends HttpBadRequestException
 */
class InvalidFormatException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.InvalidFormatException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。パラメータに含まれている値のフォーマットが一部不正です。";
	
}


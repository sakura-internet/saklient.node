/// <reference path="../../../node.d.ts" />

export = InvalidFormatException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

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


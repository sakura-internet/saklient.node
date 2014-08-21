/// <reference path="../../../node.d.ts" />

export = InvalidRangeException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。パラメータに含まれている値の範囲が一部不正です。
 */
class InvalidRangeException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.InvalidRangeException#defaultMessage
	 * @default "不適切な要求です。パラメータに含まれている値の範囲が一部不正です。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。パラメータに含まれている値の範囲が一部不正です。";
	
}


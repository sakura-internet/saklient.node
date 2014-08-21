/// <reference path="../../../node.d.ts" />

export = AmbiguousZoneException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。リクエストパラメータに指定されたゾーンをパスに含むURLへアクセスしてください。
 */
class AmbiguousZoneException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.AmbiguousZoneException#defaultMessage
	 * @default "不適切な要求です。リクエストパラメータに指定されたゾーンをパスに含むURLへアクセスしてください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。リクエストパラメータに指定されたゾーンをパスに含むURLへアクセスしてください。";
	
}


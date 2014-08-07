/// <reference path="../../../node.d.ts" />

export = AmbiguousZoneException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。リクエストパラメータに指定されたゾーンをパスに含むURLへアクセスしてください。
 * 
 * @class AmbiguousZoneException
 * @constructor
 * @extends HttpBadRequestException
 */
class AmbiguousZoneException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.AmbiguousZoneException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。リクエストパラメータに指定されたゾーンをパスに含むURLへアクセスしてください。";
	
}


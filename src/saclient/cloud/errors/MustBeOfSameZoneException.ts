/// <reference path="../../../node.d.ts" />

export = MustBeOfSameZoneException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
 * 不適切な要求です。参照するリソースは同一ゾーンに存在しなければなりません。
 * 
 * @class MustBeOfSameZoneException
 * @constructor
 * @extends HttpBadRequestException
 */
class MustBeOfSameZoneException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.MustBeOfSameZoneException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。参照するリソースは同一ゾーンに存在しなければなりません。";
	
}


/// <reference path="../../../node.d.ts" />

export = MustBeOfSameZoneException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。参照するリソースは同一ゾーンに存在しなければなりません。
 */
class MustBeOfSameZoneException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.MustBeOfSameZoneException#defaultMessage
	 * @default "不適切な要求です。参照するリソースは同一ゾーンに存在しなければなりません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。参照するリソースは同一ゾーンに存在しなければなりません。";
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message);
	}
	
}


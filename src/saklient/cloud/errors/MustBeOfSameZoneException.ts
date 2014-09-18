/// <reference path="../../../node.d.ts" />

export = MustBeOfSameZoneException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。参照するリソースは同一ゾーンに存在しなければなりません。
 */
class MustBeOfSameZoneException extends HttpBadRequestException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "不適切な要求です。参照するリソースは同一ゾーンに存在しなければなりません。" : message);
	}
	
}


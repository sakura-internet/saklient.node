/// <reference path="../../../node.d.ts" />

export = InvalidParamCombException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。同時に指定できないパラメータが含まれています。
 */
class InvalidParamCombException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.InvalidParamCombException#defaultMessage
	 * @default "不適切な要求です。同時に指定できないパラメータが含まれています。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。同時に指定できないパラメータが含まれています。";
	
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


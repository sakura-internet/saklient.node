/// <reference path="../../../node.d.ts" />

export = MissingParamException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。必要なパラメータが指定されていません。
 */
class MissingParamException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.MissingParamException#defaultMessage
	 * @default "不適切な要求です。必要なパラメータが指定されていません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。必要なパラメータが指定されていません。";
	
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


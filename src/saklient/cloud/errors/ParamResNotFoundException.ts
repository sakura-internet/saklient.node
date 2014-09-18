/// <reference path="../../../node.d.ts" />

export = ParamResNotFoundException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。パラメータで指定されたリソースが存在しません。IDをご確認ください。
 */
class ParamResNotFoundException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ParamResNotFoundException#defaultMessage
	 * @default "不適切な要求です。パラメータで指定されたリソースが存在しません。IDをご確認ください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。パラメータで指定されたリソースが存在しません。IDをご確認ください。";
	
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


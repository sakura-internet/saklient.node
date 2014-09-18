/// <reference path="../../../node.d.ts" />

export = TooManyRequestException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * 要求を受け付けできません。リクエストの密度が高すぎます。
 */
class TooManyRequestException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.TooManyRequestException#defaultMessage
	 * @default "要求を受け付けできません。リクエストの密度が高すぎます。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。リクエストの密度が高すぎます。";
	
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


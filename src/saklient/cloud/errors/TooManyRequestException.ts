/// <reference path="../../../node.d.ts" />

export = TooManyRequestException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * 要求を受け付けできません。リクエストの密度が高すぎます。
 */
class TooManyRequestException extends HttpServiceUnavailableException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求を受け付けできません。リクエストの密度が高すぎます。" : message);
	}
	
}


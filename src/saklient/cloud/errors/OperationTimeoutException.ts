/// <reference path="../../../node.d.ts" />

export = OperationTimeoutException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。操作がタイムアウトしました。サーバが混雑している可能性があります。
 */
class OperationTimeoutException extends HttpServiceUnavailableException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "サービスが利用できません。操作がタイムアウトしました。サーバが混雑している可能性があります。" : message);
	}
	
}


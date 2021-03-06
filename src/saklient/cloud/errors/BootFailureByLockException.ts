/// <reference path="../../../node.d.ts" />

export = BootFailureByLockException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバが予期せず終了したため、ロックされています。しばらく時間をおいてから再度お試しください。
 */
class BootFailureByLockException extends HttpServiceUnavailableException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "サービスが利用できません。サーバが予期せず終了したため、ロックされています。しばらく時間をおいてから再度お試しください。" : message);
	}
	
}


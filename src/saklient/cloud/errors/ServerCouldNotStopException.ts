/// <reference path="../../../node.d.ts" />

export = ServerCouldNotStopException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバを停止できません。再度お試しください。
 */
class ServerCouldNotStopException extends HttpServiceUnavailableException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "サービスが利用できません。サーバを停止できません。再度お試しください。" : message);
	}
	
}


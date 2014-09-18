/// <reference path="../../../node.d.ts" />

export = DisconnectB4DeleteException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。サーバとの接続を切り離した後に実行してください。
 */
class DisconnectB4DeleteException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。サーバとの接続を切り離した後に実行してください。" : message);
	}
	
}


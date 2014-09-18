/// <reference path="../../../node.d.ts" />

export = ServerIsCleaningException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。サーバが終了処理中です。しばらく時間をおいてから再度お試しください。
 */
class ServerIsCleaningException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ServerIsCleaningException#defaultMessage
	 * @default "要求された操作を行えません。サーバが終了処理中です。しばらく時間をおいてから再度お試しください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。サーバが終了処理中です。しばらく時間をおいてから再度お試しください。";
	
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


/// <reference path="../../../node.d.ts" />

export = ServerOperationFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバの操作に失敗しました。
 */
class ServerOperationFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ServerOperationFailureException#defaultMessage
	 * @default "サービスが利用できません。サーバの操作に失敗しました。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバの操作に失敗しました。";
	
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


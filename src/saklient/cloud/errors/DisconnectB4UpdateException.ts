/// <reference path="../../../node.d.ts" />

export = DisconnectB4UpdateException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。サーバと接続された状態では変更できない値が含まれています。
 */
class DisconnectB4UpdateException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。サーバと接続された状態では変更できない値が含まれています。" : message);
	}
	
}


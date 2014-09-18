/// <reference path="../../../node.d.ts" />

export = StillCreatingException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。リソースの作成処理が進行中です。完了後に再度お試しください。
 */
class StillCreatingException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。リソースの作成処理が進行中です。完了後に再度お試しください。" : message);
	}
	
}


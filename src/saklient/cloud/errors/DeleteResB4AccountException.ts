/// <reference path="../../../node.d.ts" />

export = DeleteResB4AccountException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。現在のアカウントで使用している全てのリソースを削除した後に実行してください。
 */
class DeleteResB4AccountException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。現在のアカウントで使用している全てのリソースを削除した後に実行してください。" : message);
	}
	
}


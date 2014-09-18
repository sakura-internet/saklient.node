/// <reference path="../../../node.d.ts" />

export = CdromIsIncompleteException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このISOイメージは不完全です。複製処理等の完了後に再度お試しください。
 */
class CdromIsIncompleteException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。このISOイメージは不完全です。複製処理等の完了後に再度お試しください。" : message);
	}
	
}


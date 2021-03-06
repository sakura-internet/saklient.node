/// <reference path="../../../node.d.ts" />

export = NotReplicatingException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このストレージ上への指定リソースの複製は実行されていません。
 */
class NotReplicatingException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。このストレージ上への指定リソースの複製は実行されていません。" : message);
	}
	
}


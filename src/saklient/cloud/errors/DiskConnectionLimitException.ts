/// <reference path="../../../node.d.ts" />

export = DiskConnectionLimitException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。この接続インタフェースにこれ以上のディスクを接続することができません。
 */
class DiskConnectionLimitException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。この接続インタフェースにこれ以上のディスクを接続することができません。" : message);
	}
	
}


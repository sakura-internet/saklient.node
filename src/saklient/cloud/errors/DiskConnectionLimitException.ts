/// <reference path="../../../node.d.ts" />

export = DiskConnectionLimitException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。この接続インタフェースにこれ以上のディスクを接続することができません。
 */
class DiskConnectionLimitException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DiskConnectionLimitException#defaultMessage
	 * @default "要求された操作を行えません。この接続インタフェースにこれ以上のディスクを接続することができません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。この接続インタフェースにこれ以上のディスクを接続することができません。";
	
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


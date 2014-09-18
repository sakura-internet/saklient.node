/// <reference path="../../../node.d.ts" />

export = DiskIsNotAvailableException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ディスクが利用可能な状態ではありません。コピー処理等の完了後に再度お試しください。
 */
class DiskIsNotAvailableException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DiskIsNotAvailableException#defaultMessage
	 * @default "要求された操作を行えません。ディスクが利用可能な状態ではありません。コピー処理等の完了後に再度お試しください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ディスクが利用可能な状態ではありません。コピー処理等の完了後に再度お試しください。";
	
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

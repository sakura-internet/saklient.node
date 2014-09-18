/// <reference path="../../../node.d.ts" />

export = ArchiveIsIncompleteException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このアーカイブは不完全です。複製処理等の完了後に再度お試しください。
 */
class ArchiveIsIncompleteException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ArchiveIsIncompleteException#defaultMessage
	 * @default "要求された操作を行えません。このアーカイブは不完全です。複製処理等の完了後に再度お試しください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このアーカイブは不完全です。複製処理等の完了後に再度お試しください。";
	
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


/// <reference path="../../../node.d.ts" />

export = OldStoragePlanException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。旧ストレージディスクの提供は終了しました。サーバから該当するディスクを取り外した後、再度お試しください。
 */
class OldStoragePlanException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.OldStoragePlanException#defaultMessage
	 * @default "要求された操作を行えません。旧ストレージディスクの提供は終了しました。サーバから該当するディスクを取り外した後、再度お試しください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。旧ストレージディスクの提供は終了しました。サーバから該当するディスクを取り外した後、再度お試しください。";
	
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

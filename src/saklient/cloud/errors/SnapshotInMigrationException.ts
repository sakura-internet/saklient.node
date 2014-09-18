/// <reference path="../../../node.d.ts" />

export = SnapshotInMigrationException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このスナップショット または これより新しいスナップショットから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。
 */
class SnapshotInMigrationException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.SnapshotInMigrationException#defaultMessage
	 * @default "要求された操作を行えません。このスナップショット または これより新しいスナップショットから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このスナップショット または これより新しいスナップショットから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。";
	
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


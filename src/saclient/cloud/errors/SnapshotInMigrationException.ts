/// <reference path="../../../node.d.ts" />

export = SnapshotInMigrationException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。このスナップショット または これより新しいスナップショットから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。
 * 
 * @class SnapshotInMigrationException
 * @constructor
 * @extends HttpConflictException
 */
class SnapshotInMigrationException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.SnapshotInMigrationException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このスナップショット または これより新しいスナップショットから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。";
	
}


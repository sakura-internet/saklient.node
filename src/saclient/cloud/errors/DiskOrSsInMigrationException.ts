/// <reference path="../../../node.d.ts" />

export = DiskOrSsInMigrationException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このディスク または このディスクのスナップショットから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。
 * 
 * @class DiskOrSsInMigrationException
 * @constructor
 * @extends HttpConflictException
 */
class DiskOrSsInMigrationException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DiskOrSsInMigrationException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このディスク または このディスクのスナップショットから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。";
	
}


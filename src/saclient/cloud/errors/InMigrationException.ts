/// <reference path="../../../node.d.ts" />

export = InMigrationException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このリソースから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。
 * 
 * @class InMigrationException
 * @constructor
 * @extends HttpConflictException
 */
class InMigrationException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.InMigrationException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このリソースから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。";
	
}


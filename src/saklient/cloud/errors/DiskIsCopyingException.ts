/// <reference path="../../../node.d.ts" />

export = DiskIsCopyingException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このディスクへのコピー処理が進行中です。完了後に再度お試しください。
 * 
 * @class DiskIsCopyingException
 * @constructor
 * @extends HttpConflictException
 */
class DiskIsCopyingException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DiskIsCopyingException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このディスクへのコピー処理が進行中です。完了後に再度お試しください。";
	
}


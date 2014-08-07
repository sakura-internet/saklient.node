/// <reference path="../../../node.d.ts" />

export = OldStoragePlanException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。旧ストレージディスクの提供は終了しました。サーバから該当するディスクを取り外した後、再度お試しください。
 * 
 * @class OldStoragePlanException
 * @constructor
 * @extends HttpConflictException
 */
class OldStoragePlanException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.OldStoragePlanException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。旧ストレージディスクの提供は終了しました。サーバから該当するディスクを取り外した後、再度お試しください。";
	
}


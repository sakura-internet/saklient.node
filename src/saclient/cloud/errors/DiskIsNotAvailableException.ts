/// <reference path="../../../node.d.ts" />

export = DiskIsNotAvailableException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。ディスクが利用可能な状態ではありません。コピー処理等の完了後に再度お試しください。
 * 
 * @class DiskIsNotAvailableException
 * @constructor
 * @extends HttpConflictException
 */
class DiskIsNotAvailableException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DiskIsNotAvailableException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ディスクが利用可能な状態ではありません。コピー処理等の完了後に再度お試しください。";
	
}


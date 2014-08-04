/// <reference path="../../../node.d.ts" />

export = DisconnectB4UpdateException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。サーバと接続された状態では変更できない値が含まれています。
 * 
 * @class DisconnectB4UpdateException
 * @constructor
 * @extends HttpConflictException
 */
class DisconnectB4UpdateException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DisconnectB4UpdateException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。サーバと接続された状態では変更できない値が含まれています。";
	
}


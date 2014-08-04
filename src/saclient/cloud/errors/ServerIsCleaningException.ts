/// <reference path="../../../node.d.ts" />

export = ServerIsCleaningException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。サーバが終了処理中です。しばらく時間をおいてから再度お試しください。
 * 
 * @class ServerIsCleaningException
 * @constructor
 * @extends HttpConflictException
 */
class ServerIsCleaningException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ServerIsCleaningException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。サーバが終了処理中です。しばらく時間をおいてから再度お試しください。";
	
}


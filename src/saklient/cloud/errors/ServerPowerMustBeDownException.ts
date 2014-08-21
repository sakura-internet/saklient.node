/// <reference path="../../../node.d.ts" />

export = ServerPowerMustBeDownException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。サーバが起動中にはこの操作を行えません。
 */
class ServerPowerMustBeDownException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ServerPowerMustBeDownException#defaultMessage
	 * @default "要求された操作を行えません。サーバが起動中にはこの操作を行えません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。サーバが起動中にはこの操作を行えません。";
	
}


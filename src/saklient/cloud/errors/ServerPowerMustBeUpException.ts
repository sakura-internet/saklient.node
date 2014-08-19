/// <reference path="../../../node.d.ts" />

export = ServerPowerMustBeUpException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。サーバが停止中にはこの操作を行えません。
 * 
 * @class ServerPowerMustBeUpException
 * @constructor
 * @extends HttpConflictException
 */
class ServerPowerMustBeUpException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ServerPowerMustBeUpException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。サーバが停止中にはこの操作を行えません。";
	
}


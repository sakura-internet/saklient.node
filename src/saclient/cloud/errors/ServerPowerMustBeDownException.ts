/// <reference path="../../../node.d.ts" />

export = ServerPowerMustBeDownException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。サーバが起動中にはこの操作を行えません。
 * 
 * @class ServerPowerMustBeDownException
 * @constructor
 * @extends HttpConflictException
 */
class ServerPowerMustBeDownException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ServerPowerMustBeDownException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。サーバが起動中にはこの操作を行えません。";
	
}


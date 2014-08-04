/// <reference path="../../../node.d.ts" />

export = ResAlreadyDisconnectedException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。このリソースは既に切断されています。
 * 
 * @class ResAlreadyDisconnectedException
 * @constructor
 * @extends HttpConflictException
 */
class ResAlreadyDisconnectedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ResAlreadyDisconnectedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このリソースは既に切断されています。";
	
}


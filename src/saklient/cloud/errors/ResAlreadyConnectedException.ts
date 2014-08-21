/// <reference path="../../../node.d.ts" />

export = ResAlreadyConnectedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このリソースは他のリソースと既に接続されています。
 */
class ResAlreadyConnectedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ResAlreadyConnectedException#defaultMessage
	 * @default "要求された操作を行えません。このリソースは他のリソースと既に接続されています。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このリソースは他のリソースと既に接続されています。";
	
}


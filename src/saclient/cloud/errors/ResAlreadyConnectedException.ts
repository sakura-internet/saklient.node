/// <reference path="../../../node.d.ts" />

export = ResAlreadyConnectedException;

import Util = require('../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。このリソースは他のリソースと既に接続されています。
 * 
 * @class ResAlreadyConnectedException
 * @constructor
 * @extends HttpConflictException
 */
class ResAlreadyConnectedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ResAlreadyConnectedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このリソースは他のリソースと既に接続されています。";
	
}


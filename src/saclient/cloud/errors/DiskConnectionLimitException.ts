/// <reference path="../../../node.d.ts" />

export = DiskConnectionLimitException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。この接続インタフェースにこれ以上のディスクを接続することができません。
 * 
 * @class DiskConnectionLimitException
 * @constructor
 * @extends HttpConflictException
 */
class DiskConnectionLimitException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DiskConnectionLimitException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。この接続インタフェースにこれ以上のディスクを接続することができません。";
	
}


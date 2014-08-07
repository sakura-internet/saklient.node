/// <reference path="../../../node.d.ts" />

export = DiskConnectionLimitException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

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


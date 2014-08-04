/// <reference path="../../../node.d.ts" />

export = ConnectToSameSwitchException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。複数のインタフェースから同一のスイッチに接続することはできません。
 * 
 * @class ConnectToSameSwitchException
 * @constructor
 * @extends HttpConflictException
 */
class ConnectToSameSwitchException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ConnectToSameSwitchException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。複数のインタフェースから同一のスイッチに接続することはできません。";
	
}


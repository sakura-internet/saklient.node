/// <reference path="../../../node.d.ts" />

export = ConnectToSameSwitchException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。複数のインタフェースから同一のスイッチに接続することはできません。
 */
class ConnectToSameSwitchException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ConnectToSameSwitchException#defaultMessage
	 * @default "要求された操作を行えません。複数のインタフェースから同一のスイッチに接続することはできません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。複数のインタフェースから同一のスイッチに接続することはできません。";
	
}


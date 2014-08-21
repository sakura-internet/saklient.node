/// <reference path="../../../node.d.ts" />

export = DisconnectB4UpdateException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。サーバと接続された状態では変更できない値が含まれています。
 */
class DisconnectB4UpdateException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DisconnectB4UpdateException#defaultMessage
	 * @default "要求された操作を行えません。サーバと接続された状態では変更できない値が含まれています。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。サーバと接続された状態では変更できない値が含まれています。";
	
}


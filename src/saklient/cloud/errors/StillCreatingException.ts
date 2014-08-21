/// <reference path="../../../node.d.ts" />

export = StillCreatingException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。リソースの作成処理が進行中です。完了後に再度お試しください。
 */
class StillCreatingException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.StillCreatingException#defaultMessage
	 * @default "要求された操作を行えません。リソースの作成処理が進行中です。完了後に再度お試しください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。リソースの作成処理が進行中です。完了後に再度お試しください。";
	
}


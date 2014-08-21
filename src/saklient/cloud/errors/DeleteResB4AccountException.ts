/// <reference path="../../../node.d.ts" />

export = DeleteResB4AccountException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。現在のアカウントで使用している全てのリソースを削除した後に実行してください。
 */
class DeleteResB4AccountException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DeleteResB4AccountException#defaultMessage
	 * @default "要求された操作を行えません。現在のアカウントで使用している全てのリソースを削除した後に実行してください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。現在のアカウントで使用している全てのリソースを削除した後に実行してください。";
	
}


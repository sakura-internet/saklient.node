/// <reference path="../../../node.d.ts" />

export = LimitMemoryInAccountException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求を受け付けできません。アカウントあたりの全サーバメモリサイズ上限により、リソースの割り当てに失敗しました。
 */
class LimitMemoryInAccountException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.LimitMemoryInAccountException#defaultMessage
	 * @default "要求を受け付けできません。アカウントあたりの全サーバメモリサイズ上限により、リソースの割り当てに失敗しました。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。アカウントあたりの全サーバメモリサイズ上限により、リソースの割り当てに失敗しました。";
	
}


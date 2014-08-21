/// <reference path="../../../node.d.ts" />

export = LimitSizeInAccountException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求を受け付けできません。アカウントあたりのリソースサイズ上限により、リソースの割り当てに失敗しました。
 */
class LimitSizeInAccountException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.LimitSizeInAccountException#defaultMessage
	 * @default "要求を受け付けできません。アカウントあたりのリソースサイズ上限により、リソースの割り当てに失敗しました。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。アカウントあたりのリソースサイズ上限により、リソースの割り当てに失敗しました。";
	
}


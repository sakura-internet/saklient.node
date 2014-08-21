/// <reference path="../../../node.d.ts" />

export = LimitCountInAccountException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求を受け付けできません。アカウントあたりのリソース数上限により、リソースの割り当てに失敗しました。
 */
class LimitCountInAccountException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.LimitCountInAccountException#defaultMessage
	 * @default "要求を受け付けできません。アカウントあたりのリソース数上限により、リソースの割り当てに失敗しました。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。アカウントあたりのリソース数上限により、リソースの割り当てに失敗しました。";
	
}


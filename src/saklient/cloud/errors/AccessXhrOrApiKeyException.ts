/// <reference path="../../../node.d.ts" />

export = AccessXhrOrApiKeyException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。XHRまたはAPIキーによるアクセスのみ許可されています。
 */
class AccessXhrOrApiKeyException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.AccessXhrOrApiKeyException#defaultMessage
	 * @default "要求された操作は許可されていません。XHRまたはAPIキーによるアクセスのみ許可されています。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。XHRまたはAPIキーによるアクセスのみ許可されています。";
	
}


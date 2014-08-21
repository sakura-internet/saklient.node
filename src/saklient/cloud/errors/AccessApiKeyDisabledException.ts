/// <reference path="../../../node.d.ts" />

export = AccessApiKeyDisabledException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。APIキーによるアクセスはできません。
 */
class AccessApiKeyDisabledException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.AccessApiKeyDisabledException#defaultMessage
	 * @default "要求された操作は許可されていません。APIキーによるアクセスはできません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。APIキーによるアクセスはできません。";
	
}


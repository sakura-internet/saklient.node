/// <reference path="../../../node.d.ts" />

export = AccessXhrOrApiKeyException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。XHRまたはAPIキーによるアクセスのみ許可されています。
 * 
 * @class AccessXhrOrApiKeyException
 * @constructor
 * @extends HttpForbiddenException
 */
class AccessXhrOrApiKeyException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.AccessXhrOrApiKeyException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。XHRまたはAPIキーによるアクセスのみ許可されています。";
	
}


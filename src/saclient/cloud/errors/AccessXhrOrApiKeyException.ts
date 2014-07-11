/// <reference path="../../../node.d.ts" />

export = AccessXhrOrApiKeyException;

import Util = require('../Util');
import HttpForbiddenException = require('./HttpForbiddenException');

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
	 * @member saclient.cloud.errors.AccessXhrOrApiKeyException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。XHRまたはAPIキーによるアクセスのみ許可されています。";
	
}


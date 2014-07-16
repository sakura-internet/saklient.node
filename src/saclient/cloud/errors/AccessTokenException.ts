/// <reference path="../../../node.d.ts" />

export = AccessTokenException;

import Util = require('../Util');
import HttpForbiddenException = require('./HttpForbiddenException');

/**
 * 要求された操作は許可されていません。この操作は有効期限内のトークンが必要です。
 * 
 * @class AccessTokenException
 * @constructor
 * @extends HttpForbiddenException
 */
class AccessTokenException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.AccessTokenException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。この操作は有効期限内のトークンが必要です。";
	
}

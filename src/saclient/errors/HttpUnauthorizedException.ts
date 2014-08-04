/// <reference path="../../node.d.ts" />

export = HttpUnauthorizedException;

import HttpException = require('./HttpException');

/**
 * この操作は認証が必要です。IDまたはパスワードが誤っている可能性があります。
 * 
 * @class HttpUnauthorizedException
 * @constructor
 * @extends HttpException
 */
class HttpUnauthorizedException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpUnauthorizedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "この操作は認証が必要です。IDまたはパスワードが誤っている可能性があります。";
	
}


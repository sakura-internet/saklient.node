/// <reference path="../../node.d.ts" />

export = HttpUnauthorizedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * この操作は認証が必要です。IDまたはパスワードが誤っている可能性があります。
 */
class HttpUnauthorizedException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpUnauthorizedException#defaultMessage
	 * @default "この操作は認証が必要です。IDまたはパスワードが誤っている可能性があります。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "この操作は認証が必要です。IDまたはパスワードが誤っている可能性があります。";
	
}


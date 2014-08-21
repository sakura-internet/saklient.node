/// <reference path="../../../node.d.ts" />

export = AccessStaffException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。権限エラー。
 */
class AccessStaffException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.AccessStaffException#defaultMessage
	 * @default "要求された操作は許可されていません。権限エラー。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。権限エラー。";
	
}


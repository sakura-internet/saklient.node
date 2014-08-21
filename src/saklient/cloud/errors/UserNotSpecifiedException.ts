/// <reference path="../../../node.d.ts" />

export = UserNotSpecifiedException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。このAPIはユーザを特定できる認証方法でアクセスする必要があります。
 */
class UserNotSpecifiedException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.UserNotSpecifiedException#defaultMessage
	 * @default "要求された操作は許可されていません。このAPIはユーザを特定できる認証方法でアクセスする必要があります。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。このAPIはユーザを特定できる認証方法でアクセスする必要があります。";
	
}


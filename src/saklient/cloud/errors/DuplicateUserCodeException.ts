/// <reference path="../../../node.d.ts" />

export = DuplicateUserCodeException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。同一ユーザ名で複数のユーザを作成することはできません。
 */
class DuplicateUserCodeException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DuplicateUserCodeException#defaultMessage
	 * @default "要求された操作を行えません。同一ユーザ名で複数のユーザを作成することはできません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。同一ユーザ名で複数のユーザを作成することはできません。";
	
}


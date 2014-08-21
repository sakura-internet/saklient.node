/// <reference path="../../../node.d.ts" />

export = AccountNotFoundException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。アカウントが存在しません。IDをご確認ください。
 */
class AccountNotFoundException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.AccountNotFoundException#defaultMessage
	 * @default "不適切な要求です。アカウントが存在しません。IDをご確認ください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。アカウントが存在しません。IDをご確認ください。";
	
}


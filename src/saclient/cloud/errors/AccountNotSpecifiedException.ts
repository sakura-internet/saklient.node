/// <reference path="../../../node.d.ts" />

export = AccountNotSpecifiedException;

import Util = require('../Util');
import HttpForbiddenException = require('./HttpForbiddenException');

/**
 * 要求された操作は許可されていません。このAPIはアカウントを特定できる認証方法でアクセスする必要があります。
 * 
 * @class AccountNotSpecifiedException
 * @constructor
 * @extends HttpForbiddenException
 */
class AccountNotSpecifiedException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.AccountNotSpecifiedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。このAPIはアカウントを特定できる認証方法でアクセスする必要があります。";
	
}

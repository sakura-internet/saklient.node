/// <reference path="../../../node.d.ts" />

export = UserNotSpecifiedException;

import Util = require('../../Util');
import HttpForbiddenException = require('./HttpForbiddenException');

/**
 * 要求された操作は許可されていません。このAPIはユーザを特定できる認証方法でアクセスする必要があります。
 * 
 * @class UserNotSpecifiedException
 * @constructor
 * @extends HttpForbiddenException
 */
class UserNotSpecifiedException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.UserNotSpecifiedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。このAPIはユーザを特定できる認証方法でアクセスする必要があります。";
	
}


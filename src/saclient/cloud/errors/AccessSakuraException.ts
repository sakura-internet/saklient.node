/// <reference path="../../../node.d.ts" />

export = AccessSakuraException;

import Util = require('../Util');
import HttpForbiddenException = require('./HttpForbiddenException');

/**
 * 要求された操作は許可されていません。さくらインターネットの会員メニューより認証後に実行してください。
 * 
 * @class AccessSakuraException
 * @constructor
 * @extends HttpForbiddenException
 */
class AccessSakuraException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.AccessSakuraException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。さくらインターネットの会員メニューより認証後に実行してください。";
	
}


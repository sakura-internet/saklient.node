/// <reference path="../../../node.d.ts" />

export = AccountNotFoundException;

import Util = require('../../Util');
import HttpBadRequestException = require('./HttpBadRequestException');

/**
 * 不適切な要求です。アカウントが存在しません。IDをご確認ください。
 * 
 * @class AccountNotFoundException
 * @constructor
 * @extends HttpBadRequestException
 */
class AccountNotFoundException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.AccountNotFoundException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。アカウントが存在しません。IDをご確認ください。";
	
}


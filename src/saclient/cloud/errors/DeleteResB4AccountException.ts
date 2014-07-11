/// <reference path="../../../node.d.ts" />

export = DeleteResB4AccountException;

import Util = require('../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。現在のアカウントで使用している全てのリソースを削除した後に実行してください。
 * 
 * @class DeleteResB4AccountException
 * @constructor
 * @extends HttpConflictException
 */
class DeleteResB4AccountException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DeleteResB4AccountException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。現在のアカウントで使用している全てのリソースを削除した後に実行してください。";
	
}


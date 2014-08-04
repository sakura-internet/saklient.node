/// <reference path="../../../node.d.ts" />

export = DisconnectB4DeleteException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。サーバとの接続を切り離した後に実行してください。
 * 
 * @class DisconnectB4DeleteException
 * @constructor
 * @extends HttpConflictException
 */
class DisconnectB4DeleteException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DisconnectB4DeleteException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。サーバとの接続を切り離した後に実行してください。";
	
}


/// <reference path="../../../node.d.ts" />

export = ServerOperationFailureException;

import Util = require('../Util');
import HttpServiceUnavailableException = require('./HttpServiceUnavailableException');

/**
 * サービスが利用できません。サーバの操作に失敗しました。
 * 
 * @class ServerOperationFailureException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class ServerOperationFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ServerOperationFailureException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバの操作に失敗しました。";
	
}


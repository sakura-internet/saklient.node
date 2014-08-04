/// <reference path="../../../node.d.ts" />

export = ServerCouldNotStopException;

import Util = require('../../Util');
import HttpServiceUnavailableException = require('./HttpServiceUnavailableException');

/**
 * サービスが利用できません。サーバを停止できません。再度お試しください。
 * 
 * @class ServerCouldNotStopException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class ServerCouldNotStopException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ServerCouldNotStopException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバを停止できません。再度お試しください。";
	
}


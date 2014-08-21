/// <reference path="../../../node.d.ts" />

export = ServerCouldNotStopException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバを停止できません。再度お試しください。
 */
class ServerCouldNotStopException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ServerCouldNotStopException#defaultMessage
	 * @default "サービスが利用できません。サーバを停止できません。再度お試しください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバを停止できません。再度お試しください。";
	
}


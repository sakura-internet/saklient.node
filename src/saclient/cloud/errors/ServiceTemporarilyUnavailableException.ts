/// <reference path="../../../node.d.ts" />

export = ServiceTemporarilyUnavailableException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
 * サービスが利用できません。この機能は一時的に利用できない状態にあります。メンテナンス情報、サポートサイトをご確認ください。
 * 
 * @class ServiceTemporarilyUnavailableException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class ServiceTemporarilyUnavailableException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ServiceTemporarilyUnavailableException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。この機能は一時的に利用できない状態にあります。メンテナンス情報、サポートサイトをご確認ください。";
	
}


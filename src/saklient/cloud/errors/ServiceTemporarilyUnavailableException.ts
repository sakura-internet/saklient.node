/// <reference path="../../../node.d.ts" />

export = ServiceTemporarilyUnavailableException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。この機能は一時的に利用できない状態にあります。メンテナンス情報、サポートサイトをご確認ください。
 */
class ServiceTemporarilyUnavailableException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ServiceTemporarilyUnavailableException#defaultMessage
	 * @default "サービスが利用できません。この機能は一時的に利用できない状態にあります。メンテナンス情報、サポートサイトをご確認ください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。この機能は一時的に利用できない状態にあります。メンテナンス情報、サポートサイトをご確認ください。";
	
}


/// <reference path="../../../node.d.ts" />

export = HostOperationFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバの操作に失敗しました。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。
 * 
 * @class HostOperationFailureException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class HostOperationFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HostOperationFailureException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバの操作に失敗しました。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。";
	
}


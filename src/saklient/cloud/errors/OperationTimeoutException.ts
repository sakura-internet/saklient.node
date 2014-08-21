/// <reference path="../../../node.d.ts" />

export = OperationTimeoutException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。操作がタイムアウトしました。サーバが混雑している可能性があります。
 */
class OperationTimeoutException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.OperationTimeoutException#defaultMessage
	 * @default "サービスが利用できません。操作がタイムアウトしました。サーバが混雑している可能性があります。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。操作がタイムアウトしました。サーバが混雑している可能性があります。";
	
}


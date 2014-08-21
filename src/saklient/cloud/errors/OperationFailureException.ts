/// <reference path="../../../node.d.ts" />

export = OperationFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。操作に失敗しました。サーバが混雑している可能性があります。
 */
class OperationFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.OperationFailureException#defaultMessage
	 * @default "サービスが利用できません。操作に失敗しました。サーバが混雑している可能性があります。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。操作に失敗しました。サーバが混雑している可能性があります。";
	
}


/// <reference path="../../../node.d.ts" />

export = NoDisplayResponseException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバの画面が応答していません。
 */
class NoDisplayResponseException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.NoDisplayResponseException#defaultMessage
	 * @default "サービスが利用できません。サーバの画面が応答していません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバの画面が応答していません。";
	
}


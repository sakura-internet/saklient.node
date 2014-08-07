/// <reference path="../../../node.d.ts" />

export = NoDisplayResponseException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバの画面が応答していません。
 * 
 * @class NoDisplayResponseException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class NoDisplayResponseException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.NoDisplayResponseException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバの画面が応答していません。";
	
}


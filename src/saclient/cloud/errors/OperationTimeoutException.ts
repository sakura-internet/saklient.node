'use strict';

/// <reference path="../../../node.d.ts" />

export = OperationTimeoutException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
 * サービスが利用できません。操作がタイムアウトしました。サーバが混雑している可能性があります。
 * 
 * @class OperationTimeoutException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class OperationTimeoutException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.OperationTimeoutException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。操作がタイムアウトしました。サーバが混雑している可能性があります。";
	
}


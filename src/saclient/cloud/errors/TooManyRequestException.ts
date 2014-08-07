'use strict';

/// <reference path="../../../node.d.ts" />

export = TooManyRequestException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
 * 要求を受け付けできません。リクエストの密度が高すぎます。
 * 
 * @class TooManyRequestException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class TooManyRequestException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.TooManyRequestException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。リクエストの密度が高すぎます。";
	
}


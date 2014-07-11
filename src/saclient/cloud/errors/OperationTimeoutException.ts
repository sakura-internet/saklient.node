/// <reference path="../../../node.d.ts" />

export = OperationTimeoutException;

import Util = require('../Util');
import HttpServiceUnavailableException = require('./HttpServiceUnavailableException');

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


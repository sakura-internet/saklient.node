/// <reference path="../../../node.d.ts" />

export = BootFailureByLockException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバが予期せず終了したため、ロックされています。しばらく時間をおいてから再度お試しください。
 * 
 * @class BootFailureByLockException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class BootFailureByLockException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.BootFailureByLockException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバが予期せず終了したため、ロックされています。しばらく時間をおいてから再度お試しください。";
	
}


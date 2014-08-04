/// <reference path="../../../node.d.ts" />

export = BusyException;

import Util = require('../../Util');
import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
 * サービスが利用できません。サーバが混雑しています。しばらく時間をおいてから再度お試しください。
 * 
 * @class BusyException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class BusyException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.BusyException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバが混雑しています。しばらく時間をおいてから再度お試しください。";
	
}


/// <reference path="../../../node.d.ts" />

export = OperationFailureException;

import Util = require('../../Util');
import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
 * サービスが利用できません。操作に失敗しました。サーバが混雑している可能性があります。
 * 
 * @class OperationFailureException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class OperationFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.OperationFailureException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。操作に失敗しました。サーバが混雑している可能性があります。";
	
}


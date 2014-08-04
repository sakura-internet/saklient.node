/// <reference path="../../../node.d.ts" />

export = StorageOperationFailureException;

import Util = require('../../Util');
import HttpServiceUnavailableException = require('./HttpServiceUnavailableException');

/**
 * サービスが利用できません。ストレージの操作に失敗しました。サーバが混雑している可能性があります。
 * 
 * @class StorageOperationFailureException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class StorageOperationFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.StorageOperationFailureException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。ストレージの操作に失敗しました。サーバが混雑している可能性があります。";
	
}


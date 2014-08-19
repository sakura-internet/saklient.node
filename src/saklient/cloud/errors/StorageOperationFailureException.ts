/// <reference path="../../../node.d.ts" />

export = StorageOperationFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

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
	 * @member saklient.cloud.errors.StorageOperationFailureException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。ストレージの操作に失敗しました。サーバが混雑している可能性があります。";
	
}


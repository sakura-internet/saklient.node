/// <reference path="../../../node.d.ts" />

export = StorageAbnormalException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。ストレージが問題が発生している可能性があります。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。
 * 
 * @class StorageAbnormalException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class StorageAbnormalException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.StorageAbnormalException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。ストレージが問題が発生している可能性があります。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。";
	
}


/// <reference path="../../../node.d.ts" />

export = StorageAbnormalException;

import Util = require('../Util');
import HttpServiceUnavailableException = require('./HttpServiceUnavailableException');

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
	 * @member saclient.cloud.errors.StorageAbnormalException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。ストレージが問題が発生している可能性があります。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。";
	
}


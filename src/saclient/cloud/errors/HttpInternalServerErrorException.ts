/// <reference path="../../../node.d.ts" />

export = HttpInternalServerErrorException;

import Util = require('../Util');
import HttpException = require('./HttpException');

/**
 * サーバ内部エラーが発生しました。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。
 * 
 * @class HttpInternalServerErrorException
 * @constructor
 * @extends HttpException
 */
class HttpInternalServerErrorException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HttpInternalServerErrorException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サーバ内部エラーが発生しました。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。";
	
}


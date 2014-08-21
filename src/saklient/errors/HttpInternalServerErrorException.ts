/// <reference path="../../node.d.ts" />

export = HttpInternalServerErrorException;

import HttpException = require('./HttpException');

'use strict';

/**
 * サーバ内部エラーが発生しました。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。
 */
class HttpInternalServerErrorException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpInternalServerErrorException#defaultMessage
	 * @default "サーバ内部エラーが発生しました。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サーバ内部エラーが発生しました。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。";
	
}


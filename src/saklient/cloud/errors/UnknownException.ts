/// <reference path="../../../node.d.ts" />

export = UnknownException;

import HttpInternalServerErrorException = require('../../errors/HttpInternalServerErrorException');

'use strict';

/**
 * 予期しないエラーが発生しました。このエラーが繰り返し発生する場合は、サポートサイトやメンテナンス情報をご確認ください。
 */
class UnknownException extends HttpInternalServerErrorException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.UnknownException#defaultMessage
	 * @default "予期しないエラーが発生しました。このエラーが繰り返し発生する場合は、サポートサイトやメンテナンス情報をご確認ください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "予期しないエラーが発生しました。このエラーが繰り返し発生する場合は、サポートサイトやメンテナンス情報をご確認ください。";
	
}


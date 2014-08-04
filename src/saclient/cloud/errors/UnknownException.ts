/// <reference path="../../../node.d.ts" />

export = UnknownException;

import Util = require('../../Util');
import HttpInternalServerErrorException = require('../../errors/HttpInternalServerErrorException');

/**
 * 予期しないエラーが発生しました。このエラーが繰り返し発生する場合は、サポートサイトやメンテナンス情報をご確認ください。
 * 
 * @class UnknownException
 * @constructor
 * @extends HttpInternalServerErrorException
 */
class UnknownException extends HttpInternalServerErrorException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.UnknownException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "予期しないエラーが発生しました。このエラーが繰り返し発生する場合は、サポートサイトやメンテナンス情報をご確認ください。";
	
}


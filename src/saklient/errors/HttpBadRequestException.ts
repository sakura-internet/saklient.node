/// <reference path="../../node.d.ts" />

export = HttpBadRequestException;

import HttpException = require('./HttpException');

'use strict';

/**
 * 不適切な要求です。パラメータの指定誤り、入力規則違反です。入力内容をご確認ください。
 * 
 * @class HttpBadRequestException
 * @constructor
 * @extends HttpException
 */
class HttpBadRequestException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpBadRequestException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。パラメータの指定誤り、入力規則違反です。入力内容をご確認ください。";
	
}


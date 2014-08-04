/// <reference path="../../../node.d.ts" />

export = HttpNotAcceptableException;

import Util = require('../../Util');
import HttpException = require('./HttpException');

/**
 * 要求を受け付けできません。サポートサイトやメンテナンス情報をご確認ください。
 * 
 * @class HttpNotAcceptableException
 * @constructor
 * @extends HttpException
 */
class HttpNotAcceptableException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HttpNotAcceptableException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。サポートサイトやメンテナンス情報をご確認ください。";
	
}


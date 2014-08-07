'use strict';

/// <reference path="../../node.d.ts" />

export = HttpNotAcceptableException;

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
	 * @member saclient.errors.HttpNotAcceptableException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。サポートサイトやメンテナンス情報をご確認ください。";
	
}


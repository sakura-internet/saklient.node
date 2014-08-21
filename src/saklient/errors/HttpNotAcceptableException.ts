/// <reference path="../../node.d.ts" />

export = HttpNotAcceptableException;

import HttpException = require('./HttpException');

'use strict';

/**
 * 要求を受け付けできません。サポートサイトやメンテナンス情報をご確認ください。
 */
class HttpNotAcceptableException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpNotAcceptableException#defaultMessage
	 * @default "要求を受け付けできません。サポートサイトやメンテナンス情報をご確認ください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。サポートサイトやメンテナンス情報をご確認ください。";
	
}


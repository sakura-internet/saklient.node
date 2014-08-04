/// <reference path="../../../node.d.ts" />

export = InvalidUriArgumentException;

import HttpNotFoundException = require('../../errors/HttpNotFoundException');

/**
 * 対象が見つかりません。パスに使用できない文字が含まれています。
 * 
 * @class InvalidUriArgumentException
 * @constructor
 * @extends HttpNotFoundException
 */
class InvalidUriArgumentException extends HttpNotFoundException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.InvalidUriArgumentException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "対象が見つかりません。パスに使用できない文字が含まれています。";
	
}


/// <reference path="../../../node.d.ts" />

export = UnsupportedResClassException;

import Util = require('../../Util');
import HttpBadRequestException = require('./HttpBadRequestException');

/**
 * 不適切な要求です。この種類のリソースは要求された操作に対応しません。
 * 
 * @class UnsupportedResClassException
 * @constructor
 * @extends HttpBadRequestException
 */
class UnsupportedResClassException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.UnsupportedResClassException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。この種類のリソースは要求された操作に対応しません。";
	
}


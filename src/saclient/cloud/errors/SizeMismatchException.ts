/// <reference path="../../../node.d.ts" />

export = SizeMismatchException;

import Util = require('../Util');
import HttpBadRequestException = require('./HttpBadRequestException');

/**
 * 不適切な要求です。参照するリソースのサイズが合致しません。
 * 
 * @class SizeMismatchException
 * @constructor
 * @extends HttpBadRequestException
 */
class SizeMismatchException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.SizeMismatchException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。参照するリソースのサイズが合致しません。";
	
}

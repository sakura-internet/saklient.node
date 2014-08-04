/// <reference path="../../../node.d.ts" />

export = CantResizeSmallerException;

import Util = require('../../Util');
import HttpBadRequestException = require('./HttpBadRequestException');

/**
 * 不適切な要求です。現在の容量よりも小さくリサイズすることはできません。
 * 
 * @class CantResizeSmallerException
 * @constructor
 * @extends HttpBadRequestException
 */
class CantResizeSmallerException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.CantResizeSmallerException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。現在の容量よりも小さくリサイズすることはできません。";
	
}


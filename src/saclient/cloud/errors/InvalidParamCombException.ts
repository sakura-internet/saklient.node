/// <reference path="../../../node.d.ts" />

export = InvalidParamCombException;

import Util = require('../Util');
import HttpBadRequestException = require('./HttpBadRequestException');

/**
 * 不適切な要求です。同時に指定できないパラメータが含まれています。
 * 
 * @class InvalidParamCombException
 * @constructor
 * @extends HttpBadRequestException
 */
class InvalidParamCombException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.InvalidParamCombException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。同時に指定できないパラメータが含まれています。";
	
}

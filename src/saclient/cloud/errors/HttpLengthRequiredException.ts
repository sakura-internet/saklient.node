/// <reference path="../../../node.d.ts" />

export = HttpLengthRequiredException;

import Util = require('../Util');
import HttpException = require('./HttpException');

/**
 * HTTPエラー。Length Required.
 * 
 * @class HttpLengthRequiredException
 * @constructor
 * @extends HttpException
 */
class HttpLengthRequiredException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HttpLengthRequiredException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Length Required.";
	
}

/// <reference path="../../../node.d.ts" />

export = HttpNotExtendedException;

import Util = require('../../Util');
import HttpException = require('./HttpException');

/**
 * HTTPエラー。Not Extended.
 * 
 * @class HttpNotExtendedException
 * @constructor
 * @extends HttpException
 */
class HttpNotExtendedException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HttpNotExtendedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Not Extended.";
	
}


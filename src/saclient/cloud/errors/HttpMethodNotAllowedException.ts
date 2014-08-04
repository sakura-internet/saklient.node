/// <reference path="../../../node.d.ts" />

export = HttpMethodNotAllowedException;

import Util = require('../../Util');
import HttpException = require('./HttpException');

/**
 * 要求されたHTTPメソッドは対応していません。
 * 
 * @class HttpMethodNotAllowedException
 * @constructor
 * @extends HttpException
 */
class HttpMethodNotAllowedException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HttpMethodNotAllowedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求されたHTTPメソッドは対応していません。";
	
}


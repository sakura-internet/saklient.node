/// <reference path="../../node.d.ts" />

export = HttpMethodNotAllowedException;

import HttpException = require('./HttpException');

'use strict';

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
	 * @member saklient.errors.HttpMethodNotAllowedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求されたHTTPメソッドは対応していません。";
	
}


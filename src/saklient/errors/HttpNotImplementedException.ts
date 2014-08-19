/// <reference path="../../node.d.ts" />

export = HttpNotImplementedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Not Implemented.
 * 
 * @class HttpNotImplementedException
 * @constructor
 * @extends HttpException
 */
class HttpNotImplementedException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpNotImplementedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Not Implemented.";
	
}


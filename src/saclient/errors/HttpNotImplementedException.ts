'use strict';

/// <reference path="../../node.d.ts" />

export = HttpNotImplementedException;

import HttpException = require('./HttpException');

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
	 * @member saclient.errors.HttpNotImplementedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Not Implemented.";
	
}


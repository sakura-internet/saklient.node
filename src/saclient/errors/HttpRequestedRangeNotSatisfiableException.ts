'use strict';

/// <reference path="../../node.d.ts" />

export = HttpRequestedRangeNotSatisfiableException;

import HttpException = require('./HttpException');

/**
 * HTTPエラー。Requested Range Not Satisfiable.
 * 
 * @class HttpRequestedRangeNotSatisfiableException
 * @constructor
 * @extends HttpException
 */
class HttpRequestedRangeNotSatisfiableException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpRequestedRangeNotSatisfiableException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Requested Range Not Satisfiable.";
	
}


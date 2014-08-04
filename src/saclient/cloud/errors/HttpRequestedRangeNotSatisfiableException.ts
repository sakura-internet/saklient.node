/// <reference path="../../../node.d.ts" />

export = HttpRequestedRangeNotSatisfiableException;

import Util = require('../../Util');
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
	 * @member saclient.cloud.errors.HttpRequestedRangeNotSatisfiableException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Requested Range Not Satisfiable.";
	
}


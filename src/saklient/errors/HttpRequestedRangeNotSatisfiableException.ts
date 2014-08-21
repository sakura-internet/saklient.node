/// <reference path="../../node.d.ts" />

export = HttpRequestedRangeNotSatisfiableException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Requested Range Not Satisfiable.
 */
class HttpRequestedRangeNotSatisfiableException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpRequestedRangeNotSatisfiableException#defaultMessage
	 * @default "HTTPエラー。Requested Range Not Satisfiable."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Requested Range Not Satisfiable.";
	
}


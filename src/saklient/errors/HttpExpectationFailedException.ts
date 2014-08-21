/// <reference path="../../node.d.ts" />

export = HttpExpectationFailedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Expectation Failed.
 */
class HttpExpectationFailedException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpExpectationFailedException#defaultMessage
	 * @default "HTTPエラー。Expectation Failed."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Expectation Failed.";
	
}


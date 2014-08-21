/// <reference path="../../node.d.ts" />

export = HttpNotExtendedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Not Extended.
 */
class HttpNotExtendedException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpNotExtendedException#defaultMessage
	 * @default "HTTPエラー。Not Extended."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Not Extended.";
	
}


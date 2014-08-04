/// <reference path="../../node.d.ts" />

export = HttpLockedException;

import HttpException = require('./HttpException');

/**
 * HTTPエラー。Locked.
 * 
 * @class HttpLockedException
 * @constructor
 * @extends HttpException
 */
class HttpLockedException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpLockedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Locked.";
	
}


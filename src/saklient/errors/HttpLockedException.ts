/// <reference path="../../node.d.ts" />

export = HttpLockedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Locked.
 */
class HttpLockedException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpLockedException#defaultMessage
	 * @default "HTTPエラー。Locked."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Locked.";
	
}


/// <reference path="../../node.d.ts" />

export = HttpInsufficientStorageException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Insufficient Storage.
 */
class HttpInsufficientStorageException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpInsufficientStorageException#defaultMessage
	 * @default "HTTPエラー。Insufficient Storage."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Insufficient Storage.";
	
}


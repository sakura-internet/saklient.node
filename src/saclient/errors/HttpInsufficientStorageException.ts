/// <reference path="../../node.d.ts" />

export = HttpInsufficientStorageException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Insufficient Storage.
 * 
 * @class HttpInsufficientStorageException
 * @constructor
 * @extends HttpException
 */
class HttpInsufficientStorageException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpInsufficientStorageException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Insufficient Storage.";
	
}


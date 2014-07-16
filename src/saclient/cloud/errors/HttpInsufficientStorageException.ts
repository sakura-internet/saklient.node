/// <reference path="../../../node.d.ts" />

export = HttpInsufficientStorageException;

import Util = require('../Util');
import HttpException = require('./HttpException');

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
	 * @member saclient.cloud.errors.HttpInsufficientStorageException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Insufficient Storage.";
	
}

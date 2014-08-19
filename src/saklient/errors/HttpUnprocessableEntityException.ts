/// <reference path="../../node.d.ts" />

export = HttpUnprocessableEntityException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Unprocessable Entity.
 * 
 * @class HttpUnprocessableEntityException
 * @constructor
 * @extends HttpException
 */
class HttpUnprocessableEntityException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpUnprocessableEntityException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Unprocessable Entity.";
	
}


'use strict';

/// <reference path="../../node.d.ts" />

export = HttpUnprocessableEntityException;

import HttpException = require('./HttpException');

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
	 * @member saclient.errors.HttpUnprocessableEntityException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Unprocessable Entity.";
	
}


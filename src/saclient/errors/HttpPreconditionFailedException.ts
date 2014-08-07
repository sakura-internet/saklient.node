'use strict';

/// <reference path="../../node.d.ts" />

export = HttpPreconditionFailedException;

import HttpException = require('./HttpException');

/**
 * HTTPエラー。Precondition Failed.
 * 
 * @class HttpPreconditionFailedException
 * @constructor
 * @extends HttpException
 */
class HttpPreconditionFailedException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpPreconditionFailedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Precondition Failed.";
	
}


/// <reference path="../../../node.d.ts" />

export = HttpPreconditionFailedException;

import Util = require('../../Util');
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
	 * @member saclient.cloud.errors.HttpPreconditionFailedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Precondition Failed.";
	
}


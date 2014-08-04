/// <reference path="../../../node.d.ts" />

export = HttpHttpVersionNotSupportedException;

import Util = require('../../Util');
import HttpException = require('./HttpException');

/**
 * HTTPエラー。Http Version Not Supported.
 * 
 * @class HttpHttpVersionNotSupportedException
 * @constructor
 * @extends HttpException
 */
class HttpHttpVersionNotSupportedException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HttpHttpVersionNotSupportedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Http Version Not Supported.";
	
}


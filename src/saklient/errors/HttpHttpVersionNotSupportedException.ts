/// <reference path="../../node.d.ts" />

export = HttpHttpVersionNotSupportedException;

import HttpException = require('./HttpException');

'use strict';

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
	 * @member saklient.errors.HttpHttpVersionNotSupportedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Http Version Not Supported.";
	
}


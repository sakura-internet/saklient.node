/// <reference path="../../node.d.ts" />

export = HttpProxyAuthenticationRequiredException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Proxy Authentication Required.
 * 
 * @class HttpProxyAuthenticationRequiredException
 * @constructor
 * @extends HttpException
 */
class HttpProxyAuthenticationRequiredException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpProxyAuthenticationRequiredException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Proxy Authentication Required.";
	
}


/// <reference path="../../node.d.ts" />

export = HttpProxyAuthenticationRequiredException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Proxy Authentication Required.
 */
class HttpProxyAuthenticationRequiredException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpProxyAuthenticationRequiredException#defaultMessage
	 * @default "HTTPエラー。Proxy Authentication Required."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Proxy Authentication Required.";
	
}


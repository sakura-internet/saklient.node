/// <reference path="../../../node.d.ts" />

export = HttpProxyAuthenticationRequiredException;

import Util = require('../Util');
import HttpException = require('./HttpException');

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
	 * @member saclient.cloud.errors.HttpProxyAuthenticationRequiredException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Proxy Authentication Required.";
	
}


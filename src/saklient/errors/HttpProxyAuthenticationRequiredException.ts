/// <reference path="../../node.d.ts" />

export = HttpProxyAuthenticationRequiredException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Proxy Authentication Required.
 */
class HttpProxyAuthenticationRequiredException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Proxy Authentication Required." : message);
	}
	
}


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
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message);
	}
	
}


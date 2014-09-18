/// <reference path="../../node.d.ts" />

export = HttpRequestTimeoutException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Request Timeout.
 */
class HttpRequestTimeoutException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpRequestTimeoutException#defaultMessage
	 * @default "HTTPエラー。Request Timeout."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Request Timeout.";
	
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


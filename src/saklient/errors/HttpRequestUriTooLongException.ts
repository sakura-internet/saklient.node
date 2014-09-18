/// <reference path="../../node.d.ts" />

export = HttpRequestUriTooLongException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Request Uri Too Long.
 */
class HttpRequestUriTooLongException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpRequestUriTooLongException#defaultMessage
	 * @default "HTTPエラー。Request Uri Too Long."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Request Uri Too Long.";
	
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


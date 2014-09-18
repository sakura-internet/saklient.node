/// <reference path="../../node.d.ts" />

export = HttpRequestEntityTooLargeException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Request Entity Too Large.
 */
class HttpRequestEntityTooLargeException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpRequestEntityTooLargeException#defaultMessage
	 * @default "HTTPエラー。Request Entity Too Large."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Request Entity Too Large.";
	
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


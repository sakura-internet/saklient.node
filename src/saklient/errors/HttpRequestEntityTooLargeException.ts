/// <reference path="../../node.d.ts" />

export = HttpRequestEntityTooLargeException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Request Entity Too Large.
 */
class HttpRequestEntityTooLargeException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Request Entity Too Large." : message);
	}
	
}


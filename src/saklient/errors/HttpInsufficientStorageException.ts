/// <reference path="../../node.d.ts" />

export = HttpInsufficientStorageException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Insufficient Storage.
 */
class HttpInsufficientStorageException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Insufficient Storage." : message);
	}
	
}


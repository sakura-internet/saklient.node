/// <reference path="../../node.d.ts" />

export = HttpUnprocessableEntityException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Unprocessable Entity.
 */
class HttpUnprocessableEntityException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Unprocessable Entity." : message);
	}
	
}


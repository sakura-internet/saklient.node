/// <reference path="../../node.d.ts" />

export = HttpPreconditionFailedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Precondition Failed.
 */
class HttpPreconditionFailedException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Precondition Failed." : message);
	}
	
}


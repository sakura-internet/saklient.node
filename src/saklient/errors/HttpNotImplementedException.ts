/// <reference path="../../node.d.ts" />

export = HttpNotImplementedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Not Implemented.
 */
class HttpNotImplementedException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Not Implemented." : message);
	}
	
}


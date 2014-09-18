/// <reference path="../../node.d.ts" />

export = HttpRequestedRangeNotSatisfiableException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Requested Range Not Satisfiable.
 */
class HttpRequestedRangeNotSatisfiableException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Requested Range Not Satisfiable." : message);
	}
	
}


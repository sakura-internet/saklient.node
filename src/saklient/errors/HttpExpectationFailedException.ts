/// <reference path="../../node.d.ts" />

export = HttpExpectationFailedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Expectation Failed.
 */
class HttpExpectationFailedException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Expectation Failed." : message);
	}
	
}


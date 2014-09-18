/// <reference path="../../node.d.ts" />

export = HttpLengthRequiredException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Length Required.
 */
class HttpLengthRequiredException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Length Required." : message);
	}
	
}


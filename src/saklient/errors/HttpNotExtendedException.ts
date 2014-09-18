/// <reference path="../../node.d.ts" />

export = HttpNotExtendedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Not Extended.
 */
class HttpNotExtendedException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Not Extended." : message);
	}
	
}


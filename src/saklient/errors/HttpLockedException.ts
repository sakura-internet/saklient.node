/// <reference path="../../node.d.ts" />

export = HttpLockedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Locked.
 */
class HttpLockedException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Locked." : message);
	}
	
}


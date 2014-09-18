/// <reference path="../../node.d.ts" />

export = HttpFailedDependencyException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Failed Dependency.
 */
class HttpFailedDependencyException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Failed Dependency." : message);
	}
	
}


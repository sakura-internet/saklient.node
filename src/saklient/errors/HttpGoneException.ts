/// <reference path="../../node.d.ts" />

export = HttpGoneException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Gone.
 */
class HttpGoneException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Gone." : message);
	}
	
}


/// <reference path="../../node.d.ts" />

export = HttpUnsupportedMediaTypeException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Unsupported Media Type.
 */
class HttpUnsupportedMediaTypeException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Unsupported Media Type." : message);
	}
	
}


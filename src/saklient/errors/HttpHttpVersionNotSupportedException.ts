/// <reference path="../../node.d.ts" />

export = HttpHttpVersionNotSupportedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Http Version Not Supported.
 */
class HttpHttpVersionNotSupportedException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Http Version Not Supported." : message);
	}
	
}


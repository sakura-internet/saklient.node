/// <reference path="../../node.d.ts" />

export = HttpPreconditionFailedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Precondition Failed.
 */
class HttpPreconditionFailedException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpPreconditionFailedException#defaultMessage
	 * @default "HTTPエラー。Precondition Failed."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Precondition Failed.";
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message);
	}
	
}


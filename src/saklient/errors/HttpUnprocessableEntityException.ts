/// <reference path="../../node.d.ts" />

export = HttpUnprocessableEntityException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Unprocessable Entity.
 */
class HttpUnprocessableEntityException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpUnprocessableEntityException#defaultMessage
	 * @default "HTTPエラー。Unprocessable Entity."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Unprocessable Entity.";
	
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


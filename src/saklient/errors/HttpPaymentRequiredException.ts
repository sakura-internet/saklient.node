/// <reference path="../../node.d.ts" />

export = HttpPaymentRequiredException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Payment Required.
 */
class HttpPaymentRequiredException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpPaymentRequiredException#defaultMessage
	 * @default "HTTPエラー。Payment Required."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Payment Required.";
	
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


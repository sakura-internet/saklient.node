/// <reference path="../../node.d.ts" />

export = HttpExpectationFailedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Expectation Failed.
 */
class HttpExpectationFailedException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpExpectationFailedException#defaultMessage
	 * @default "HTTPエラー。Expectation Failed."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Expectation Failed.";
	
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


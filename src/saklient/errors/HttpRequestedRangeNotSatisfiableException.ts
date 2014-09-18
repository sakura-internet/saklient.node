/// <reference path="../../node.d.ts" />

export = HttpRequestedRangeNotSatisfiableException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Requested Range Not Satisfiable.
 */
class HttpRequestedRangeNotSatisfiableException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpRequestedRangeNotSatisfiableException#defaultMessage
	 * @default "HTTPエラー。Requested Range Not Satisfiable."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Requested Range Not Satisfiable.";
	
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


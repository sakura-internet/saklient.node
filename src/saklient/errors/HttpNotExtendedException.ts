/// <reference path="../../node.d.ts" />

export = HttpNotExtendedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Not Extended.
 */
class HttpNotExtendedException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpNotExtendedException#defaultMessage
	 * @default "HTTPエラー。Not Extended."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Not Extended.";
	
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


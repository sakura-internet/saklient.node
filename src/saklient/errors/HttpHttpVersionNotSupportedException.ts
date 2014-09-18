/// <reference path="../../node.d.ts" />

export = HttpHttpVersionNotSupportedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Http Version Not Supported.
 */
class HttpHttpVersionNotSupportedException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpHttpVersionNotSupportedException#defaultMessage
	 * @default "HTTPエラー。Http Version Not Supported."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Http Version Not Supported.";
	
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


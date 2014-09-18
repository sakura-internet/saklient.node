/// <reference path="../../node.d.ts" />

export = HttpLockedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Locked.
 */
class HttpLockedException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpLockedException#defaultMessage
	 * @default "HTTPエラー。Locked."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Locked.";
	
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


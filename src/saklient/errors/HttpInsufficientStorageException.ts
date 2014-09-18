/// <reference path="../../node.d.ts" />

export = HttpInsufficientStorageException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Insufficient Storage.
 */
class HttpInsufficientStorageException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpInsufficientStorageException#defaultMessage
	 * @default "HTTPエラー。Insufficient Storage."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Insufficient Storage.";
	
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


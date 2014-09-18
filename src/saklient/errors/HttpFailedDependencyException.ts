/// <reference path="../../node.d.ts" />

export = HttpFailedDependencyException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Failed Dependency.
 */
class HttpFailedDependencyException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpFailedDependencyException#defaultMessage
	 * @default "HTTPエラー。Failed Dependency."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Failed Dependency.";
	
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


/// <reference path="../../node.d.ts" />

export = HttpUpgradeRequiredException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Upgrade Required.
 */
class HttpUpgradeRequiredException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpUpgradeRequiredException#defaultMessage
	 * @default "HTTPエラー。Upgrade Required."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Upgrade Required.";
	
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


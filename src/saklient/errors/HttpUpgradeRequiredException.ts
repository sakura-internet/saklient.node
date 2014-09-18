/// <reference path="../../node.d.ts" />

export = HttpUpgradeRequiredException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Upgrade Required.
 */
class HttpUpgradeRequiredException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Upgrade Required." : message);
	}
	
}


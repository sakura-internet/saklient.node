/// <reference path="../../node.d.ts" />

export = HttpVariantAlsoNegotiatesException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Variant Also Negotiates.
 */
class HttpVariantAlsoNegotiatesException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "HTTPエラー。Variant Also Negotiates." : message);
	}
	
}


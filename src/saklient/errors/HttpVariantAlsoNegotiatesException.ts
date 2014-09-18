/// <reference path="../../node.d.ts" />

export = HttpVariantAlsoNegotiatesException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Variant Also Negotiates.
 */
class HttpVariantAlsoNegotiatesException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpVariantAlsoNegotiatesException#defaultMessage
	 * @default "HTTPエラー。Variant Also Negotiates."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Variant Also Negotiates.";
	
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


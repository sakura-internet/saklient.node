/// <reference path="../../node.d.ts" />

export = HttpMethodNotAllowedException;

import HttpException = require('./HttpException');

'use strict';

/**
 * 要求されたHTTPメソッドは対応していません。
 */
class HttpMethodNotAllowedException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpMethodNotAllowedException#defaultMessage
	 * @default "要求されたHTTPメソッドは対応していません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求されたHTTPメソッドは対応していません。";
	
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


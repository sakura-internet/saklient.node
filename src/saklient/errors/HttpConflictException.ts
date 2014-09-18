/// <reference path="../../node.d.ts" />

export = HttpConflictException;

import HttpException = require('./HttpException');

'use strict';

/**
 * 要求された操作を行えません。現在の対象の状態では、この操作を受け付けできません。
 */
class HttpConflictException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。現在の対象の状態では、この操作を受け付けできません。" : message);
	}
	
}


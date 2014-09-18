/// <reference path="../../../node.d.ts" />

export = DeleteStaticRouteFirstException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。
 */
class DeleteStaticRouteFirstException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。" : message);
	}
	
}


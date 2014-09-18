/// <reference path="../../../node.d.ts" />

export = DuplicateUserCodeException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。同一ユーザ名で複数のユーザを作成することはできません。
 */
class DuplicateUserCodeException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。同一ユーザ名で複数のユーザを作成することはできません。" : message);
	}
	
}


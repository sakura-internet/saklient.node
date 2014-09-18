/// <reference path="../../../node.d.ts" />

export = ReplicaAlreadyExistsException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このストレージには指定リソースの複製が既に存在します。
 */
class ReplicaAlreadyExistsException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。このストレージには指定リソースの複製が既に存在します。" : message);
	}
	
}


/// <reference path="../../../node.d.ts" />

export = DuplicateEntryException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。リソースが既に存在するか、リソース同士が既に関連付けられています。
 */
class DuplicateEntryException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。リソースが既に存在するか、リソース同士が既に関連付けられています。" : message);
	}
	
}


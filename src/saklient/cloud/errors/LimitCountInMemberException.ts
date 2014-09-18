/// <reference path="../../../node.d.ts" />

export = LimitCountInMemberException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求を受け付けできません。アカウント数上限により作成失敗しました。
 */
class LimitCountInMemberException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求を受け付けできません。アカウント数上限により作成失敗しました。" : message);
	}
	
}


/// <reference path="../../../node.d.ts" />

export = LimitMemoryInAccountException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求を受け付けできません。アカウントあたりの全サーバメモリサイズ上限により、リソースの割り当てに失敗しました。
 */
class LimitMemoryInAccountException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求を受け付けできません。アカウントあたりの全サーバメモリサイズ上限により、リソースの割り当てに失敗しました。" : message);
	}
	
}


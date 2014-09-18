/// <reference path="../../../node.d.ts" />

export = DiskStockRunOutException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。作成済みディスクを確保できませんでした。サーバが混雑している可能性があります。
 */
class DiskStockRunOutException extends HttpServiceUnavailableException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "サービスが利用できません。作成済みディスクを確保できませんでした。サーバが混雑している可能性があります。" : message);
	}
	
}


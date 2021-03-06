/// <reference path="../../../node.d.ts" />

export = NotWithHybridconnException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ハイブリッド接続と併用する場合はお問い合わせください。
 */
class NotWithHybridconnException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。ハイブリッド接続と併用する場合はお問い合わせください。" : message);
	}
	
}


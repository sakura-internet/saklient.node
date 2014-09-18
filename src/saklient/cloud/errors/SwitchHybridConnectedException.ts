/// <reference path="../../../node.d.ts" />

export = SwitchHybridConnectedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ハイブリッド接続されているスイッチに対して、この操作はできません。
 */
class SwitchHybridConnectedException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。ハイブリッド接続されているスイッチに対して、この操作はできません。" : message);
	}
	
}


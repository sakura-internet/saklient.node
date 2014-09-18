/// <reference path="../../../node.d.ts" />

export = ResAlreadyDisconnectedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このリソースは既に切断されています。
 */
class ResAlreadyDisconnectedException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。このリソースは既に切断されています。" : message);
	}
	
}


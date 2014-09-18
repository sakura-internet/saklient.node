/// <reference path="../../../node.d.ts" />

export = CdromDeviceLockedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。CD-ROMドライブがロックされています。
 */
class CdromDeviceLockedException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。CD-ROMドライブがロックされています。" : message);
	}
	
}


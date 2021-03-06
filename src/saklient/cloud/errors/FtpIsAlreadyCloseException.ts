/// <reference path="../../../node.d.ts" />

export = FtpIsAlreadyCloseException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。FTP共有は既に終了されています。
 */
class FtpIsAlreadyCloseException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。FTP共有は既に終了されています。" : message);
	}
	
}


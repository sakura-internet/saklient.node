/// <reference path="../../../node.d.ts" />

export = FileNotUploadedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ファイルをアップロード後に実行してください。
 */
class FileNotUploadedException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。ファイルをアップロード後に実行してください。" : message);
	}
	
}


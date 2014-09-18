/// <reference path="../../../node.d.ts" />

export = DiskLicenseMismatchException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ライセンスの問題により、組み合わせて使用できないディスクが接続されています。
 */
class DiskLicenseMismatchException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DiskLicenseMismatchException#defaultMessage
	 * @default "要求された操作を行えません。ライセンスの問題により、組み合わせて使用できないディスクが接続されています。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ライセンスの問題により、組み合わせて使用できないディスクが接続されています。";
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message);
	}
	
}


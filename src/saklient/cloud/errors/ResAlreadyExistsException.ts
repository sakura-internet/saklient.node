/// <reference path="../../../node.d.ts" />

export = ResAlreadyExistsException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このIDのリソースは既に存在します。
 */
class ResAlreadyExistsException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ResAlreadyExistsException#defaultMessage
	 * @default "要求された操作を行えません。このIDのリソースは既に存在します。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このIDのリソースは既に存在します。";
	
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


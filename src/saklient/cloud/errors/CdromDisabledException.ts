/// <reference path="../../../node.d.ts" />

export = CdromDisabledException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ISOイメージが無効化されています。排出後に再度お試しください。
 */
class CdromDisabledException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.CdromDisabledException#defaultMessage
	 * @default "要求された操作を行えません。ISOイメージが無効化されています。排出後に再度お試しください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ISOイメージが無効化されています。排出後に再度お試しください。";
	
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


/// <reference path="../../../node.d.ts" />

export = DontCreateInSandboxException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。ゾーンをまたぐ一部のリソースは課金対象です。料金をご確認の上、他のゾーンで作成してください。
 */
class DontCreateInSandboxException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DontCreateInSandboxException#defaultMessage
	 * @default "要求された操作は許可されていません。ゾーンをまたぐ一部のリソースは課金対象です。料金をご確認の上、他のゾーンで作成してください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。ゾーンをまたぐ一部のリソースは課金対象です。料金をご確認の上、他のゾーンで作成してください。";
	
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


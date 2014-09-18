/// <reference path="../../../node.d.ts" />

export = DisabledInSandboxException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。このゾーンではこの操作は禁止されています。他のゾーンでお試しください。
 */
class DisabledInSandboxException extends HttpForbiddenException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作は許可されていません。このゾーンではこの操作は禁止されています。他のゾーンでお試しください。" : message);
	}
	
}


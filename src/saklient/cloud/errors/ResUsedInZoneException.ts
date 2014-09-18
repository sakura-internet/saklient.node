/// <reference path="../../../node.d.ts" />

export = ResUsedInZoneException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。同一ゾーン内の他のリソースが既にこのリソースを使用中です。
 */
class ResUsedInZoneException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。同一ゾーン内の他のリソースが既にこのリソースを使用中です。" : message);
	}
	
}


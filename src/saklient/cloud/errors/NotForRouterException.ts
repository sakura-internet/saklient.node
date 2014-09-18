/// <reference path="../../../node.d.ts" />

export = NotForRouterException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ルータには適用できません。
 */
class NotForRouterException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.NotForRouterException#defaultMessage
	 * @default "要求された操作を行えません。ルータには適用できません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ルータには適用できません。";
	
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

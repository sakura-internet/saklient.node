/// <reference path="../../../node.d.ts" />

export = DeleteStaticRouteFirstException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。
 */
class DeleteStaticRouteFirstException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DeleteStaticRouteFirstException#defaultMessage
	 * @default "要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。";
	
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


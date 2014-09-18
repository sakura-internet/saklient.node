/// <reference path="../../../node.d.ts" />

export = PacketFilterApplyingException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。起動中のサーバに対して変更されたパケットフィルタを反映するタスクが既に実行中です。
 */
class PacketFilterApplyingException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.PacketFilterApplyingException#defaultMessage
	 * @default "要求された操作を行えません。起動中のサーバに対して変更されたパケットフィルタを反映するタスクが既に実行中です。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。起動中のサーバに対して変更されたパケットフィルタを反映するタスクが既に実行中です。";
	
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


/// <reference path="../../../node.d.ts" />

export = SwitchHybridConnectedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ハイブリッド接続されているスイッチに対して、この操作はできません。
 */
class SwitchHybridConnectedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.SwitchHybridConnectedException#defaultMessage
	 * @default "要求された操作を行えません。ハイブリッド接続されているスイッチに対して、この操作はできません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ハイブリッド接続されているスイッチに対して、この操作はできません。";
	
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


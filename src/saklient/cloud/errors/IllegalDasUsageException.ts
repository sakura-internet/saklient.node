/// <reference path="../../../node.d.ts" />

export = IllegalDasUsageException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。DASの利用方法に問題があります。1台のサーバには同一のストレージ上にあるDASのみを接続できます。
 */
class IllegalDasUsageException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.IllegalDasUsageException#defaultMessage
	 * @default "要求された操作を行えません。DASの利用方法に問題があります。1台のサーバには同一のストレージ上にあるDASのみを接続できます。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。DASの利用方法に問題があります。1台のサーバには同一のストレージ上にあるDASのみを接続できます。";
	
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


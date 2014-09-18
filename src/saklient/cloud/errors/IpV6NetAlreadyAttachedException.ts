/// <reference path="../../../node.d.ts" />

export = IpV6NetAlreadyAttachedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ConnectedなIPv6ネットワークが既に割り当て済みです。
 */
class IpV6NetAlreadyAttachedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.IpV6NetAlreadyAttachedException#defaultMessage
	 * @default "要求された操作を行えません。ConnectedなIPv6ネットワークが既に割り当て済みです。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ConnectedなIPv6ネットワークが既に割り当て済みです。";
	
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


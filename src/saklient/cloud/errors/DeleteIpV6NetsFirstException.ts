/// <reference path="../../../node.d.ts" />

export = DeleteIpV6NetsFirstException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ルータを削除する前に、IPv6ネットワークの割当を解除してください。
 */
class DeleteIpV6NetsFirstException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DeleteIpV6NetsFirstException#defaultMessage
	 * @default "要求された操作を行えません。ルータを削除する前に、IPv6ネットワークの割当を解除してください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ルータを削除する前に、IPv6ネットワークの割当を解除してください。";
	
}


/// <reference path="../../../node.d.ts" />

export = DeleteIpV6NetsFirstException;

import Util = require('../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。ルータを削除する前に、IPv6ネットワークの割当を解除してください。
 * 
 * @class DeleteIpV6NetsFirstException
 * @constructor
 * @extends HttpConflictException
 */
class DeleteIpV6NetsFirstException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DeleteIpV6NetsFirstException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ルータを削除する前に、IPv6ネットワークの割当を解除してください。";
	
}

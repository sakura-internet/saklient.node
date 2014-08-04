/// <reference path="../../../node.d.ts" />

export = IpV6NetAlreadyAttachedException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。ConnectedなIPv6ネットワークが既に割り当て済みです。
 * 
 * @class IpV6NetAlreadyAttachedException
 * @constructor
 * @extends HttpConflictException
 */
class IpV6NetAlreadyAttachedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.IpV6NetAlreadyAttachedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ConnectedなIPv6ネットワークが既に割り当て済みです。";
	
}


/// <reference path="../../../node.d.ts" />

export = RunOutOfIpAddressException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。指定されたネットワークに属するIPアドレスはすべて使用中です。
 * 
 * @class RunOutOfIpAddressException
 * @constructor
 * @extends HttpConflictException
 */
class RunOutOfIpAddressException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.RunOutOfIpAddressException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。指定されたネットワークに属するIPアドレスはすべて使用中です。";
	
}


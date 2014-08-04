/// <reference path="../../../node.d.ts" />

export = DeleteRouterB4SwitchException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。ルータを削除することでスイッチは同時に削除されます。
 * 
 * @class DeleteRouterB4SwitchException
 * @constructor
 * @extends HttpConflictException
 */
class DeleteRouterB4SwitchException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DeleteRouterB4SwitchException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ルータを削除することでスイッチは同時に削除されます。";
	
}


/// <reference path="../../../node.d.ts" />

export = NotForRouterException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。ルータには適用できません。
 * 
 * @class NotForRouterException
 * @constructor
 * @extends HttpConflictException
 */
class NotForRouterException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.NotForRouterException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ルータには適用できません。";
	
}


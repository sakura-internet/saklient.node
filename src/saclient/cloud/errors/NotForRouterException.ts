/// <reference path="../../../node.d.ts" />

export = NotForRouterException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

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


/// <reference path="../../../node.d.ts" />

export = DeleteStaticRouteFirstException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。
 * 
 * @class DeleteStaticRouteFirstException
 * @constructor
 * @extends HttpConflictException
 */
class DeleteStaticRouteFirstException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DeleteStaticRouteFirstException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。";
	
}


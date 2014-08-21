/// <reference path="../../../node.d.ts" />

export = DeleteStaticRouteFirstException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。
 */
class DeleteStaticRouteFirstException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DeleteStaticRouteFirstException#defaultMessage
	 * @default "要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。";
	
}


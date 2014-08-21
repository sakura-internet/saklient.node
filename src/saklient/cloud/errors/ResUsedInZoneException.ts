/// <reference path="../../../node.d.ts" />

export = ResUsedInZoneException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。同一ゾーン内の他のリソースが既にこのリソースを使用中です。
 */
class ResUsedInZoneException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ResUsedInZoneException#defaultMessage
	 * @default "要求された操作を行えません。同一ゾーン内の他のリソースが既にこのリソースを使用中です。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。同一ゾーン内の他のリソースが既にこのリソースを使用中です。";
	
}


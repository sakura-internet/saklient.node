/// <reference path="../../../node.d.ts" />

export = ResUsedInZoneException;

import Util = require('../../Util');
import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。同一ゾーン内の他のリソースが既にこのリソースを使用中です。
 * 
 * @class ResUsedInZoneException
 * @constructor
 * @extends HttpConflictException
 */
class ResUsedInZoneException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ResUsedInZoneException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。同一ゾーン内の他のリソースが既にこのリソースを使用中です。";
	
}


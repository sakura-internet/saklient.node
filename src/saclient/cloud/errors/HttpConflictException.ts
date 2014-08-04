/// <reference path="../../../node.d.ts" />

export = HttpConflictException;

import Util = require('../../Util');
import HttpException = require('./HttpException');

/**
 * 要求された操作を行えません。現在の対象の状態では、この操作を受け付けできません。
 * 
 * @class HttpConflictException
 * @constructor
 * @extends HttpException
 */
class HttpConflictException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HttpConflictException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。現在の対象の状態では、この操作を受け付けできません。";
	
}


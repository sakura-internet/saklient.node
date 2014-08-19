/// <reference path="../../node.d.ts" />

export = HttpConflictException;

import HttpException = require('./HttpException');

'use strict';

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
	 * @member saklient.errors.HttpConflictException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。現在の対象の状態では、この操作を受け付けできません。";
	
}


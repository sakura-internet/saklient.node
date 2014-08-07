/// <reference path="../../../node.d.ts" />

export = OriginalHashMismatchException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。オリジナルのデータを取得してからこのリクエストを行うまでの間に、他の変更が加わった可能性があります。
 * 
 * @class OriginalHashMismatchException
 * @constructor
 * @extends HttpConflictException
 */
class OriginalHashMismatchException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.OriginalHashMismatchException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。オリジナルのデータを取得してからこのリクエストを行うまでの間に、他の変更が加わった可能性があります。";
	
}


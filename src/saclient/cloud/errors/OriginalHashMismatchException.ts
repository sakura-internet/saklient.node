/// <reference path="../../../node.d.ts" />

export = OriginalHashMismatchException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

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


/// <reference path="../../../node.d.ts" />

export = OriginalHashMismatchException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。オリジナルのデータを取得してからこのリクエストを行うまでの間に、他の変更が加わった可能性があります。
 */
class OriginalHashMismatchException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.OriginalHashMismatchException#defaultMessage
	 * @default "要求された操作を行えません。オリジナルのデータを取得してからこのリクエストを行うまでの間に、他の変更が加わった可能性があります。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。オリジナルのデータを取得してからこのリクエストを行うまでの間に、他の変更が加わった可能性があります。";
	
}


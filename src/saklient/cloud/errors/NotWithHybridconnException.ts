/// <reference path="../../../node.d.ts" />

export = NotWithHybridconnException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ハイブリッド接続と併用する場合はお問い合わせください。
 * 
 * @class NotWithHybridconnException
 * @constructor
 * @extends HttpConflictException
 */
class NotWithHybridconnException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.NotWithHybridconnException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ハイブリッド接続と併用する場合はお問い合わせください。";
	
}


/// <reference path="../../../node.d.ts" />

export = CdromIsIncompleteException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。このISOイメージは不完全です。複製処理等の完了後に再度お試しください。
 * 
 * @class CdromIsIncompleteException
 * @constructor
 * @extends HttpConflictException
 */
class CdromIsIncompleteException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.CdromIsIncompleteException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このISOイメージは不完全です。複製処理等の完了後に再度お試しください。";
	
}


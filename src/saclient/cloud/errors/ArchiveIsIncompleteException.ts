/// <reference path="../../../node.d.ts" />

export = ArchiveIsIncompleteException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このアーカイブは不完全です。複製処理等の完了後に再度お試しください。
 * 
 * @class ArchiveIsIncompleteException
 * @constructor
 * @extends HttpConflictException
 */
class ArchiveIsIncompleteException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ArchiveIsIncompleteException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このアーカイブは不完全です。複製処理等の完了後に再度お試しください。";
	
}


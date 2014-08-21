/// <reference path="../../../node.d.ts" />

export = DuplicateEntryException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。リソースが既に存在するか、リソース同士が既に関連付けられています。
 */
class DuplicateEntryException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DuplicateEntryException#defaultMessage
	 * @default "要求された操作を行えません。リソースが既に存在するか、リソース同士が既に関連付けられています。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。リソースが既に存在するか、リソース同士が既に関連付けられています。";
	
}


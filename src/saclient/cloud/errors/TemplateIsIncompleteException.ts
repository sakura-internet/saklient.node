/// <reference path="../../../node.d.ts" />

export = TemplateIsIncompleteException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このテンプレートは不完全です。複製処理等の完了後に再度お試しください。
 * 
 * @class TemplateIsIncompleteException
 * @constructor
 * @extends HttpConflictException
 */
class TemplateIsIncompleteException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.TemplateIsIncompleteException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このテンプレートは不完全です。複製処理等の完了後に再度お試しください。";
	
}


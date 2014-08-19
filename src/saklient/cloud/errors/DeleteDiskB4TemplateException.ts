/// <reference path="../../../node.d.ts" />

export = DeleteDiskB4TemplateException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このテンプレートから作成したすべてのディスクを削除した後に実行してください。
 * 
 * @class DeleteDiskB4TemplateException
 * @constructor
 * @extends HttpConflictException
 */
class DeleteDiskB4TemplateException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DeleteDiskB4TemplateException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このテンプレートから作成したすべてのディスクを削除した後に実行してください。";
	
}


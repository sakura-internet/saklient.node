/// <reference path="../../../node.d.ts" />

export = DeleteDiskB4TemplateException;

import Util = require('../../Util');
import HttpConflictException = require('../../errors/HttpConflictException');

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
	 * @member saclient.cloud.errors.DeleteDiskB4TemplateException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このテンプレートから作成したすべてのディスクを削除した後に実行してください。";
	
}


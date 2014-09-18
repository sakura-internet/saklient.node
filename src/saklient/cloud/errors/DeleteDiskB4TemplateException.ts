/// <reference path="../../../node.d.ts" />

export = DeleteDiskB4TemplateException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。このテンプレートから作成したすべてのディスクを削除した後に実行してください。
 */
class DeleteDiskB4TemplateException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求された操作を行えません。このテンプレートから作成したすべてのディスクを削除した後に実行してください。" : message);
	}
	
}


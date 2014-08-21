/// <reference path="../../../node.d.ts" />

export = FileNotUploadedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ファイルをアップロード後に実行してください。
 */
class FileNotUploadedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.FileNotUploadedException#defaultMessage
	 * @default "要求された操作を行えません。ファイルをアップロード後に実行してください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ファイルをアップロード後に実行してください。";
	
}


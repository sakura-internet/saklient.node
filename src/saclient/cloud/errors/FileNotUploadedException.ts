/// <reference path="../../../node.d.ts" />

export = FileNotUploadedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ファイルをアップロード後に実行してください。
 * 
 * @class FileNotUploadedException
 * @constructor
 * @extends HttpConflictException
 */
class FileNotUploadedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.FileNotUploadedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ファイルをアップロード後に実行してください。";
	
}


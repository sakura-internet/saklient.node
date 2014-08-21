/// <reference path="../../../node.d.ts" />

export = CdromInUseException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ISOイメージをサーバから排出後に実行してください。
 */
class CdromInUseException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.CdromInUseException#defaultMessage
	 * @default "要求された操作を行えません。ISOイメージをサーバから排出後に実行してください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ISOイメージをサーバから排出後に実行してください。";
	
}


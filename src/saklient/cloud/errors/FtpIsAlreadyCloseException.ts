/// <reference path="../../../node.d.ts" />

export = FtpIsAlreadyCloseException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。FTP共有は既に終了されています。
 */
class FtpIsAlreadyCloseException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.FtpIsAlreadyCloseException#defaultMessage
	 * @default "要求された操作を行えません。FTP共有は既に終了されています。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。FTP共有は既に終了されています。";
	
}


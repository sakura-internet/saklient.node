/// <reference path="../../../node.d.ts" />

export = FtpMustBeClosedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。リソースのFTP共有を終了した後に実行してください。
 */
class FtpMustBeClosedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.FtpMustBeClosedException#defaultMessage
	 * @default "要求された操作を行えません。リソースのFTP共有を終了した後に実行してください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。リソースのFTP共有を終了した後に実行してください。";
	
}


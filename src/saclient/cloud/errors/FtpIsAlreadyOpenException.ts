/// <reference path="../../../node.d.ts" />

export = FtpIsAlreadyOpenException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。FTP共有は既に開始されています。
 * 
 * @class FtpIsAlreadyOpenException
 * @constructor
 * @extends HttpConflictException
 */
class FtpIsAlreadyOpenException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.FtpIsAlreadyOpenException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。FTP共有は既に開始されています。";
	
}


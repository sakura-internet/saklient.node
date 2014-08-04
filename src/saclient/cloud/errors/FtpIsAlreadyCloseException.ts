/// <reference path="../../../node.d.ts" />

export = FtpIsAlreadyCloseException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。FTP共有は既に終了されています。
 * 
 * @class FtpIsAlreadyCloseException
 * @constructor
 * @extends HttpConflictException
 */
class FtpIsAlreadyCloseException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.FtpIsAlreadyCloseException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。FTP共有は既に終了されています。";
	
}


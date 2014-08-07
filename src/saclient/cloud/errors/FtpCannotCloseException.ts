/// <reference path="../../../node.d.ts" />

export = FtpCannotCloseException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。FTP共有によりアップロードされたファイルを操作できません。ファイル名等をご確認ください。
 * 
 * @class FtpCannotCloseException
 * @constructor
 * @extends HttpConflictException
 */
class FtpCannotCloseException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.FtpCannotCloseException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。FTP共有によりアップロードされたファイルを操作できません。ファイル名等をご確認ください。";
	
}


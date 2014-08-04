/// <reference path="../../../node.d.ts" />

export = MissingIsoImageException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。ISOイメージが見つかりません。イメージを正しくアップロードし、FTP共有を終了した後に再度お試しください。
 * 
 * @class MissingIsoImageException
 * @constructor
 * @extends HttpConflictException
 */
class MissingIsoImageException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.MissingIsoImageException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ISOイメージが見つかりません。イメージを正しくアップロードし、FTP共有を終了した後に再度お試しください。";
	
}


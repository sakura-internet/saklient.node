/// <reference path="../../../node.d.ts" />

export = FtpMustBeClosedException;

import Util = require('../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。リソースのFTP共有を終了した後に実行してください。
 * 
 * @class FtpMustBeClosedException
 * @constructor
 * @extends HttpConflictException
 */
class FtpMustBeClosedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.FtpMustBeClosedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。リソースのFTP共有を終了した後に実行してください。";
	
}


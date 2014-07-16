/// <reference path="../../../node.d.ts" />

export = TemplateFtpIsOpenException;

import Util = require('../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。テンプレートのFTP共有を終了後に実行してください。
 * 
 * @class TemplateFtpIsOpenException
 * @constructor
 * @extends HttpConflictException
 */
class TemplateFtpIsOpenException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.TemplateFtpIsOpenException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。テンプレートのFTP共有を終了後に実行してください。";
	
}

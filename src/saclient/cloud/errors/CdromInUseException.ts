/// <reference path="../../../node.d.ts" />

export = CdromInUseException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。ISOイメージをサーバから排出後に実行してください。
 * 
 * @class CdromInUseException
 * @constructor
 * @extends HttpConflictException
 */
class CdromInUseException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.CdromInUseException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ISOイメージをサーバから排出後に実行してください。";
	
}


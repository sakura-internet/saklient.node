/// <reference path="../../../node.d.ts" />

export = ResAlreadyExistsException;

import Util = require('../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。このIDのリソースは既に存在します。
 * 
 * @class ResAlreadyExistsException
 * @constructor
 * @extends HttpConflictException
 */
class ResAlreadyExistsException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ResAlreadyExistsException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このIDのリソースは既に存在します。";
	
}

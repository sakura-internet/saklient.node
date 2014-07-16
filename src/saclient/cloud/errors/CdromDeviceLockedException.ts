/// <reference path="../../../node.d.ts" />

export = CdromDeviceLockedException;

import Util = require('../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。CD-ROMドライブがロックされています。
 * 
 * @class CdromDeviceLockedException
 * @constructor
 * @extends HttpConflictException
 */
class CdromDeviceLockedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.CdromDeviceLockedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。CD-ROMドライブがロックされています。";
	
}

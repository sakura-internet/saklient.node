/// <reference path="../../../node.d.ts" />

export = CdromDeviceLockedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。CD-ROMドライブがロックされています。
 */
class CdromDeviceLockedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.CdromDeviceLockedException#defaultMessage
	 * @default "要求された操作を行えません。CD-ROMドライブがロックされています。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。CD-ROMドライブがロックされています。";
	
}


/// <reference path="../../../node.d.ts" />

export = DiskLicenseMismatchException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ライセンスの問題により、組み合わせて使用できないディスクが接続されています。
 * 
 * @class DiskLicenseMismatchException
 * @constructor
 * @extends HttpConflictException
 */
class DiskLicenseMismatchException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DiskLicenseMismatchException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ライセンスの問題により、組み合わせて使用できないディスクが接続されています。";
	
}


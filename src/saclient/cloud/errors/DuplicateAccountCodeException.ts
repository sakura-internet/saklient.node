/// <reference path="../../../node.d.ts" />

export = DuplicateAccountCodeException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。同一アカウント名で複数のアカウントを作成することはできません。
 * 
 * @class DuplicateAccountCodeException
 * @constructor
 * @extends HttpConflictException
 */
class DuplicateAccountCodeException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DuplicateAccountCodeException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。同一アカウント名で複数のアカウントを作成することはできません。";
	
}


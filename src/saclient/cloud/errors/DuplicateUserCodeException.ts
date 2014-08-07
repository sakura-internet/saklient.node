'use strict';

/// <reference path="../../../node.d.ts" />

export = DuplicateUserCodeException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。同一ユーザ名で複数のユーザを作成することはできません。
 * 
 * @class DuplicateUserCodeException
 * @constructor
 * @extends HttpConflictException
 */
class DuplicateUserCodeException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DuplicateUserCodeException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。同一ユーザ名で複数のユーザを作成することはできません。";
	
}


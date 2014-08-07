'use strict';

/// <reference path="../../../node.d.ts" />

export = LimitSizeInAccountException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求を受け付けできません。アカウントあたりのリソースサイズ上限により、リソースの割り当てに失敗しました。
 * 
 * @class LimitSizeInAccountException
 * @constructor
 * @extends HttpConflictException
 */
class LimitSizeInAccountException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.LimitSizeInAccountException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。アカウントあたりのリソースサイズ上限により、リソースの割り当てに失敗しました。";
	
}


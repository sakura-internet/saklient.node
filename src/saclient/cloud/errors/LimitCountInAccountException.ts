/// <reference path="../../../node.d.ts" />

export = LimitCountInAccountException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求を受け付けできません。アカウントあたりのリソース数上限により、リソースの割り当てに失敗しました。
 * 
 * @class LimitCountInAccountException
 * @constructor
 * @extends HttpConflictException
 */
class LimitCountInAccountException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.LimitCountInAccountException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。アカウントあたりのリソース数上限により、リソースの割り当てに失敗しました。";
	
}


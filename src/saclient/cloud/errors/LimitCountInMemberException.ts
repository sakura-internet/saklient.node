/// <reference path="../../../node.d.ts" />

export = LimitCountInMemberException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求を受け付けできません。アカウント数上限により作成失敗しました。
 * 
 * @class LimitCountInMemberException
 * @constructor
 * @extends HttpConflictException
 */
class LimitCountInMemberException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.LimitCountInMemberException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。アカウント数上限により作成失敗しました。";
	
}


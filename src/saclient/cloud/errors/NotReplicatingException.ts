/// <reference path="../../../node.d.ts" />

export = NotReplicatingException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。このストレージ上への指定リソースの複製は実行されていません。
 * 
 * @class NotReplicatingException
 * @constructor
 * @extends HttpConflictException
 */
class NotReplicatingException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.NotReplicatingException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このストレージ上への指定リソースの複製は実行されていません。";
	
}


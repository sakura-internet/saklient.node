/// <reference path="../../../node.d.ts" />

export = IllegalDasUsageException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求された操作を行えません。DASの利用方法に問題があります。1台のサーバには同一のストレージ上にあるDASのみを接続できます。
 * 
 * @class IllegalDasUsageException
 * @constructor
 * @extends HttpConflictException
 */
class IllegalDasUsageException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.IllegalDasUsageException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。DASの利用方法に問題があります。1台のサーバには同一のストレージ上にあるDASのみを接続できます。";
	
}


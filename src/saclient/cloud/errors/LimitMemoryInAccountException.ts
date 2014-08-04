/// <reference path="../../../node.d.ts" />

export = LimitMemoryInAccountException;

import Util = require('../../Util');
import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求を受け付けできません。アカウントあたりの全サーバメモリサイズ上限により、リソースの割り当てに失敗しました。
 * 
 * @class LimitMemoryInAccountException
 * @constructor
 * @extends HttpConflictException
 */
class LimitMemoryInAccountException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.LimitMemoryInAccountException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。アカウントあたりの全サーバメモリサイズ上限により、リソースの割り当てに失敗しました。";
	
}


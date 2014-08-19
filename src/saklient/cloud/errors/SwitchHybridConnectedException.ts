/// <reference path="../../../node.d.ts" />

export = SwitchHybridConnectedException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。ハイブリッド接続されているスイッチに対して、この操作はできません。
 * 
 * @class SwitchHybridConnectedException
 * @constructor
 * @extends HttpConflictException
 */
class SwitchHybridConnectedException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.SwitchHybridConnectedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ハイブリッド接続されているスイッチに対して、この操作はできません。";
	
}


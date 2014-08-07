/// <reference path="../../../node.d.ts" />

export = PacketFilterVersionMismatchException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。起動中のサーバが収容されているハイパーバイザとパケットフィルタのバージョンが合致しません。コントロールパネルまたはAPIからの操作によりサーバを一旦停止し、再度起動後にお試しください。
 * 
 * @class PacketFilterVersionMismatchException
 * @constructor
 * @extends HttpConflictException
 */
class PacketFilterVersionMismatchException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.PacketFilterVersionMismatchException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。起動中のサーバが収容されているハイパーバイザとパケットフィルタのバージョンが合致しません。コントロールパネルまたはAPIからの操作によりサーバを一旦停止し、再度起動後にお試しください。";
	
}


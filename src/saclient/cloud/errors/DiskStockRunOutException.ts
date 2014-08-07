'use strict';

/// <reference path="../../../node.d.ts" />

export = DiskStockRunOutException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
 * サービスが利用できません。作成済みディスクを確保できませんでした。サーバが混雑している可能性があります。
 * 
 * @class DiskStockRunOutException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class DiskStockRunOutException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DiskStockRunOutException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。作成済みディスクを確保できませんでした。サーバが混雑している可能性があります。";
	
}


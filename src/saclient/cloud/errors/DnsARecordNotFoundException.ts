'use strict';

/// <reference path="../../../node.d.ts" />

export = DnsARecordNotFoundException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
 * 不適切な要求です。対応するAレコードが見つかりません。
 * 
 * @class DnsARecordNotFoundException
 * @constructor
 * @extends HttpBadRequestException
 */
class DnsARecordNotFoundException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DnsARecordNotFoundException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。対応するAレコードが見つかりません。";
	
}


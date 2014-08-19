/// <reference path="../../../node.d.ts" />

export = DnsAaaaRecordNotFoundException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。対応するAAAAレコードが見つかりません。
 * 
 * @class DnsAaaaRecordNotFoundException
 * @constructor
 * @extends HttpBadRequestException
 */
class DnsAaaaRecordNotFoundException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DnsAaaaRecordNotFoundException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。対応するAAAAレコードが見つかりません。";
	
}


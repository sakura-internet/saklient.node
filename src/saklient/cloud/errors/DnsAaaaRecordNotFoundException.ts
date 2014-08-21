/// <reference path="../../../node.d.ts" />

export = DnsAaaaRecordNotFoundException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。対応するAAAAレコードが見つかりません。
 */
class DnsAaaaRecordNotFoundException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DnsAaaaRecordNotFoundException#defaultMessage
	 * @default "不適切な要求です。対応するAAAAレコードが見つかりません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。対応するAAAAレコードが見つかりません。";
	
}


/// <reference path="../../../node.d.ts" />

export = DnsARecordNotFoundException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。対応するAレコードが見つかりません。
 */
class DnsARecordNotFoundException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DnsARecordNotFoundException#defaultMessage
	 * @default "不適切な要求です。対応するAレコードが見つかりません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。対応するAレコードが見つかりません。";
	
}


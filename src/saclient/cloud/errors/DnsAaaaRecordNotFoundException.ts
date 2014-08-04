/// <reference path="../../../node.d.ts" />

export = DnsAaaaRecordNotFoundException;

import Util = require('../../Util');
import HttpBadRequestException = require('../../errors/HttpBadRequestException');

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
	 * @member saclient.cloud.errors.DnsAaaaRecordNotFoundException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。対応するAAAAレコードが見つかりません。";
	
}


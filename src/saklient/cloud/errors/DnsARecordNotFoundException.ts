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
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message);
	}
	
}


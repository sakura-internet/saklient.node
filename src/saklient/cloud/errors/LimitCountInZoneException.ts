/// <reference path="../../../node.d.ts" />

export = LimitCountInZoneException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求を受け付けできません。ゾーン内リソース数上限により、リソースの割り当てに失敗しました。
 */
class LimitCountInZoneException extends HttpConflictException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求を受け付けできません。ゾーン内リソース数上限により、リソースの割り当てに失敗しました。" : message);
	}
	
}


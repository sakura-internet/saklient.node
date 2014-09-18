/// <reference path="../../../node.d.ts" />

export = LimitCountInRouterException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求を受け付けできません。ルータあたりのリソース数上限により、リソースの割り当てに失敗しました。
 */
class LimitCountInRouterException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.LimitCountInRouterException#defaultMessage
	 * @default "要求を受け付けできません。ルータあたりのリソース数上限により、リソースの割り当てに失敗しました。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。ルータあたりのリソース数上限により、リソースの割り当てに失敗しました。";
	
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


/// <reference path="../../../node.d.ts" />

export = VncProxyRequestFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。VNCプロクシの要求に失敗しました。
 */
class VncProxyRequestFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "サービスが利用できません。VNCプロクシの要求に失敗しました。" : message);
	}
	
}


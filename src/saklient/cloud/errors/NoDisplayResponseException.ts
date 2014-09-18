/// <reference path="../../../node.d.ts" />

export = NoDisplayResponseException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバの画面が応答していません。
 */
class NoDisplayResponseException extends HttpServiceUnavailableException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "サービスが利用できません。サーバの画面が応答していません。" : message);
	}
	
}


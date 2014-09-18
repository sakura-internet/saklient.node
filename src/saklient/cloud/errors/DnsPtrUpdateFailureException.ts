/// <reference path="../../../node.d.ts" />

export = DnsPtrUpdateFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。PTRレコードを設定できません。
 */
class DnsPtrUpdateFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "サービスが利用できません。PTRレコードを設定できません。" : message);
	}
	
}


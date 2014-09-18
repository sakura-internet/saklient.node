/// <reference path="../../../node.d.ts" />

export = DnsPtrUpdateFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。PTRレコードを設定できません。
 */
class DnsPtrUpdateFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.DnsPtrUpdateFailureException#defaultMessage
	 * @default "サービスが利用できません。PTRレコードを設定できません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。PTRレコードを設定できません。";
	
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


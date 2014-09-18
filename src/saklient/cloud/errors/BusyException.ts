/// <reference path="../../../node.d.ts" />

export = BusyException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバが混雑しています。しばらく時間をおいてから再度お試しください。
 */
class BusyException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.BusyException#defaultMessage
	 * @default "サービスが利用できません。サーバが混雑しています。しばらく時間をおいてから再度お試しください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバが混雑しています。しばらく時間をおいてから再度お試しください。";
	
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


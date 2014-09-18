/// <reference path="../../../node.d.ts" />

export = PaymentTelCertificationException;

import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

'use strict';

/**
 * 要求を受け付けできません。電話認証を先に実行してください。
 */
class PaymentTelCertificationException extends HttpPaymentRequiredException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.PaymentTelCertificationException#defaultMessage
	 * @default "要求を受け付けできません。電話認証を先に実行してください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。電話認証を先に実行してください。";
	
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


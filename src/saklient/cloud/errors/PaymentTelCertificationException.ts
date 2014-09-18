/// <reference path="../../../node.d.ts" />

export = PaymentTelCertificationException;

import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

'use strict';

/**
 * 要求を受け付けできません。電話認証を先に実行してください。
 */
class PaymentTelCertificationException extends HttpPaymentRequiredException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求を受け付けできません。電話認証を先に実行してください。" : message);
	}
	
}


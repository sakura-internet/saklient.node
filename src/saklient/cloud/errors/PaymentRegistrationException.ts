/// <reference path="../../../node.d.ts" />

export = PaymentRegistrationException;

import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

'use strict';

/**
 * 要求を受け付けできません。支払情報が未登録です。会員メニューから支払、クレジットカードの情報を登録してください
 */
class PaymentRegistrationException extends HttpPaymentRequiredException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "要求を受け付けできません。支払情報が未登録です。会員メニューから支払、クレジットカードの情報を登録してください" : message);
	}
	
}


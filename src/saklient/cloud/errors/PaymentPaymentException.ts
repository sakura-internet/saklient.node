/// <reference path="../../../node.d.ts" />

export = PaymentPaymentException;

import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

'use strict';

/**
 * お客様のご都合により操作を受け付けることができません。
 */
class PaymentPaymentException extends HttpPaymentRequiredException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "お客様のご都合により操作を受け付けることができません。" : message);
	}
	
}


/// <reference path="../../../node.d.ts" />

export = PaymentCreditCardException;

import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

'use strict';

/**
 * 要求を受け付けできません。クレジットカードの使用期限、利用限度額をご確認ください。
 */
class PaymentCreditCardException extends HttpPaymentRequiredException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.PaymentCreditCardException#defaultMessage
	 * @default "要求を受け付けできません。クレジットカードの使用期限、利用限度額をご確認ください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。クレジットカードの使用期限、利用限度額をご確認ください。";
	
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


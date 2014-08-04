/// <reference path="../../../node.d.ts" />

export = PaymentPaymentException;

import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

/**
 * お客様のご都合により操作を受け付けることができません。
 * 
 * @class PaymentPaymentException
 * @constructor
 * @extends HttpPaymentRequiredException
 */
class PaymentPaymentException extends HttpPaymentRequiredException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.PaymentPaymentException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "お客様のご都合により操作を受け付けることができません。";
	
}


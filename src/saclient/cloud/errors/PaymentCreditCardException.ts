/// <reference path="../../../node.d.ts" />

export = PaymentCreditCardException;

import Util = require('../../Util');
import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

/**
 * 要求を受け付けできません。クレジットカードの使用期限、利用限度額をご確認ください。
 * 
 * @class PaymentCreditCardException
 * @constructor
 * @extends HttpPaymentRequiredException
 */
class PaymentCreditCardException extends HttpPaymentRequiredException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.PaymentCreditCardException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。クレジットカードの使用期限、利用限度額をご確認ください。";
	
}


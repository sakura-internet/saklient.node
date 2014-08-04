/// <reference path="../../../node.d.ts" />

export = PaymentRegistrationException;

import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

/**
 * 要求を受け付けできません。支払情報が未登録です。会員メニューから支払、クレジットカードの情報を登録してください
 * 
 * @class PaymentRegistrationException
 * @constructor
 * @extends HttpPaymentRequiredException
 */
class PaymentRegistrationException extends HttpPaymentRequiredException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.PaymentRegistrationException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。支払情報が未登録です。会員メニューから支払、クレジットカードの情報を登録してください";
	
}


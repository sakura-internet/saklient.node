/// <reference path="../../../node.d.ts" />

export = PaymentPaymentException;

import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

'use strict';

/**
 * お客様のご都合により操作を受け付けることができません。
 */
class PaymentPaymentException extends HttpPaymentRequiredException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.PaymentPaymentException#defaultMessage
	 * @default "お客様のご都合により操作を受け付けることができません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "お客様のご都合により操作を受け付けることができません。";
	
}


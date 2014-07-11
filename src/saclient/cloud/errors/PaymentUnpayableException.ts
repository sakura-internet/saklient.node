/// <reference path="../../../node.d.ts" />

export = PaymentUnpayableException;

import Util = require('../Util');
import HttpPaymentRequiredException = require('./HttpPaymentRequiredException');

/**
 * お客様のご都合により操作を受け付けることができません。
 * 
 * @class PaymentUnpayableException
 * @constructor
 * @extends HttpPaymentRequiredException
 */
class PaymentUnpayableException extends HttpPaymentRequiredException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.PaymentUnpayableException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "お客様のご都合により操作を受け付けることができません。";
	
}


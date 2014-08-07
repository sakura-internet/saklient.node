'use strict';

/// <reference path="../../../node.d.ts" />

export = PaymentTelCertificationException;

import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

/**
 * 要求を受け付けできません。電話認証を先に実行してください。
 * 
 * @class PaymentTelCertificationException
 * @constructor
 * @extends HttpPaymentRequiredException
 */
class PaymentTelCertificationException extends HttpPaymentRequiredException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.PaymentTelCertificationException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。電話認証を先に実行してください。";
	
}


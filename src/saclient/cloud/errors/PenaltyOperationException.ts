'use strict';

/// <reference path="../../../node.d.ts" />

export = PenaltyOperationException;

import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

/**
 * お客様のご都合により操作を受け付けることができません。
 * 
 * @class PenaltyOperationException
 * @constructor
 * @extends HttpPaymentRequiredException
 */
class PenaltyOperationException extends HttpPaymentRequiredException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.PenaltyOperationException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "お客様のご都合により操作を受け付けることができません。";
	
}


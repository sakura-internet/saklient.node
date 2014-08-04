/// <reference path="../../../node.d.ts" />

export = PenaltyOperationException;

import Util = require('../../Util');
import HttpPaymentRequiredException = require('./HttpPaymentRequiredException');

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


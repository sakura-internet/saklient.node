/// <reference path="../../../node.d.ts" />

export = PenaltyOperationException;

import HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

'use strict';

/**
 * お客様のご都合により操作を受け付けることができません。
 */
class PenaltyOperationException extends HttpPaymentRequiredException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.PenaltyOperationException#defaultMessage
	 * @default "お客様のご都合により操作を受け付けることができません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "お客様のご都合により操作を受け付けることができません。";
	
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


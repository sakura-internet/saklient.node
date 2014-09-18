/// <reference path="../../../node.d.ts" />

export = VncProxyRequestFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。VNCプロクシの要求に失敗しました。
 */
class VncProxyRequestFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.VncProxyRequestFailureException#defaultMessage
	 * @default "サービスが利用できません。VNCプロクシの要求に失敗しました。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。VNCプロクシの要求に失敗しました。";
	
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


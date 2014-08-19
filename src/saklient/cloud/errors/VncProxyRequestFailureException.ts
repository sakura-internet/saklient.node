/// <reference path="../../../node.d.ts" />

export = VncProxyRequestFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。VNCプロクシの要求に失敗しました。
 * 
 * @class VncProxyRequestFailureException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class VncProxyRequestFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.VncProxyRequestFailureException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。VNCプロクシの要求に失敗しました。";
	
}


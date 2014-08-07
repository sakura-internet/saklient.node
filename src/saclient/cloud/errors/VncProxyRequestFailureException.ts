'use strict';

/// <reference path="../../../node.d.ts" />

export = VncProxyRequestFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

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
	 * @member saclient.cloud.errors.VncProxyRequestFailureException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。VNCプロクシの要求に失敗しました。";
	
}


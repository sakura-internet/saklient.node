'use strict';

/// <reference path="../../../node.d.ts" />

export = DnsPtrUpdateFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
 * サービスが利用できません。PTRレコードを設定できません。
 * 
 * @class DnsPtrUpdateFailureException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class DnsPtrUpdateFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.DnsPtrUpdateFailureException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。PTRレコードを設定できません。";
	
}


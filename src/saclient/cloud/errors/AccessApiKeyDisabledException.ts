/// <reference path="../../../node.d.ts" />

export = AccessApiKeyDisabledException;

import HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
 * 要求された操作は許可されていません。APIキーによるアクセスはできません。
 * 
 * @class AccessApiKeyDisabledException
 * @constructor
 * @extends HttpForbiddenException
 */
class AccessApiKeyDisabledException extends HttpForbiddenException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.AccessApiKeyDisabledException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作は許可されていません。APIキーによるアクセスはできません。";
	
}


/// <reference path="../../../node.d.ts" />

export = CopyToItselfException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。自分自身をソースとするコピーはできません。
 * 
 * @class CopyToItselfException
 * @constructor
 * @extends HttpBadRequestException
 */
class CopyToItselfException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.CopyToItselfException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。自分自身をソースとするコピーはできません。";
	
}


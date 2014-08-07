'use strict';

/// <reference path="../../node.d.ts" />

export = HttpVariantAlsoNegotiatesException;

import HttpException = require('./HttpException');

/**
 * HTTPエラー。Variant Also Negotiates.
 * 
 * @class HttpVariantAlsoNegotiatesException
 * @constructor
 * @extends HttpException
 */
class HttpVariantAlsoNegotiatesException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpVariantAlsoNegotiatesException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Variant Also Negotiates.";
	
}


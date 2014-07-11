/// <reference path="../../../node.d.ts" />

export = HttpVariantAlsoNegotiatesException;

import Util = require('../Util');
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
	 * @member saclient.cloud.errors.HttpVariantAlsoNegotiatesException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Variant Also Negotiates.";
	
}


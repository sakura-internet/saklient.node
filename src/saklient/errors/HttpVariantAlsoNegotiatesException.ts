/// <reference path="../../node.d.ts" />

export = HttpVariantAlsoNegotiatesException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Variant Also Negotiates.
 */
class HttpVariantAlsoNegotiatesException extends HttpException {
	
	/**
	 * @static
	 * @member saklient.errors.HttpVariantAlsoNegotiatesException#defaultMessage
	 * @default "HTTPエラー。Variant Also Negotiates."
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Variant Also Negotiates.";
	
}


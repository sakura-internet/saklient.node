/// <reference path="../../../node.d.ts" />

export = MissingParamException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。必要なパラメータが指定されていません。
 * 
 * @class MissingParamException
 * @constructor
 * @extends HttpBadRequestException
 */
class MissingParamException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.MissingParamException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。必要なパラメータが指定されていません。";
	
}


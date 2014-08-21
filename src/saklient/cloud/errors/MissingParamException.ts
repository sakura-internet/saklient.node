/// <reference path="../../../node.d.ts" />

export = MissingParamException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。必要なパラメータが指定されていません。
 */
class MissingParamException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.MissingParamException#defaultMessage
	 * @default "不適切な要求です。必要なパラメータが指定されていません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。必要なパラメータが指定されていません。";
	
}


/// <reference path="../../../node.d.ts" />

export = ParamIpNotFoundException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。パラメータで指定されたIPアドレスを含むネットワークが存在しません。
 */
class ParamIpNotFoundException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ParamIpNotFoundException#defaultMessage
	 * @default "不適切な要求です。パラメータで指定されたIPアドレスを含むネットワークが存在しません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。パラメータで指定されたIPアドレスを含むネットワークが存在しません。";
	
}


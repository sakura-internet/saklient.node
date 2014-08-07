/// <reference path="../../../node.d.ts" />

export = ParamIpNotFoundException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。パラメータで指定されたIPアドレスを含むネットワークが存在しません。
 * 
 * @class ParamIpNotFoundException
 * @constructor
 * @extends HttpBadRequestException
 */
class ParamIpNotFoundException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ParamIpNotFoundException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。パラメータで指定されたIPアドレスを含むネットワークが存在しません。";
	
}


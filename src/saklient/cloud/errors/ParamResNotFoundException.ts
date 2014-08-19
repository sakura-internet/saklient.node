/// <reference path="../../../node.d.ts" />

export = ParamResNotFoundException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。パラメータで指定されたリソースが存在しません。IDをご確認ください。
 * 
 * @class ParamResNotFoundException
 * @constructor
 * @extends HttpBadRequestException
 */
class ParamResNotFoundException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ParamResNotFoundException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。パラメータで指定されたリソースが存在しません。IDをご確認ください。";
	
}


/// <reference path="../../../node.d.ts" />

export = UnknownOsTypeException;

import Util = require('../Util');
import HttpServiceUnavailableException = require('./HttpServiceUnavailableException');

/**
 * サービスが利用できません。ディスクにインストールされたOSが特定できないため、正しく修正できません。
 * 
 * @class UnknownOsTypeException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class UnknownOsTypeException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.UnknownOsTypeException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。ディスクにインストールされたOSが特定できないため、正しく修正できません。";
	
}


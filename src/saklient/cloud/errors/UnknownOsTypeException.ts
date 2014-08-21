/// <reference path="../../../node.d.ts" />

export = UnknownOsTypeException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。ディスクにインストールされたOSが特定できないため、正しく修正できません。
 */
class UnknownOsTypeException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.UnknownOsTypeException#defaultMessage
	 * @default "サービスが利用できません。ディスクにインストールされたOSが特定できないため、正しく修正できません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。ディスクにインストールされたOSが特定できないため、正しく修正できません。";
	
}


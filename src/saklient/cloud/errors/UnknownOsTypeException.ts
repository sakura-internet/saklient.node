/// <reference path="../../../node.d.ts" />

export = UnknownOsTypeException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。ディスクにインストールされたOSが特定できないため、正しく修正できません。
 */
class UnknownOsTypeException extends HttpServiceUnavailableException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "サービスが利用できません。ディスクにインストールされたOSが特定できないため、正しく修正できません。" : message);
	}
	
}


/// <reference path="../../../node.d.ts" />

export = CantResizeSmallerException;

import HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
 * 不適切な要求です。現在の容量よりも小さくリサイズすることはできません。
 */
class CantResizeSmallerException extends HttpBadRequestException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.CantResizeSmallerException#defaultMessage
	 * @default "不適切な要求です。現在の容量よりも小さくリサイズすることはできません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "不適切な要求です。現在の容量よりも小さくリサイズすることはできません。";
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message);
	}
	
}


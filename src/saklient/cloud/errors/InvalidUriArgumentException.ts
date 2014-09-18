/// <reference path="../../../node.d.ts" />

export = InvalidUriArgumentException;

import HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

/**
 * 対象が見つかりません。パスに使用できない文字が含まれています。
 */
class InvalidUriArgumentException extends HttpNotFoundException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "対象が見つかりません。パスに使用できない文字が含まれています。" : message);
	}
	
}


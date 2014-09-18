/// <reference path="../../../node.d.ts" />

export = ResourcePathNotFoundException;

import HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

/**
 * 対象が見つかりません。パスに誤りがあります。
 */
class ResourcePathNotFoundException extends HttpNotFoundException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "対象が見つかりません。パスに誤りがあります。" : message);
	}
	
}


/// <reference path="../../node.d.ts" />

export = HttpNotFoundException;

import HttpException = require('./HttpException');

'use strict';

/**
 * 対象が見つかりません。対象は利用できない状態か、IDまたはパスに誤りがあります。
 */
class HttpNotFoundException extends HttpException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "対象が見つかりません。対象は利用できない状態か、IDまたはパスに誤りがあります。" : message);
	}
	
}


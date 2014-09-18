/// <reference path="../../../node.d.ts" />

export = ReplicaNotFoundException;

import HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

/**
 * 対象が見つかりません。このストレージには指定リソースの複製が存在しません。
 */
class ReplicaNotFoundException extends HttpNotFoundException {
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(status, code, message == null || message == "" ? "対象が見つかりません。このストレージには指定リソースの複製が存在しません。" : message);
	}
	
}


/// <reference path="../../../node.d.ts" />

export = AmbiguousIdentifierException;

import HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

/**
 * 対象が見つかりません。識別名から一意にリソースを特定できません。
 */
class AmbiguousIdentifierException extends HttpNotFoundException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.AmbiguousIdentifierException#defaultMessage
	 * @default "対象が見つかりません。識別名から一意にリソースを特定できません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "対象が見つかりません。識別名から一意にリソースを特定できません。";
	
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


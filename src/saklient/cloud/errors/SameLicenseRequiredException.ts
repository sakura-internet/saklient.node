/// <reference path="../../../node.d.ts" />

export = SameLicenseRequiredException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求された操作を行えません。再インストール時に指定できるソースは、同一のライセンスを必要とするアーカイブに限られます。
 */
class SameLicenseRequiredException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.SameLicenseRequiredException#defaultMessage
	 * @default "要求された操作を行えません。再インストール時に指定できるソースは、同一のライセンスを必要とするアーカイブに限られます。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。再インストール時に指定できるソースは、同一のライセンスを必要とするアーカイブに限られます。";
	
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


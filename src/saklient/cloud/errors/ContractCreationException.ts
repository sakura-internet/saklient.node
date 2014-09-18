/// <reference path="../../../node.d.ts" />

export = ContractCreationException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * 要求を受け付けできません。契約コードを発行することができません。メンテナンス情報、サポートサイトをご確認ください。
 */
class ContractCreationException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ContractCreationException#defaultMessage
	 * @default "要求を受け付けできません。契約コードを発行することができません。メンテナンス情報、サポートサイトをご確認ください。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。契約コードを発行することができません。メンテナンス情報、サポートサイトをご確認ください。";
	
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


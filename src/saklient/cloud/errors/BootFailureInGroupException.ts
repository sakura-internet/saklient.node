/// <reference path="../../../node.d.ts" />

export = BootFailureInGroupException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバ起動グループ指定に問題がある可能性があります。
 */
class BootFailureInGroupException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.BootFailureInGroupException#defaultMessage
	 * @default "サービスが利用できません。サーバ起動グループ指定に問題がある可能性があります。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバ起動グループ指定に問題がある可能性があります。";
	
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


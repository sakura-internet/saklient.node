/// <reference path="../../../node.d.ts" />

export = StorageOperationFailureException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。ストレージの操作に失敗しました。サーバが混雑している可能性があります。
 */
class StorageOperationFailureException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.StorageOperationFailureException#defaultMessage
	 * @default "サービスが利用できません。ストレージの操作に失敗しました。サーバが混雑している可能性があります。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。ストレージの操作に失敗しました。サーバが混雑している可能性があります。";
	
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


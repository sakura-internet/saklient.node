/// <reference path="../../../node.d.ts" />

export = BootFailureInGroupException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
 * サービスが利用できません。サーバ起動グループ指定に問題がある可能性があります。
 * 
 * @class BootFailureInGroupException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class BootFailureInGroupException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.BootFailureInGroupException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。サーバ起動グループ指定に問題がある可能性があります。";
	
}


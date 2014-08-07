'use strict';

/// <reference path="../../../node.d.ts" />

export = ContractCreationException;

import HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
 * 要求を受け付けできません。契約コードを発行することができません。メンテナンス情報、サポートサイトをご確認ください。
 * 
 * @class ContractCreationException
 * @constructor
 * @extends HttpServiceUnavailableException
 */
class ContractCreationException extends HttpServiceUnavailableException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ContractCreationException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。契約コードを発行することができません。メンテナンス情報、サポートサイトをご確認ください。";
	
}


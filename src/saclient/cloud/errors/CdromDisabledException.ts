'use strict';

/// <reference path="../../../node.d.ts" />

export = CdromDisabledException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。ISOイメージが無効化されています。排出後に再度お試しください。
 * 
 * @class CdromDisabledException
 * @constructor
 * @extends HttpConflictException
 */
class CdromDisabledException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.CdromDisabledException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。ISOイメージが無効化されています。排出後に再度お試しください。";
	
}


'use strict';

/// <reference path="../../../node.d.ts" />

export = SameLicenseRequiredException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。再インストール時に指定できるソースは、同一のライセンスを必要とするアーカイブに限られます。
 * 
 * @class SameLicenseRequiredException
 * @constructor
 * @extends HttpConflictException
 */
class SameLicenseRequiredException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.SameLicenseRequiredException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。再インストール時に指定できるソースは、同一のライセンスを必要とするアーカイブに限られます。";
	
}


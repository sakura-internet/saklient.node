/// <reference path="../../node.d.ts" />

export = HttpFailedDependencyException;

import HttpException = require('./HttpException');

'use strict';

/**
 * HTTPエラー。Failed Dependency.
 * 
 * @class HttpFailedDependencyException
 * @constructor
 * @extends HttpException
 */
class HttpFailedDependencyException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpFailedDependencyException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Failed Dependency.";
	
}


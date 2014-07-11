/// <reference path="../../../node.d.ts" />

export = HttpFailedDependencyException;

import Util = require('../Util');
import HttpException = require('./HttpException');

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
	 * @member saclient.cloud.errors.HttpFailedDependencyException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Failed Dependency.";
	
}


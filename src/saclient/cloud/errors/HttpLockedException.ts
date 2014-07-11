/// <reference path="../../../node.d.ts" />

export = HttpLockedException;

import Util = require('../Util');
import HttpException = require('./HttpException');

/**
 * HTTPエラー。Locked.
 * 
 * @class HttpLockedException
 * @constructor
 * @extends HttpException
 */
class HttpLockedException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HttpLockedException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Locked.";
	
}


/// <reference path="../../../node.d.ts" />

export = HttpUpgradeRequiredException;

import Util = require('../Util');
import HttpException = require('./HttpException');

/**
 * HTTPエラー。Upgrade Required.
 * 
 * @class HttpUpgradeRequiredException
 * @constructor
 * @extends HttpException
 */
class HttpUpgradeRequiredException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HttpUpgradeRequiredException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Upgrade Required.";
	
}


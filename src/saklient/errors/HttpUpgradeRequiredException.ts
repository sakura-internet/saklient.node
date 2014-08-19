/// <reference path="../../node.d.ts" />

export = HttpUpgradeRequiredException;

import HttpException = require('./HttpException');

'use strict';

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
	 * @member saklient.errors.HttpUpgradeRequiredException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "HTTPエラー。Upgrade Required.";
	
}


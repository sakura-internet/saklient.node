/// <reference path="../../../node.d.ts" />

export = ResourcePathNotFoundException;

import Util = require('../Util');
import HttpNotFoundException = require('./HttpNotFoundException');

/**
 * 対象が見つかりません。パスに誤りがあります。
 * 
 * @class ResourcePathNotFoundException
 * @constructor
 * @extends HttpNotFoundException
 */
class ResourcePathNotFoundException extends HttpNotFoundException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ResourcePathNotFoundException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "対象が見つかりません。パスに誤りがあります。";
	
}


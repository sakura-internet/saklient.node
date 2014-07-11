/// <reference path="../../../node.d.ts" />

export = HttpNotFoundException;

import Util = require('../Util');
import HttpException = require('./HttpException');

/**
 * 対象が見つかりません。対象は利用できない状態か、IDまたはパスに誤りがあります。
 * 
 * @class HttpNotFoundException
 * @constructor
 * @extends HttpException
 */
class HttpNotFoundException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.HttpNotFoundException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "対象が見つかりません。対象は利用できない状態か、IDまたはパスに誤りがあります。";
	
}


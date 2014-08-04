/// <reference path="../../../node.d.ts" />

export = LimitCountInZoneException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求を受け付けできません。ゾーン内リソース数上限により、リソースの割り当てに失敗しました。
 * 
 * @class LimitCountInZoneException
 * @constructor
 * @extends HttpConflictException
 */
class LimitCountInZoneException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.LimitCountInZoneException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。ゾーン内リソース数上限により、リソースの割り当てに失敗しました。";
	
}


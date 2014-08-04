/// <reference path="../../../node.d.ts" />

export = LimitCountInRouterException;

import Util = require('../../Util');
import HttpConflictException = require('./HttpConflictException');

/**
 * 要求を受け付けできません。ルータあたりのリソース数上限により、リソースの割り当てに失敗しました。
 * 
 * @class LimitCountInRouterException
 * @constructor
 * @extends HttpConflictException
 */
class LimitCountInRouterException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.LimitCountInRouterException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。ルータあたりのリソース数上限により、リソースの割り当てに失敗しました。";
	
}


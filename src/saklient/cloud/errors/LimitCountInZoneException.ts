/// <reference path="../../../node.d.ts" />

export = LimitCountInZoneException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求を受け付けできません。ゾーン内リソース数上限により、リソースの割り当てに失敗しました。
 */
class LimitCountInZoneException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.LimitCountInZoneException#defaultMessage
	 * @default "要求を受け付けできません。ゾーン内リソース数上限により、リソースの割り当てに失敗しました。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。ゾーン内リソース数上限により、リソースの割り当てに失敗しました。";
	
}


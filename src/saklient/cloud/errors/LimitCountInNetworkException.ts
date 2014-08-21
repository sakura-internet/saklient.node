/// <reference path="../../../node.d.ts" />

export = LimitCountInNetworkException;

import HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
 * 要求を受け付けできません。ネットワーク内リソース数上限により、リソースの割り当てに失敗しました。
 */
class LimitCountInNetworkException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.LimitCountInNetworkException#defaultMessage
	 * @default "要求を受け付けできません。ネットワーク内リソース数上限により、リソースの割り当てに失敗しました。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求を受け付けできません。ネットワーク内リソース数上限により、リソースの割り当てに失敗しました。";
	
}


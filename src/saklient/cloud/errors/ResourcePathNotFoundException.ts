/// <reference path="../../../node.d.ts" />

export = ResourcePathNotFoundException;

import HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

/**
 * 対象が見つかりません。パスに誤りがあります。
 */
class ResourcePathNotFoundException extends HttpNotFoundException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ResourcePathNotFoundException#defaultMessage
	 * @default "対象が見つかりません。パスに誤りがあります。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "対象が見つかりません。パスに誤りがあります。";
	
}


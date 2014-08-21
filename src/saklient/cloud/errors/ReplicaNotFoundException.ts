/// <reference path="../../../node.d.ts" />

export = ReplicaNotFoundException;

import HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

/**
 * 対象が見つかりません。このストレージには指定リソースの複製が存在しません。
 */
class ReplicaNotFoundException extends HttpNotFoundException {
	
	/**
	 * @static
	 * @member saklient.cloud.errors.ReplicaNotFoundException#defaultMessage
	 * @default "対象が見つかりません。このストレージには指定リソースの複製が存在しません。"
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "対象が見つかりません。このストレージには指定リソースの複製が存在しません。";
	
}


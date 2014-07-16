/// <reference path="../../../node.d.ts" />

export = ReplicaNotFoundException;

import Util = require('../Util');
import HttpNotFoundException = require('./HttpNotFoundException');

/**
 * 対象が見つかりません。このストレージには指定リソースの複製が存在しません。
 * 
 * @class ReplicaNotFoundException
 * @constructor
 * @extends HttpNotFoundException
 */
class ReplicaNotFoundException extends HttpNotFoundException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ReplicaNotFoundException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "対象が見つかりません。このストレージには指定リソースの複製が存在しません。";
	
}

/// <reference path="../../../node.d.ts" />

export = AmbiguousIdentifierException;

import Util = require('../../Util');
import HttpNotFoundException = require('../../errors/HttpNotFoundException');

/**
 * 対象が見つかりません。識別名から一意にリソースを特定できません。
 * 
 * @class AmbiguousIdentifierException
 * @constructor
 * @extends HttpNotFoundException
 */
class AmbiguousIdentifierException extends HttpNotFoundException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.AmbiguousIdentifierException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "対象が見つかりません。識別名から一意にリソースを特定できません。";
	
}


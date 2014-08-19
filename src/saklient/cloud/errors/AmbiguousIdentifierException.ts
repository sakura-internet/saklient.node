/// <reference path="../../../node.d.ts" />

export = AmbiguousIdentifierException;

import HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

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
	 * @member saklient.cloud.errors.AmbiguousIdentifierException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "対象が見つかりません。識別名から一意にリソースを特定できません。";
	
}


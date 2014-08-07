'use strict';

/// <reference path="../../../node.d.ts" />

export = ReplicaAlreadyExistsException;

import HttpConflictException = require('../../errors/HttpConflictException');

/**
 * 要求された操作を行えません。このストレージには指定リソースの複製が既に存在します。
 * 
 * @class ReplicaAlreadyExistsException
 * @constructor
 * @extends HttpConflictException
 */
class ReplicaAlreadyExistsException extends HttpConflictException {
	
	/**
	 * @static
	 * @member saclient.cloud.errors.ReplicaAlreadyExistsException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "要求された操作を行えません。このストレージには指定リソースの複製が既に存在します。";
	
}


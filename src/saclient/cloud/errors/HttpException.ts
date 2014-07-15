/// <reference path="../../../node.d.ts" />
/// <reference path="./Error.ts" />

export = HttpException;

import Error = require('./Error');

/**
 * @class HttpException
 * @constructor
 * @extends NativeException
 */
class HttpException extends Error {
	
	/**
	 * @member saclient.cloud.errors.HttpException#status
	 * @type number
	 * @public
	 */
	status : number;
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} message=""
	 * @param {string} name=null
	 */
	constructor(status:number, code:string=null, message:string="") {
		super(message);
		this.name = code;
		this.message = (code ? '['+code+'] ' : '') + message;
		this.status = status;
		this.stack = (<any>new Error()).stack;
	}
	
}


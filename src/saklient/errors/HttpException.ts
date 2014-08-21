/// <reference path="../../node.d.ts" />
/// <reference path="./Error.ts" />

export = HttpException;

import Error = require('./Error');

/**
 * @module saklient.errors.HttpException
 * @class HttpException
 * @constructor
 * @extends Error
 */
class HttpException extends Error {
	
	/**
	 * @member saklient.errors.HttpException#status
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


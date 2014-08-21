/// <reference path="../../node.d.ts" />
/// <reference path="./Error.ts" />

export = SaklientException;

import Error = require('./Error');

/**
 * @module saklient.errors.SaklientException
 * @class SaklientException
 * @constructor
 * @extends Error
 */
class SaklientException extends Error {
	
	/**
	 * @constructor
	 * @public
	 * @param {string} message=""
	 * @param {string} name=null
	 */
	constructor(code:string=null, message:string="") {
		super(message);
		this.name = code;
		this.message = (code ? '['+code+'] ' : '') + message;
		this.stack = (<any>new Error()).stack;
	}
	
}


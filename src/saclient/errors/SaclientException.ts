/// <reference path="../../node.d.ts" />
/// <reference path="./Error.ts" />

export = SaclientException;

import Error = require('./Error');

/**
 * @class SaclientException
 * @constructor
 * @extends NativeException
 */
class SaclientException extends Error {
	
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


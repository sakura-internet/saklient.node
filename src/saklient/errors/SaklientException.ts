/// <reference path="../../node.d.ts" />
/// <reference path="./Error.ts" />

export = SaklientException;

import Error = require('./Error');

/**
 * @class SaklientException
 * @constructor
 * @extends NativeException
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


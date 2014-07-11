/// <reference path="../../../node.d.ts" />

export = HttpException;

/**
 * @class HttpException
 * @constructor
 * @extends NativeException
 */
class HttpException implements Error {
	
	/**
	 * @member saclient.cloud.errors.HttpException#status
	 * @type number
	 * @public
	 */
	status : number;
	
	/**
	 * @member saclient.cloud.errors.HttpException#name
	 * @type string
	 * @public
	 */
	name : string;
	
	/**
	 * @member saclient.cloud.errors.HttpException#message
	 * @type string
	 * @public
	 */
	message : string;
	
	/**
	 * @member saclient.cloud.errors.HttpException#stack
	 * @type string
	 * @public
	 */
	stack : string;
	
	/**
	 * @constructor
	 * @public
	 * @param {number} status
	 * @param {string} message=""
	 * @param {string} name=null
	 */
	constructor(status:number, code:string=null, message:string="") {
		this.status = status;
		this.name = code;
		this.message = message;
		this.stack = (<any>new Error()).stack;
	}
	
}


/// <reference path="../../../node.d.ts" />

export = ServerActivitySample;

import Util = require('../../Util');

'use strict';

/**
 * @private
 * @module saklient.cloud.resources.ServerActivitySample
 * @class ServerActivitySample
 * @constructor
 */
class ServerActivitySample {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.ServerActivitySample#_at
	 * @type Date
	 * @protected
	 */
	_at : Date;
	
	/**
	 * @method get_at
	 * @private
	 * @return {Date}
	 */
	get_at() : Date {
		return this._at;
	}
	
	/**
	 * 記録日時
	 * 
	 * @property at
	 * @type Date
	 * @readOnly
	 * @public
	 */
	get at() : Date { return this.get_at(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.ServerActivitySample#_isAvailable
	 * @type boolean
	 * @protected
	 */
	_isAvailable : boolean;
	
	/**
	 * @method get_isAvailable
	 * @private
	 * @return {boolean}
	 */
	get_isAvailable() : boolean {
		return this._isAvailable;
	}
	
	/**
	 * 有効な値のとき真
	 * 
	 * @property isAvailable
	 * @type boolean
	 * @readOnly
	 * @public
	 */
	get isAvailable() : boolean { return this.get_isAvailable(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.ServerActivitySample#_cpuTime
	 * @type number
	 * @protected
	 */
	_cpuTime : number;
	
	/**
	 * @method get_cpuTime
	 * @private
	 * @return {number}
	 */
	get_cpuTime() : number {
		return this._cpuTime;
	}
	
	/**
	 * CPU時間
	 * 
	 * @property cpuTime
	 * @type number
	 * @readOnly
	 * @public
	 */
	get cpuTime() : number { return this.get_cpuTime(); }
	
	
	/**
	 * @constructor
	 * @public
	 * @param {string} atStr
	 * @param {any} data
	 */
	constructor(atStr:string, data:any) {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(atStr, "string");
		this._at = (<Date><any>(Util.str2date(atStr)));
		this._isAvailable = false;
		var v:any = data["CPU-TIME"];
		if (v != null) {
			this._isAvailable = true;
			this._cpuTime = (<number><any>(v));
		};
	}
	
}


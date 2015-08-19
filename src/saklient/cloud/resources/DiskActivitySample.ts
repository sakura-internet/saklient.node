/// <reference path="../../../node.d.ts" />

export = DiskActivitySample;

import Util = require('../../Util');

'use strict';

/**
 * @private
 * @module saklient.cloud.resources.DiskActivitySample
 * @class DiskActivitySample
 * @constructor
 */
class DiskActivitySample {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskActivitySample#_at
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
	 * @member saklient.cloud.resources.DiskActivitySample#_isAvailable
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
	 * @member saklient.cloud.resources.DiskActivitySample#_write
	 * @type number
	 * @protected
	 */
	_write : number;
	
	/**
	 * @method get_write
	 * @private
	 * @return {number}
	 */
	get_write() : number {
		return this._write;
	}
	
	/**
	 * ライト[BPS]
	 * 
	 * @property write
	 * @type number
	 * @readOnly
	 * @public
	 */
	get write() : number { return this.get_write(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskActivitySample#_read
	 * @type number
	 * @protected
	 */
	_read : number;
	
	/**
	 * @method get_read
	 * @private
	 * @return {number}
	 */
	get_read() : number {
		return this._read;
	}
	
	/**
	 * リード[BPS]
	 * 
	 * @property read
	 * @type number
	 * @readOnly
	 * @public
	 */
	get read() : number { return this.get_read(); }
	
	
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
		this._isAvailable = true;
		var v:any = null;
		v = data["Write"];
		if (v == null) {
			this._isAvailable = false;
		}
		else {
			this._write = (<number><any>(v));
		};
		v = data["Read"];
		if (v == null) {
			this._isAvailable = false;
		}
		else {
			this._read = (<number><any>(v));
		};
	}
	
}


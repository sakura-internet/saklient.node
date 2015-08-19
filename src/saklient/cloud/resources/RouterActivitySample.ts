/// <reference path="../../../node.d.ts" />

export = RouterActivitySample;

import Util = require('../../Util');

'use strict';

/**
 * @private
 * @module saklient.cloud.resources.RouterActivitySample
 * @class RouterActivitySample
 * @constructor
 */
class RouterActivitySample {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.RouterActivitySample#_at
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
	 * @member saklient.cloud.resources.RouterActivitySample#_isAvailable
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
	 * @member saklient.cloud.resources.RouterActivitySample#_outgoing
	 * @type number
	 * @protected
	 */
	_outgoing : number;
	
	/**
	 * @method get_outgoing
	 * @private
	 * @return {number}
	 */
	get_outgoing() : number {
		return this._outgoing;
	}
	
	/**
	 * 送信[BPS]
	 * 
	 * @property outgoing
	 * @type number
	 * @readOnly
	 * @public
	 */
	get outgoing() : number { return this.get_outgoing(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.RouterActivitySample#_incoming
	 * @type number
	 * @protected
	 */
	_incoming : number;
	
	/**
	 * @method get_incoming
	 * @private
	 * @return {number}
	 */
	get_incoming() : number {
		return this._incoming;
	}
	
	/**
	 * 受信[BPS]
	 * 
	 * @property incoming
	 * @type number
	 * @readOnly
	 * @public
	 */
	get incoming() : number { return this.get_incoming(); }
	
	
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
		v = data["Out"];
		if (v == null) {
			this._isAvailable = false;
		}
		else {
			this._outgoing = (<number><any>(v));
		};
		v = data["In"];
		if (v == null) {
			this._isAvailable = false;
		}
		else {
			this._incoming = (<number><any>(v));
		};
	}
	
}


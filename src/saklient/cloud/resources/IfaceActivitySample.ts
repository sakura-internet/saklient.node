/// <reference path="../../../node.d.ts" />

export = IfaceActivitySample;

import Util = require('../../Util');

'use strict';

/**
 * @private
 * @module saklient.cloud.resources.IfaceActivitySample
 * @class IfaceActivitySample
 * @constructor
 */
class IfaceActivitySample {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.IfaceActivitySample#_at
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
	 * @member saklient.cloud.resources.IfaceActivitySample#_isAvailable
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
	 * @member saklient.cloud.resources.IfaceActivitySample#_send
	 * @type number
	 * @protected
	 */
	_send : number;
	
	/**
	 * @method get_send
	 * @private
	 * @return {number}
	 */
	get_send() : number {
		return this._send;
	}
	
	/**
	 * 送信[byte/sec]
	 * 
	 * @property send
	 * @type number
	 * @readOnly
	 * @public
	 */
	get send() : number { return this.get_send(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.IfaceActivitySample#_receive
	 * @type number
	 * @protected
	 */
	_receive : number;
	
	/**
	 * @method get_receive
	 * @private
	 * @return {number}
	 */
	get_receive() : number {
		return this._receive;
	}
	
	/**
	 * 受信[byte/sec]
	 * 
	 * @property receive
	 * @type number
	 * @readOnly
	 * @public
	 */
	get receive() : number { return this.get_receive(); }
	
	
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
		v = data["Send"];
		if (v == null) {
			this._isAvailable = false;
		}
		else {
			this._send = (<number><any>(v));
		};
		v = data["Receive"];
		if (v == null) {
			this._isAvailable = false;
		}
		else {
			this._receive = (<number><any>(v));
		};
	}
	
}


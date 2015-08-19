/// <reference path="../../../node.d.ts" />

export = Ipv4Range;

import Util = require('../../Util');

'use strict';

/**
 * IPv4ネットワークのIPアドレス範囲。
 * 
 * @module saklient.cloud.resources.Ipv4Range
 * @class Ipv4Range
 * @constructor
 */
class Ipv4Range {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.Ipv4Range#_first
	 * @type string
	 * @protected
	 */
	_first : string;
	
	/**
	 * @method get_first
	 * @private
	 * @return {string}
	 */
	get_first() : string {
		return this._first;
	}
	
	/**
	 * 開始アドレス
	 * 
	 * @property first
	 * @type string
	 * @readOnly
	 * @public
	 */
	get first() : string { return this.get_first(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.Ipv4Range#_last
	 * @type string
	 * @protected
	 */
	_last : string;
	
	/**
	 * @method get_last
	 * @private
	 * @return {string}
	 */
	get_last() : string {
		return this._last;
	}
	
	/**
	 * 終了アドレス
	 * 
	 * @property last
	 * @type string
	 * @readOnly
	 * @public
	 */
	get last() : string { return this.get_last(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.Ipv4Range#_asArray
	 * @type string[]
	 * @protected
	 */
	_asArray : string[];
	
	/**
	 * @method get_asArray
	 * @private
	 * @return {string[]}
	 */
	get_asArray() : string[] {
		var ret:string[] = [];
		var i:number = Util.ip2long(this._first);
		var i1:number = Util.ip2long(this._last);
		while (i <= i1) {
			ret.push(Util.long2ip(i));
			i++;
		};
		return ret;
	}
	
	/**
	 * この範囲に属するIPv4アドレスの一覧を取得します。
	 * 
	 * @property asArray
	 * @type string[]
	 * @readOnly
	 * @public
	 */
	get asArray() : string[] { return this.get_asArray(); }
	
	
	/**
	 * @private
	 * @constructor
	 * @param {any} obj=null
	 */
	constructor(obj:any=null) {
		if (obj == null) {
			obj = {};
		};
		var first:any = Util.getByPathAny([obj], ["Min", "min"]);
		this._first = null;
		if (first != null) {
			this._first = (<string><any>(first));
		};
		if (this._first != null && this._first == "") {
			this._first = null;
		};
		var last:any = Util.getByPathAny([obj], ["Max", "max"]);
		this._last = null;
		if (last != null) {
			this._last = (<string><any>(last));
		};
		if (this._last != null && this._last == "") {
			this._last = null;
		};
	}
	
}


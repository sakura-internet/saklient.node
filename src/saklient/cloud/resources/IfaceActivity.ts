/// <reference path="../../../node.d.ts" />

export = IfaceActivity;

import Util = require('../../Util');
import Client = require('../Client');
import Activity = require('./Activity');
import IfaceActivitySample = require('./IfaceActivitySample');

'use strict';

/**
 * @module saklient.cloud.resources.IfaceActivity
 * @class IfaceActivity
 * @constructor
 * @extends Activity
 */
class IfaceActivity extends Activity {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.IfaceActivity#_samples
	 * @type IfaceActivitySample[]
	 * @protected
	 */
	_samples : IfaceActivitySample[];
	
	/**
	 * @method get_samples
	 * @protected
	 * @private
	 * @return {IfaceActivitySample[]}
	 */
	get_samples() : IfaceActivitySample[] {
		return this._samples;
	}
	
	/**
	 * サンプル列
	 * 
	 * @property samples
	 * @type IfaceActivitySample[]
	 * @readOnly
	 * @public
	 */
	get samples() : IfaceActivitySample[] { return this.get_samples(); }
	
	
	/**
	 * @private
	 * @method _apiPathPrefix
	 * @protected
	 * @return {string}
	 */
	_apiPathPrefix() : string {
		return "/interface";
	}
	
	/**
	 * @private
	 * @method _apiPathSuffix
	 * @protected
	 * @return {string}
	 */
	_apiPathSuffix() : string {
		return "/monitor";
	}
	
	/**
	 * @private
	 * @constructor
	 * @param {Client} client
	 */
	constructor(client:Client) {
		super(client);
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(client, "saklient.cloud.Client");
	}
	
	/**
	 * @private
	 * @method _addSample
	 * @protected
	 * @param {string} atStr
	 * @param {any} data
	 * @return {void}
	 */
	_addSample(atStr:string, data:any) : void {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(atStr, "string");
		this._samples.push(new IfaceActivitySample(atStr, data));
	}
	
	/**
	 * 現在の最新のアクティビティ情報を取得し、samplesに格納します。
	 *  
	 *  	 * @return this
	 * 
	 * @method fetch
	 * @chainable
	 * @public
	 * @param {Date} startDate=null
	 * @param {Date} endDate=null
	 * @return {IfaceActivity}
	 */
	fetch(startDate:Date=null, endDate:Date=null) : IfaceActivity {
		Util.validateType(startDate, "Date");
		Util.validateType(endDate, "Date");
		this._samples = [];
		return (<IfaceActivity><any>(this._fetch(startDate, endDate)));
	}
	
}


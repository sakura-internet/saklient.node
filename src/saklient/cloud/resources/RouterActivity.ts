/// <reference path="../../../node.d.ts" />

export = RouterActivity;

import Util = require('../../Util');
import Client = require('../Client');
import Activity = require('./Activity');
import RouterActivitySample = require('./RouterActivitySample');

'use strict';

/**
 * @module saklient.cloud.resources.RouterActivity
 * @class RouterActivity
 * @constructor
 * @extends Activity
 */
class RouterActivity extends Activity {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.RouterActivity#_samples
	 * @type RouterActivitySample[]
	 * @protected
	 */
	_samples : RouterActivitySample[];
	
	/**
	 * @method get_samples
	 * @protected
	 * @private
	 * @return {RouterActivitySample[]}
	 */
	get_samples() : RouterActivitySample[] {
		return this._samples;
	}
	
	/**
	 * サンプル列
	 * 
	 * @property samples
	 * @type RouterActivitySample[]
	 * @readOnly
	 * @public
	 */
	get samples() : RouterActivitySample[] { return this.get_samples(); }
	
	
	/**
	 * @private
	 * @method _apiPathPrefix
	 * @protected
	 * @return {string}
	 */
	_apiPathPrefix() : string {
		return "/internet";
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
		this._samples.push(new RouterActivitySample(atStr, data));
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
	 * @return {RouterActivity}
	 */
	fetch(startDate:Date=null, endDate:Date=null) : RouterActivity {
		Util.validateType(startDate, "Date");
		Util.validateType(endDate, "Date");
		this._samples = [];
		return (<RouterActivity><any>(this._fetch(startDate, endDate)));
	}
	
}


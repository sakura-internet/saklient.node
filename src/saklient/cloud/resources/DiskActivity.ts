/// <reference path="../../../node.d.ts" />

export = DiskActivity;

import Util = require('../../Util');
import Client = require('../Client');
import Activity = require('./Activity');
import DiskActivitySample = require('./DiskActivitySample');

'use strict';

/**
 * @module saklient.cloud.resources.DiskActivity
 * @class DiskActivity
 * @constructor
 * @extends Activity
 */
class DiskActivity extends Activity {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskActivity#_samples
	 * @type DiskActivitySample[]
	 * @protected
	 */
	_samples : DiskActivitySample[];
	
	/**
	 * @method get_samples
	 * @protected
	 * @private
	 * @return {DiskActivitySample[]}
	 */
	get_samples() : DiskActivitySample[] {
		return this._samples;
	}
	
	/**
	 * サンプル列
	 * 
	 * @property samples
	 * @type DiskActivitySample[]
	 * @readOnly
	 * @public
	 */
	get samples() : DiskActivitySample[] { return this.get_samples(); }
	
	
	/**
	 * @private
	 * @method _apiPathPrefix
	 * @protected
	 * @return {string}
	 */
	_apiPathPrefix() : string {
		return "/disk";
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
		this._samples.push(new DiskActivitySample(atStr, data));
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
	 * @return {DiskActivity}
	 */
	fetch(startDate:Date=null, endDate:Date=null) : DiskActivity {
		Util.validateType(startDate, "Date");
		Util.validateType(endDate, "Date");
		this._samples = [];
		return (<DiskActivity><any>(this._fetch(startDate, endDate)));
	}
	
}


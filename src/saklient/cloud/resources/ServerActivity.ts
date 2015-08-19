/// <reference path="../../../node.d.ts" />

export = ServerActivity;

import Util = require('../../Util');
import Client = require('../Client');
import Activity = require('./Activity');
import ServerActivitySample = require('./ServerActivitySample');

'use strict';

/**
 * @module saklient.cloud.resources.ServerActivity
 * @class ServerActivity
 * @constructor
 * @extends Activity
 */
class ServerActivity extends Activity {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.ServerActivity#_samples
	 * @type ServerActivitySample[]
	 * @protected
	 */
	_samples : ServerActivitySample[];
	
	/**
	 * @method get_samples
	 * @protected
	 * @private
	 * @return {ServerActivitySample[]}
	 */
	get_samples() : ServerActivitySample[] {
		return this._samples;
	}
	
	/**
	 * サンプル列
	 * 
	 * @property samples
	 * @type ServerActivitySample[]
	 * @readOnly
	 * @public
	 */
	get samples() : ServerActivitySample[] { return this.get_samples(); }
	
	
	/**
	 * @private
	 * @method _apiPathPrefix
	 * @protected
	 * @return {string}
	 */
	_apiPathPrefix() : string {
		return "/server";
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
		this._samples.push(new ServerActivitySample(atStr, data));
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
	 * @return {ServerActivity}
	 */
	fetch(startDate:Date=null, endDate:Date=null) : ServerActivity {
		Util.validateType(startDate, "Date");
		Util.validateType(endDate, "Date");
		this._samples = [];
		return (<ServerActivity><any>(this._fetch(startDate, endDate)));
	}
	
}


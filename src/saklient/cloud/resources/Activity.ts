/// <reference path="../../../node.d.ts" />

export = Activity;

import Util = require('../../Util');
import Client = require('../Client');

'use strict';

/**
 * @module saklient.cloud.resources.Activity
 * @class Activity
 * @constructor
 */
class Activity {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.Activity#_client
	 * @type Client
	 * @protected
	 */
	_client : Client;
	
	/**
	 * @private
	 * @member saklient.cloud.resources.Activity#_sourceId
	 * @type string
	 * @protected
	 */
	_sourceId : string;
	
	/**
	 * @private
	 * @method _apiPathPrefix
	 * @protected
	 * @return {string}
	 */
	_apiPathPrefix() : string {
		return null;
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
	 * @method _addSample
	 * @protected
	 * @param {string} atStr
	 * @param {any} data
	 * @return {void}
	 */
	_addSample(atStr:string, data:any) : void {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(atStr, "string");
	}
	
	/**
	 * @private
	 * @constructor
	 * @param {Client} client
	 */
	constructor(client:Client) {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(client, "saklient.cloud.Client");
		this._client = client;
	}
	
	/**
	 * @private
	 * @method setSourceId
	 * @param {string} id
	 * @return {void}
	 */
	setSourceId(id:string) : void {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		this._sourceId = id;
	}
	
	/**
	 * 現在の最新のアクティビティ情報を取得し、samplesに格納します。
	 *  
	 *  	 * @return this
	 * 
	 * @private
	 * @method _fetch
	 * @chainable
	 * @param {Date} startDate=null
	 * @param {Date} endDate=null
	 * @return {Activity}
	 */
	_fetch(startDate:Date=null, endDate:Date=null) : Activity {
		Util.validateType(startDate, "Date");
		Util.validateType(endDate, "Date");
		var query:any = {};
		if (startDate != null) {
			query["Start"] = Util.date2str(startDate);
		};
		if (endDate != null) {
			query["End"] = Util.date2str(endDate);
		};
		var path:string = this._apiPathPrefix() + "/" + Util.urlEncode(this._sourceId) + this._apiPathSuffix();
		var data:any = this._client.request("GET", path);
		if (data == null) {
			return null;
		};
		data = data["Data"];
		if (data == null) {
			return null;
		};
		var dates:string[] = Object.keys(data);
		dates = Util.sortArray(dates);
		for (var __it1:number=0; __it1<dates.length; __it1++) {
			var date = dates[__it1];
			this._addSample(date, data[date]);
		};
		return this;
	}
	
}


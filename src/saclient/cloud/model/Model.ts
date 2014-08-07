/// <reference path="../../../node.d.ts" />

export = Model;

import Util = require('../../Util');
import Client = require('../Client');
import Resource = require('../resource/Resource');
import TQueryParams = require('./TQueryParams');

'use strict';

/**
 * @ignore
 * @class Model
 * @constructor
 */
class Model {
	
	/**
	 * @private
	 * @member saclient.cloud.model.Model#_client
	 * @type Client
	 * @protected
	 */
	_client : Client;
	
	/**
	 * @method get_client
	 * @protected
	 * @return {Client}
	 */
	get_client() : Client {
		return this._client;
	}
	
	/**
	 * @property client
	 * @type Client
	 * @readOnly
	 * @public
	 */
	get client() : Client { return this.get_client(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.model.Model#_params
	 * @type TQueryParams
	 * @protected
	 */
	_params : TQueryParams;
	
	/**
	 * @method get_params
	 * @protected
	 * @return {TQueryParams}
	 */
	get_params() : TQueryParams {
		return this._params;
	}
	
	/**
	 * @property params
	 * @type TQueryParams
	 * @readOnly
	 * @public
	 */
	get params() : TQueryParams { return this.get_params(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.model.Model#_total
	 * @type number
	 * @protected
	 */
	_total : number;
	
	/**
	 * @method get_total
	 * @protected
	 * @return {number}
	 */
	get_total() : number {
		return this._total;
	}
	
	/**
	 * @property total
	 * @type number
	 * @readOnly
	 * @public
	 */
	get total() : number { return this.get_total(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.model.Model#_count
	 * @type number
	 * @protected
	 */
	_count : number;
	
	/**
	 * @method get_count
	 * @protected
	 * @return {number}
	 */
	get_count() : number {
		return this._count;
	}
	
	/**
	 * @property count
	 * @type number
	 * @readOnly
	 * @public
	 */
	get count() : number { return this.get_count(); }
	
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return null;
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return null;
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return null;
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return null;
	}
	
	/**
	 * @constructor
	 * @public
	 * @param {Client} client
	 */
	constructor(client:Client) {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(client, "saclient.cloud.Client");
		this._client = client;
		this._params = {};
		this._total = null;
		this._count = null;
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @private
	 * @method _offset
	 * @chainable
	 * @protected
	 * @param {number} offset オフセット
	 * @return {Model} this
	 */
	_offset(offset:number) : Model {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		this._params["Begin"] = offset;
		return (<Model><any>(this));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @private
	 * @method _limit
	 * @chainable
	 * @protected
	 * @param {number} count 上限レコード数
	 * @return {Model} this
	 */
	_limit(count:number) : Model {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		this._params["Count"] = count;
		return (<Model><any>(this));
	}
	
	/**
	 * APIのフィルタリング設定を直接指定します。
	 * 
	 * @private
	 * @method _filterBy
	 * @chainable
	 * @protected
	 * @param {any} value
	 * @param {string} key
	 * @param {boolean} multiple=false
	 * @return {Model}
	 */
	_filterBy(key:string, value:any, multiple:boolean=false) : Model {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		if (!("Filter" in this._params)) {
			this._params["Filter"] = {};
		};
		var filter:any = this._params["Filter"];
		if (multiple) {
			if (!(key in filter)) {
				filter[key] = [];
			};
			var values:any[] = filter[key];
			values.push(value);
		}
		else {
			filter[key] = value;
		};
		return (<Model><any>(this));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @private
	 * @method _reset
	 * @chainable
	 * @protected
	 * @return {Model} this
	 */
	_reset() : Model {
		this._params = {};
		this._total = 0;
		this._count = 0;
		return (<Model><any>(this));
	}
	
	/**
	 *  *
	 * 
	 * @private
	 * @method _create
	 * @protected
	 * @return {Resource}
	 */
	_create() : Resource {
		return Util.createClassInstance("saclient.cloud.resource." + this._className(), [this._client, null]);
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @private
	 * @method _getById
	 * @protected
	 * @param {string} id
	 * @return {Resource} リソースオブジェクト
	 */
	_getById(id:string) : Resource {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		var params = this._params;
		this._reset();
		var result:any = this._client.request("GET", this._apiPath() + "/" + Util.urlEncode(id), params);
		this._total = 1;
		this._count = 1;
		var record:any = result[this._rootKey()];
		return (<Resource><any>(Util.createClassInstance("saclient.cloud.resource." + this._className(), [this._client, record])));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @private
	 * @method _find
	 * @protected
	 * @return {Resource[]} リソースオブジェクトの配列
	 */
	_find() : Resource[] {
		var params = this._params;
		this._reset();
		var result:any = this._client.request("GET", this._apiPath(), params);
		this._total = (<number><any>(result["Total"]));
		this._count = (<number><any>(result["Count"]));
		var records:any[] = (<any[]><any>(result[this._rootKeyM()]));
		var data:Resource[] = [];
		for (var __it1:number=0; __it1<records.length; __it1++) {
			var record = records[__it1];
			var i = Util.createClassInstance("saclient.cloud.resource." + this._className(), [this._client, record]);
			data.push(i);
		};
		return (<Resource[]><any>(data));
	}
	
	/**
	 * リソースの検索リクエストを実行し、唯一のリソースを取得します。
	 * 
	 * @private
	 * @method _findOne
	 * @protected
	 * @return {Resource} リソースオブジェクト
	 */
	_findOne() : Resource {
		var params = this._params;
		this._reset();
		var result:any = this._client.request("GET", this._apiPath(), params);
		this._total = (<number><any>(result["Total"]));
		this._count = (<number><any>(result["Count"]));
		if (this._total == 0) {
			return null;
		};
		var records:any[] = (<any[]><any>(result[this._rootKeyM()]));
		return (<Resource><any>(Util.createClassInstance("saclient.cloud.resource." + this._className(), [this._client, records[0]])));
	}
	
}


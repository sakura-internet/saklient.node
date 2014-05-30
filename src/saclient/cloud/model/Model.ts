/// <reference path="../../../node.d.ts" />

export = Model;

import Util = require('../Util');
import Client = require('../Client');
import Resource = require('../resource/Resource');
import TQueryParams = require('./TQueryParams');

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
	 * @constructor
	 * @public
	 * @param {Client} client
	 */
	constructor(client:Client) {
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
		this._params.Begin = offset;
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
		this._params.Count = count;
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
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @private
	 * @method _get
	 * @protected
	 * @param {string} id
	 * @return {Resource} リソースオブジェクト
	 */
	_get(id:string) : Resource {
		var params = this._params;
		this._reset();
		var result:any = this._client.request("GET", this._apiPath() + "/" + Util.urlEncode(id), params);
		this._total = 1;
		this._count = 1;
		var record:any = result[this._rootKey()];
		return (<Resource><any>(Util.createClassInstance("saclient.cloud.resource." + this._rootKey(), [this._client, record])));
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
		records.forEach((record)=>{
			{
				var i = Util.createClassInstance("saclient.cloud.resource." + this._rootKey(), [this._client, record]);
				data.push(i);
			}
		});
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
		if (this._total == 0) return null;
		;
		var records:any[] = (<any[]><any>(result[this._rootKeyM()]));
		return (<Resource><any>(Util.createClassInstance("saclient.cloud.resource." + this._rootKey(), [this._client, records[0]])));
	}
	
	/**
	 * @private
	 * @method _filterBy
	 * @protected
	 * @param {any} value
	 * @param {string} key
	 * @param {boolean} multiple=false
	 * @return {void}
	 */
	_filterBy(key:string, value:any, multiple:boolean=false) : void {
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
	}
	
}


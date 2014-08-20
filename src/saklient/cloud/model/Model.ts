/// <reference path="../../../node.d.ts" />

export = Model;

import Util = require('../../Util');
import Client = require('../Client');
import Resource = require('../resource/Resource');
import TQueryParams = require('./TQueryParams');

'use strict';

/**
 * @private
 * @class Model
 * @constructor
 */
class Model {
	
	/**
	 * @private
	 * @member saklient.cloud.model.Model#_client
	 * @type Client
	 * @protected
	 */
	_client : Client;
	
	/**
	 * @method get_client
	 * @protected
	 * @private
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
	 * @member saklient.cloud.model.Model#_params
	 * @type TQueryParams
	 * @protected
	 */
	_params : TQueryParams;
	
	/**
	 * @method get_params
	 * @protected
	 * @private
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
	 * @member saklient.cloud.model.Model#_total
	 * @type number
	 * @protected
	 */
	_total : number;
	
	/**
	 * @method get_total
	 * @protected
	 * @private
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
	 * @member saklient.cloud.model.Model#_count
	 * @type number
	 * @protected
	 */
	_count : number;
	
	/**
	 * @method get_count
	 * @protected
	 * @private
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
		Util.validateType(client, "saklient.cloud.Client");
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
		return this;
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
		return this;
	}
	
	/**
	 * 次に取得するリストのソートカラムを指定します。
	 * 
	 * @private
	 * @method _sort
	 * @chainable
	 * @protected
	 * @param {string} column カラム名
	 * @param {boolean} reverse=false
	 * @return {Model} this
	 */
	_sort(column:string, reverse:boolean=false) : Model {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(column, "string");
		Util.validateType(reverse, "boolean");
		if (!("Sort" in this._params)) {
			this._params["Sort"] = [];
		};
		var sort:string[] = this._params["Sort"];
		var op:string = reverse ? "-" : "";
		sort.push(op + column);
		return this;
	}
	
	/**
	 * Web APIのフィルタリング設定を直接指定します。
	 * 
	 * @private
	 * @method _filterBy
	 * @chainable
	 * @protected
	 * @param {string} key キー
	 * @param {any} value 値
	 * @param {boolean} multiple=false valueに配列を与え、OR条件で完全一致検索する場合にtrueを指定します。通常、valueはスカラ値であいまい検索されます。
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
		return this;
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
		return this;
	}
	
	/**
	 * 新規リソース作成用のオブジェクトを用意します。
	 * 
	 * 返り値のオブジェクトにパラメータを設定し、save() を呼ぶことで実際のリソースが作成されます。
	 * 
	 * @private
	 * @method _create
	 * @protected
	 * @return {Resource} リソースオブジェクト
	 */
	_create() : Resource {
		return Util.createClassInstance("saklient.cloud.resource." + this._className(), [this._client, null]);
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
		return (<Resource><any>(Util.createClassInstance("saklient.cloud.resource." + this._className(), [this._client, result, true])));
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
			var i = Util.createClassInstance("saklient.cloud.resource." + this._className(), [this._client, record]);
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
		return (<Resource><any>(Util.createClassInstance("saklient.cloud.resource." + this._className(), [this._client, records[0]])));
	}
	
	/**
	 * 指定した文字列を名前に含むリソースに絞り込みます。
	 * 
	 * 大文字・小文字は区別されません。
	 * 半角スペースで区切られた複数の文字列は、それらをすべて含むことが条件とみなされます。
	 * 
	 * @private
	 * @method _withNameLike
	 * @chainable
	 * @protected
	 * @param {string} name
	 * @return {Model}
	 */
	_withNameLike(name:string) : Model {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		return this._filterBy("Name", name);
	}
	
	/**
	 * 指定したタグを持つリソースに絞り込みます。
	 * 
	 * 複数のタグを指定する場合は withTags() を利用してください。
	 * 
	 * @private
	 * @method _withTag
	 * @chainable
	 * @protected
	 * @param {string} tag
	 * @return {Model}
	 */
	_withTag(tag:string) : Model {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tag, "string");
		return this._filterBy("Tags.Name", tag, true);
	}
	
	/**
	 * 指定したすべてのタグを持つリソースに絞り込みます。
	 * 
	 * @private
	 * @method _withTags
	 * @chainable
	 * @protected
	 * @param {string[]} tags
	 * @return {Model}
	 */
	_withTags(tags:string[]) : Model {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tags, "Array");
		return this._filterBy("Tags.Name", tags, true);
	}
	
	/**
	 * 名前でソートします。
	 * 
	 * @private
	 * @method _sortByName
	 * @chainable
	 * @protected
	 * @param {boolean} reverse=false
	 * @return {Model}
	 */
	_sortByName(reverse:boolean=false) : Model {
		Util.validateType(reverse, "boolean");
		return this._sort("Name", reverse);
	}
	
}


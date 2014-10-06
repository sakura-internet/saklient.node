/// <reference path="../../../node.d.ts" />

export = Model;

import Util = require('../../Util');
import Client = require('../Client');
import Resource = require('../resources/Resource');
import QueryParams = require('./QueryParams');
import SaklientException = require('../../errors/SaklientException');

'use strict';

/**
 * @private
 * @module saklient.cloud.models.Model
 * @class Model
 * @constructor
 */
class Model {
	
	/**
	 * @private
	 * @member saklient.cloud.models.Model#_client
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
	 * @member saklient.cloud.models.Model#_query
	 * @type QueryParams
	 * @protected
	 */
	_query : QueryParams;
	
	/**
	 * @method get_query
	 * @protected
	 * @private
	 * @return {QueryParams}
	 */
	get_query() : QueryParams {
		return this._query;
	}
	
	/**
	 * @property query
	 * @type QueryParams
	 * @readOnly
	 * @public
	 */
	get query() : QueryParams { return this.get_query(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.models.Model#_total
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
	 * @member saklient.cloud.models.Model#_count
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
		this._reset();
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
		this._query.begin = offset;
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
		this._query.count = count;
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
		var op:string = reverse ? "-" : "";
		this._query.sort.push(op + column);
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
		var filter:any = this._query.filter;
		if (multiple) {
			if (!(key in filter)) {
				filter[key] = [];
			};
			var values:any[] = (<any[]><any>(filter[key]));
			values.push(value);
		}
		else {
			if ((key in filter)) {
				throw new SaklientException("filter_duplicated", "The same filter key can be specified only once (by calling the same method 'withFooBar')");
			};
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
		this._query = new QueryParams();
		this._total = 0;
		this._count = 0;
		return this;
	}
	
	/**
	 * @private
	 * @method _createResourceWith
	 * @protected
	 * @param {any} obj
	 * @param {boolean} wrapped=false
	 * @return {Resource}
	 */
	_createResourceWith(obj:any, wrapped:boolean=false) : Resource {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(wrapped, "boolean");
		return Resource.createWith(this._className(), this._client, obj, wrapped);
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
		return this._createResourceWith(null);
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
		var query:any = this._query.build();
		this._reset();
		var result:any = this._client.request("GET", this._apiPath() + "/" + Util.urlEncode(id), query);
		this._total = 1;
		this._count = 1;
		return this._createResourceWith(result, true);
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
		var query:any = this._query.build();
		this._reset();
		var result:any = this._client.request("GET", this._apiPath(), query);
		this._total = (<number><any>(result["Total"]));
		this._count = (<number><any>(result["Count"]));
		var data:Resource[] = [];
		var records:any[] = (<any[]><any>(result[this._rootKeyM()]));
		for (var __it1:number=0; __it1<records.length; __it1++) {
			var record = records[__it1];
			data.push(this._createResourceWith(record));
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
		var query:any = this._query.build();
		this._reset();
		var result:any = this._client.request("GET", this._apiPath(), query);
		this._total = (<number><any>(result["Total"]));
		this._count = (<number><any>(result["Count"]));
		if (this._total == 0) {
			return null;
		};
		var records:any[] = (<any[]><any>(result[this._rootKeyM()]));
		return this._createResourceWith(records[0]);
	}
	
	/**
	 * 指定した文字列を名前に含むリソースに絞り込みます。
	 * 
	 * 大文字・小文字は区別されません。
	 * 半角スペースで区切られた複数の文字列は、それらをすべて含むことが条件とみなされます。
	 * 
	 * @private
	 * @todo Implement test case
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
	 * @todo Implement test case
	 * @method _withTag
	 * @chainable
	 * @protected
	 * @param {string} tag
	 * @return {Model}
	 */
	_withTag(tag:string) : Model {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tag, "string");
		return this._filterBy("Tags.Name", [tag]);
	}
	
	/**
	 * 指定したすべてのタグを持つリソースに絞り込みます。
	 * 
	 * @private
	 * @todo Implement test case
	 * @method _withTags
	 * @chainable
	 * @protected
	 * @param {string[]} tags
	 * @return {Model}
	 */
	_withTags(tags:string[]) : Model {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tags, "Array");
		return this._filterBy("Tags.Name", [tags]);
	}
	
	/**
	 * 指定したDNFに合致するタグを持つリソースに絞り込みます。
	 * 
	 * @private
	 * @todo Implement test case
	 * @method _withTagDnf
	 * @chainable
	 * @protected
	 * @param {string[][]} dnf
	 * @return {Model}
	 */
	_withTagDnf(dnf:string[][]) : Model {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(dnf, "Array");
		return this._filterBy("Tags.Name", dnf);
	}
	
	/**
	 * 名前でソートします。
	 * 
	 * @private
	 * @todo Implement test case
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


/// <reference path="../../../node.d.ts" />

export = Model_Region;

import Util = require('../../Util');
import Client = require('../Client');
import Model = require('./Model');
import Resource = require('../resources/Resource');
import Region = require('../resources/Region');

'use strict';

/**
 * リージョンを検索するための機能を備えたクラス。
 * 
 * @module saklient.cloud.models.Model_Region
 * @class Model_Region
 * @constructor
 * @extends Model
 */
class Model_Region extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/region";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Region";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Regions";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "Region";
	}
	
	/**
	 * @private
	 * @method _createResourceImpl
	 * @protected
	 * @param {any} obj
	 * @param {boolean} wrapped=false
	 * @return {Resource}
	 */
	_createResourceImpl(obj:any, wrapped:boolean=false) : Resource {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(wrapped, "boolean");
		return new Region(this._client, obj, wrapped);
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_Region} this
	 */
	offset(offset:number) : Model_Region {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		return (<Model_Region><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_Region} this
	 */
	limit(count:number) : Model_Region {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_Region><any>(this._limit(count)));
	}
	
	/**
	 * Web APIのフィルタリング設定を直接指定します。
	 * 
	 * @method filterBy
	 * @chainable
	 * @public
	 * @param {string} key キー
	 * @param {any} value 値
	 * @param {boolean} multiple=false valueに配列を与え、OR条件で完全一致検索する場合にtrueを指定します。通常、valueはスカラ値であいまい検索されます。
	 * @return {Model_Region}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Region {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		return (<Model_Region><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_Region} this
	 */
	reset() : Model_Region {
		return (<Model_Region><any>(this._reset()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Region} リソースオブジェクト
	 */
	getById(id:string) : Region {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		return (<Region><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {Region[]} リソースオブジェクトの配列
	 */
	find() : Region[] {
		return Util.castArray(this._find(), (<Region><any>(null)));
	}
	
	/**
	 * 指定した文字列を名前に含むリソースに絞り込みます。
	 * 
	 * 大文字・小文字は区別されません。
	 * 半角スペースで区切られた複数の文字列は、それらをすべて含むことが条件とみなされます。
	 * 
	 * @todo Implement test case
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Region}
	 */
	withNameLike(name:string) : Model_Region {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		return (<Model_Region><any>(this._withNameLike(name)));
	}
	
	/**
	 * 名前でソートします。
	 * 
	 * @todo Implement test case
	 * @method sortByName
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_Region}
	 */
	sortByName(reverse:boolean=false) : Model_Region {
		Util.validateType(reverse, "boolean");
		return (<Model_Region><any>(this._sortByName(reverse)));
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
	
}


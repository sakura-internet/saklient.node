/// <reference path="../../../node.d.ts" />

export = Model_Router;

import Util = require('../../Util');
import Model = require('./Model');
import Router = require('../resource/Router');

'use strict';

/**
 * ルータを検索するための機能を備えたクラス。
 * 
 * @class Model_Router
 * @constructor
 * @extends Model
 */
class Model_Router extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/internet";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Internet";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Internet";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "Router";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_Router} this
	 */
	offset(offset:number) : Model_Router {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		return (<Model_Router><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_Router} this
	 */
	limit(count:number) : Model_Router {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_Router><any>(this._limit(count)));
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
	 * @return {Model_Router}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Router {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		return (<Model_Router><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_Router} this
	 */
	reset() : Model_Router {
		return (<Model_Router><any>(this._reset()));
	}
	
	/**
	 * 新規リソース作成用のオブジェクトを用意します。
	 * 
	 * 返り値のオブジェクトにパラメータを設定し、save() を呼ぶことで実際のリソースが作成されます。
	 * 
	 * @method create
	 * @public
	 * @return {Router} リソースオブジェクト
	 */
	create() : Router {
		return (<Router><any>(this._create()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Router} リソースオブジェクト
	 */
	getById(id:string) : Router {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		return (<Router><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {Router[]} リソースオブジェクトの配列
	 */
	find() : Router[] {
		return Util.castArray(this._find(), (<Router><any>(null)));
	}
	
	/**
	 * 指定した文字列を名前に含むリソースに絞り込みます。
	 * 
	 * 大文字・小文字は区別されません。
	 * 半角スペースで区切られた複数の文字列は、それらをすべて含むことが条件とみなされます。
	 * 
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Router}
	 */
	withNameLike(name:string) : Model_Router {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		return (<Model_Router><any>(this._withNameLike(name)));
	}
	
	/**
	 * 名前でソートします。
	 * 
	 * @method sortByName
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_Router}
	 */
	sortByName(reverse:boolean=false) : Model_Router {
		Util.validateType(reverse, "boolean");
		return (<Model_Router><any>(this._sortByName(reverse)));
	}
	
	/**
	 * 指定した帯域幅のルータに絞り込みます。
	 * 
	 * @method withBandWidthMbps
	 * @chainable
	 * @public
	 * @param {number} mbps
	 * @return {Model_Router}
	 */
	withBandWidthMbps(mbps:number) : Model_Router {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(mbps, "number");
		this._filterBy("BandWidthMbps", mbps);
		return this;
	}
	
}


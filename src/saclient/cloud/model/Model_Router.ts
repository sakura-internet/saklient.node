/// <reference path="../../../node.d.ts" />

export = Model_Router;

import Util = require('../../Util');
import Model = require('./Model');
import Router = require('../resource/Router');

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
		return (<Model_Router><any>(this._limit(count)));
	}
	
	/**
	 * APIのフィルタリング設定を直接指定します。
	 * 
	 * @method filterBy
	 * @chainable
	 * @public
	 * @param {any} value
	 * @param {string} key
	 * @param {boolean} multiple=false
	 * @return {Model_Router}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Router {
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
	 * *
	 * 
	 * @method create
	 * @public
	 * @return {Router}
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
	 * 指定した文字列を名前に含むルータに絞り込みます。
	 * 
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Router}
	 */
	withNameLike(name:string) : Model_Router {
		this._filterBy("Name", name);
		return this;
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
		this._filterBy("BandWidthMbps", mbps);
		return this;
	}
	
}


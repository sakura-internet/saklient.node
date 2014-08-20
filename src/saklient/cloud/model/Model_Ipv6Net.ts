/// <reference path="../../../node.d.ts" />

export = Model_Ipv6Net;

import Util = require('../../Util');
import Model = require('./Model');
import Ipv6Net = require('../resource/Ipv6Net');

'use strict';

/**
 * IPv6ネットワークを検索するための機能を備えたクラス。
 * 
 * @class Model_Ipv6Net
 * @constructor
 * @extends Model
 */
class Model_Ipv6Net extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/ipv6net";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "IPv6Net";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "IPv6Nets";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "IPv6Net";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_Ipv6Net} this
	 */
	offset(offset:number) : Model_Ipv6Net {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		return (<Model_Ipv6Net><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_Ipv6Net} this
	 */
	limit(count:number) : Model_Ipv6Net {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_Ipv6Net><any>(this._limit(count)));
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
	 * @return {Model_Ipv6Net}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Ipv6Net {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		return (<Model_Ipv6Net><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_Ipv6Net} this
	 */
	reset() : Model_Ipv6Net {
		return (<Model_Ipv6Net><any>(this._reset()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Ipv6Net} リソースオブジェクト
	 */
	getById(id:string) : Ipv6Net {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		return (<Ipv6Net><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {Ipv6Net[]} リソースオブジェクトの配列
	 */
	find() : Ipv6Net[] {
		return Util.castArray(this._find(), (<Ipv6Net><any>(null)));
	}
	
}


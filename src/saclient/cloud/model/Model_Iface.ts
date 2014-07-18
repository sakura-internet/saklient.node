/// <reference path="../../../node.d.ts" />

export = Model_Iface;

import Util = require('../Util');
import Model = require('./Model');
import Iface = require('../resource/Iface');

/**
 * インタフェースを検索するための機能を備えたクラス。
 * 
 * @class Model_Iface
 * @constructor
 * @extends Model
 */
class Model_Iface extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/interface";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Interface";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Interfaces";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "Iface";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_Iface} this
	 */
	offset(offset:number) : Model_Iface {
		return (<Model_Iface><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_Iface} this
	 */
	limit(count:number) : Model_Iface {
		return (<Model_Iface><any>(this._limit(count)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_Iface} this
	 */
	reset() : Model_Iface {
		return (<Model_Iface><any>(this._reset()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Iface} リソースオブジェクト
	 */
	getById(id:string) : Iface {
		return (<Iface><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {Iface[]} リソースオブジェクトの配列
	 */
	find() : Iface[] {
		return Util.castArray(this._find(), (<Iface><any>(null)));
	}
	
}


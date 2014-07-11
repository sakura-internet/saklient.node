/// <reference path="../../../node.d.ts" />

export = Model_ServerPlan;

import Util = require('../Util');
import Model = require('./Model');
import ServerPlan = require('../resource/ServerPlan');

/**
 * サーバのプランを検索するための機能を備えたクラス。
 * 
 * @class Model_ServerPlan
 * @constructor
 * @extends Model
 */
class Model_ServerPlan extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/product/server";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "ServerPlan";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "ServerPlans";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_ServerPlan} this
	 */
	offset(offset:number) : Model_ServerPlan {
		return (<Model_ServerPlan><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_ServerPlan} this
	 */
	limit(count:number) : Model_ServerPlan {
		return (<Model_ServerPlan><any>(this._limit(count)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_ServerPlan} this
	 */
	reset() : Model_ServerPlan {
		return (<Model_ServerPlan><any>(this._reset()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {ServerPlan} リソースオブジェクト
	 */
	getById(id:string) : ServerPlan {
		return (<ServerPlan><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {ServerPlan[]} リソースオブジェクトの配列
	 */
	find() : ServerPlan[] {
		return Util.castArray(this._find(), (<ServerPlan><any>(null)));
	}
	
	/**
	 * 指定したスペックのプランを取得します。
	 * 
	 * @method getBySpec
	 * @public
	 * @param {number} cores
	 * @param {number} memoryGib
	 * @return {ServerPlan}
	 */
	getBySpec(cores:number, memoryGib:number) : ServerPlan {
		this._filterBy("CPU", cores, true);
		this._filterBy("MemoryMB", memoryGib * 1024, true);
		return (<ServerPlan><any>(this._findOne()));
	}
	
}


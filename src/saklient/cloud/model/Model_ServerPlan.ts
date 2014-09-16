/// <reference path="../../../node.d.ts" />

export = Model_ServerPlan;

import Util = require('../../Util');
import Model = require('./Model');
import ServerPlan = require('../resource/ServerPlan');

'use strict';

/**
 * サーバプランを検索するための機能を備えたクラス。
 * 
 * @module saklient.cloud.model.Model_ServerPlan
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
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "ServerPlan";
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_ServerPlan><any>(this._limit(count)));
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
	 * @return {Model_ServerPlan}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_ServerPlan {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		return (<Model_ServerPlan><any>(this._filterBy(key, value, multiple)));
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
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
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(cores, "number");
		Util.validateType(memoryGib, "number");
		this._filterBy("CPU", [cores]);
		this._filterBy("MemoryMB", [memoryGib * 1024]);
		return (<ServerPlan><any>(this._findOne()));
	}
	
}


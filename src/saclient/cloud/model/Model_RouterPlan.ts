/// <reference path="../../../node.d.ts" />

export = Model_RouterPlan;

import Util = require('../../Util');
import Model = require('./Model');
import RouterPlan = require('../resource/RouterPlan');

'use strict';

/**
 * ルータのプランを検索するための機能を備えたクラス。
 * 
 * @class Model_RouterPlan
 * @constructor
 * @extends Model
 */
class Model_RouterPlan extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/product/internet";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "InternetPlan";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "InternetPlans";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "RouterPlan";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_RouterPlan} this
	 */
	offset(offset:number) : Model_RouterPlan {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		return (<Model_RouterPlan><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_RouterPlan} this
	 */
	limit(count:number) : Model_RouterPlan {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_RouterPlan><any>(this._limit(count)));
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
	 * @return {Model_RouterPlan}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_RouterPlan {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		return (<Model_RouterPlan><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_RouterPlan} this
	 */
	reset() : Model_RouterPlan {
		return (<Model_RouterPlan><any>(this._reset()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {RouterPlan} リソースオブジェクト
	 */
	getById(id:string) : RouterPlan {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		return (<RouterPlan><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {RouterPlan[]} リソースオブジェクトの配列
	 */
	find() : RouterPlan[] {
		return Util.castArray(this._find(), (<RouterPlan><any>(null)));
	}
	
}


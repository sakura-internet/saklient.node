/// <reference path="../../../node.d.ts" />

export = Model_InternetPlan;

import Util = require('../Util');
import Model = require('./Model');
import InternetPlan = require('../resource/InternetPlan');

/**
 * ルータのプランを検索するための機能を備えたクラス。
 * 
 * @class Model_InternetPlan
 * @constructor
 * @extends Model
 */
class Model_InternetPlan extends Model {
	
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
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_InternetPlan} this
	 */
	offset(offset:number) : Model_InternetPlan {
		return (<Model_InternetPlan><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_InternetPlan} this
	 */
	limit(count:number) : Model_InternetPlan {
		return (<Model_InternetPlan><any>(this._limit(count)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_InternetPlan} this
	 */
	reset() : Model_InternetPlan {
		return (<Model_InternetPlan><any>(this._reset()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {InternetPlan} リソースオブジェクト
	 */
	getById(id:string) : InternetPlan {
		return (<InternetPlan><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {InternetPlan[]} リソースオブジェクトの配列
	 */
	find() : InternetPlan[] {
		return Util.castArray(this._find(), (<InternetPlan><any>(null)));
	}
	
}


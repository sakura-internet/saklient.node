/// <reference path="../../../node.d.ts" />

export = Model_Appliance;

import Util = require('../Util');
import Model = require('./Model');
import Appliance = require('../resource/Appliance');

/**
 * アプライアンスを検索するための機能を備えたクラス。
 * 
 * @class Model_Appliance
 * @constructor
 * @extends Model
 */
class Model_Appliance extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/appliance";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Appliance";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Appliances";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "Appliance";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_Appliance} this
	 */
	offset(offset:number) : Model_Appliance {
		return (<Model_Appliance><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_Appliance} this
	 */
	limit(count:number) : Model_Appliance {
		return (<Model_Appliance><any>(this._limit(count)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_Appliance} this
	 */
	reset() : Model_Appliance {
		return (<Model_Appliance><any>(this._reset()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Appliance} リソースオブジェクト
	 */
	getById(id:string) : Appliance {
		return (<Appliance><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {Appliance[]} リソースオブジェクトの配列
	 */
	find() : Appliance[] {
		return Util.castArray(this._find(), (<Appliance><any>(null)));
	}
	
	/**
	 * 指定した文字列を名前に含むアプライアンスに絞り込みます。
	 * 
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Appliance}
	 */
	withNameLike(name:string) : Model_Appliance {
		this._filterBy("Name", name);
		return this;
	}
	
	/**
	 * 指定したタグを持つアプライアンスに絞り込みます。
	 * 
	 * @method withTag
	 * @chainable
	 * @public
	 * @param {string} tag
	 * @return {Model_Appliance}
	 */
	withTag(tag:string) : Model_Appliance {
		this._filterBy("Tags.Name", tag, true);
		return this;
	}
	
}


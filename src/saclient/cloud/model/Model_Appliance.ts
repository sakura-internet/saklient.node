/// <reference path="../../../node.d.ts" />

export = Model_Appliance;

import Util = require('../../Util');
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
		Util.validateArgCount(arguments.length, 0);
		return "/appliance";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		Util.validateArgCount(arguments.length, 0);
		return "Appliance";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		Util.validateArgCount(arguments.length, 0);
		return "Appliances";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		Util.validateArgCount(arguments.length, 0);
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_Appliance><any>(this._limit(count)));
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
	 * @return {Model_Appliance}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Appliance {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(value, "any");
		Util.validateType(multiple, "boolean");
		return (<Model_Appliance><any>(this._filterBy(key, value, multiple)));
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
		Util.validateArgCount(arguments.length, 0);
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
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
		Util.validateArgCount(arguments.length, 0);
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tag, "string");
		this._filterBy("Tags.Name", tag, true);
		return this;
	}
	
	/**
	 * 指定したタグを持つアプライアンスに絞り込みます。
	 * 
	 * @method withTags
	 * @chainable
	 * @public
	 * @param {string[]} tags
	 * @return {Model_Appliance}
	 */
	withTags(tags:string[]) : Model_Appliance {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tags, "Array");
		this._filterBy("Tags.Name", tags, true);
		return this;
	}
	
}


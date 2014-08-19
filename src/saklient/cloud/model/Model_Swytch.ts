/// <reference path="../../../node.d.ts" />

export = Model_Swytch;

import Util = require('../../Util');
import Model = require('./Model');
import Swytch = require('../resource/Swytch');

'use strict';

/**
 * スイッチを検索・作成するための機能を備えたクラス。
 * 
 * @class Model_Swytch
 * @constructor
 * @extends Model
 */
class Model_Swytch extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/switch";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Switch";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Switches";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "Swytch";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_Swytch} this
	 */
	offset(offset:number) : Model_Swytch {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		return (<Model_Swytch><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_Swytch} this
	 */
	limit(count:number) : Model_Swytch {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_Swytch><any>(this._limit(count)));
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
	 * @return {Model_Swytch}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Swytch {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		return (<Model_Swytch><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_Swytch} this
	 */
	reset() : Model_Swytch {
		return (<Model_Swytch><any>(this._reset()));
	}
	
	/**
	 * 新規リソース作成用のオブジェクトを用意します。
	 * 
	 * 返り値のオブジェクトにパラメータを設定し、save() を呼ぶことで実際のリソースが作成されます。
	 * 
	 * @method create
	 * @public
	 * @return {Swytch} リソースオブジェクト
	 */
	create() : Swytch {
		return (<Swytch><any>(this._create()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Swytch} リソースオブジェクト
	 */
	getById(id:string) : Swytch {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		return (<Swytch><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {Swytch[]} リソースオブジェクトの配列
	 */
	find() : Swytch[] {
		return Util.castArray(this._find(), (<Swytch><any>(null)));
	}
	
	/**
	 * 指定した文字列を名前に含むリソースに絞り込みます。
	 * 大文字・小文字は区別されません。
	 * 半角スペースで区切られた複数の文字列は、それらをすべて含むことが条件とみなされます。
	 * 
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Swytch}
	 */
	withNameLike(name:string) : Model_Swytch {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		return (<Model_Swytch><any>(this._withNameLike(name)));
	}
	
	/**
	 * 名前でソートします。
	 * 
	 * @method sortByName
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_Swytch}
	 */
	sortByName(reverse:boolean=false) : Model_Swytch {
		Util.validateType(reverse, "boolean");
		return (<Model_Swytch><any>(this._sortByName(reverse)));
	}
	
}


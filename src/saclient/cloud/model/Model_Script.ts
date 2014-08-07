/// <reference path="../../../node.d.ts" />

export = Model_Script;

import Util = require('../../Util');
import Model = require('./Model');
import Script = require('../resource/Script');
import EScope = require('../enums/EScope');

'use strict';

/**
 * スクリプトを検索するための機能を備えたクラス。
 * 
 * @class Model_Script
 * @constructor
 * @extends Model
 */
class Model_Script extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/note";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Note";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Notes";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "Script";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_Script} this
	 */
	offset(offset:number) : Model_Script {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		return (<Model_Script><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_Script} this
	 */
	limit(count:number) : Model_Script {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_Script><any>(this._limit(count)));
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
	 * @return {Model_Script}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Script {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		return (<Model_Script><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_Script} this
	 */
	reset() : Model_Script {
		return (<Model_Script><any>(this._reset()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Script} リソースオブジェクト
	 */
	getById(id:string) : Script {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		return (<Script><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {Script[]} リソースオブジェクトの配列
	 */
	find() : Script[] {
		return Util.castArray(this._find(), (<Script><any>(null)));
	}
	
	/**
	 * 指定した文字列を名前に含むスクリプトに絞り込みます。
	 * 
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Script}
	 */
	withNameLike(name:string) : Model_Script {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		this._filterBy("Name", name);
		return this;
	}
	
	/**
	 * 指定したタグを持つスクリプトに絞り込みます。
	 * 
	 * @method withTag
	 * @chainable
	 * @public
	 * @param {string} tag
	 * @return {Model_Script}
	 */
	withTag(tag:string) : Model_Script {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tag, "string");
		this._filterBy("Tags.Name", tag, true);
		return this;
	}
	
	/**
	 * 指定したタグを持つスクリプトに絞り込みます。
	 * 
	 * @method withTags
	 * @chainable
	 * @public
	 * @param {string[]} tags
	 * @return {Model_Script}
	 */
	withTags(tags:string[]) : Model_Script {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tags, "Array");
		this._filterBy("Tags.Name", tags, true);
		return this;
	}
	
	/**
	 * パブリックスクリプトに絞り込みます。
	 * 
	 * @method withSharedScope
	 * @chainable
	 * @public
	 * @return {Model_Script}
	 */
	withSharedScope() : Model_Script {
		this._filterBy("Scope", EScope.shared);
		return this;
	}
	
	/**
	 * プライベートスクリプトに絞り込みます。
	 * 
	 * @method withUserScope
	 * @chainable
	 * @public
	 * @return {Model_Script}
	 */
	withUserScope() : Model_Script {
		this._filterBy("Scope", EScope.user);
		return this;
	}
	
}


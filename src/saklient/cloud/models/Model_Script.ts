/// <reference path="../../../node.d.ts" />

export = Model_Script;

import Util = require('../../Util');
import Client = require('../Client');
import Model = require('./Model');
import Resource = require('../resources/Resource');
import Script = require('../resources/Script');
import EScope = require('../enums/EScope');

'use strict';

/**
 * スクリプトを検索・作成するための機能を備えたクラス。
 * 
 * @module saklient.cloud.models.Model_Script
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
	 * @private
	 * @method _createResourceImpl
	 * @protected
	 * @param {any} obj
	 * @param {boolean} wrapped=false
	 * @return {Resource}
	 */
	_createResourceImpl(obj:any, wrapped:boolean=false) : Resource {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(wrapped, "boolean");
		return new Script(this._client, obj, wrapped);
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
	 * Web APIのフィルタリング設定を直接指定します。
	 * 
	 * @method filterBy
	 * @chainable
	 * @public
	 * @param {string} key キー
	 * @param {any} value 値
	 * @param {boolean} multiple=false valueに配列を与え、OR条件で完全一致検索する場合にtrueを指定します。通常、valueはスカラ値であいまい検索されます。
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
	 * 指定した文字列を名前に含むリソースに絞り込みます。
	 * 
	 * 大文字・小文字は区別されません。
	 * 半角スペースで区切られた複数の文字列は、それらをすべて含むことが条件とみなされます。
	 * 
	 * @todo Implement test case
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Script}
	 */
	withNameLike(name:string) : Model_Script {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		return (<Model_Script><any>(this._withNameLike(name)));
	}
	
	/**
	 * 指定したタグを持つリソースに絞り込みます。
	 * 
	 * 複数のタグを指定する場合は withTags() を利用してください。
	 * 
	 * @todo Implement test case
	 * @method withTag
	 * @chainable
	 * @public
	 * @param {string} tag
	 * @return {Model_Script}
	 */
	withTag(tag:string) : Model_Script {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tag, "string");
		return (<Model_Script><any>(this._withTag(tag)));
	}
	
	/**
	 * 指定したすべてのタグを持つリソースに絞り込みます。
	 * 
	 * @todo Implement test case
	 * @method withTags
	 * @chainable
	 * @public
	 * @param {string[]} tags
	 * @return {Model_Script}
	 */
	withTags(tags:string[]) : Model_Script {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tags, "Array");
		return (<Model_Script><any>(this._withTags(tags)));
	}
	
	/**
	 * 指定したDNFに合致するタグを持つリソースに絞り込みます。
	 * 
	 * @todo Implement test case
	 * @method withTagDnf
	 * @chainable
	 * @public
	 * @param {string[][]} dnf
	 * @return {Model_Script}
	 */
	withTagDnf(dnf:string[][]) : Model_Script {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(dnf, "Array");
		return (<Model_Script><any>(this._withTagDnf(dnf)));
	}
	
	/**
	 * 名前でソートします。
	 * 
	 * @todo Implement test case
	 * @method sortByName
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_Script}
	 */
	sortByName(reverse:boolean=false) : Model_Script {
		Util.validateType(reverse, "boolean");
		return (<Model_Script><any>(this._sortByName(reverse)));
	}
	
	/**
	 * @private
	 * @constructor
	 * @param {Client} client
	 */
	constructor(client:Client) {
		super(client);
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(client, "saklient.cloud.Client");
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
		this._filterBy("Scope", [EScope.shared]);
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
		this._filterBy("Scope", [EScope.user]);
		return this;
	}
	
}


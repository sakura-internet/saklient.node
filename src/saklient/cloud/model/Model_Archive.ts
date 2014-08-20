/// <reference path="../../../node.d.ts" />

export = Model_Archive;

import Util = require('../../Util');
import Model = require('./Model');
import Archive = require('../resource/Archive');
import EScope = require('../enums/EScope');

'use strict';

/**
 * アーカイブを検索・作成するための機能を備えたクラス。
 * 
 * @class Model_Archive
 * @constructor
 * @extends Model
 */
class Model_Archive extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/archive";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Archive";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Archives";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "Archive";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_Archive} this
	 */
	offset(offset:number) : Model_Archive {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		return (<Model_Archive><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_Archive} this
	 */
	limit(count:number) : Model_Archive {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_Archive><any>(this._limit(count)));
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
	 * @return {Model_Archive}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Archive {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		return (<Model_Archive><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_Archive} this
	 */
	reset() : Model_Archive {
		return (<Model_Archive><any>(this._reset()));
	}
	
	/**
	 * 新規リソース作成用のオブジェクトを用意します。
	 * 
	 * 返り値のオブジェクトにパラメータを設定し、save() を呼ぶことで実際のリソースが作成されます。
	 * 
	 * @method create
	 * @public
	 * @return {Archive} リソースオブジェクト
	 */
	create() : Archive {
		return (<Archive><any>(this._create()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Archive} リソースオブジェクト
	 */
	getById(id:string) : Archive {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		return (<Archive><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {Archive[]} リソースオブジェクトの配列
	 */
	find() : Archive[] {
		return Util.castArray(this._find(), (<Archive><any>(null)));
	}
	
	/**
	 * 指定した文字列を名前に含むリソースに絞り込みます。
	 * 
	 * 大文字・小文字は区別されません。
	 * 半角スペースで区切られた複数の文字列は、それらをすべて含むことが条件とみなされます。
	 * 
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Archive}
	 */
	withNameLike(name:string) : Model_Archive {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		return (<Model_Archive><any>(this._withNameLike(name)));
	}
	
	/**
	 * 指定したタグを持つリソースに絞り込みます。
	 * 
	 * 複数のタグを指定する場合は withTags() を利用してください。
	 * 
	 * @method withTag
	 * @chainable
	 * @public
	 * @param {string} tag
	 * @return {Model_Archive}
	 */
	withTag(tag:string) : Model_Archive {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tag, "string");
		return (<Model_Archive><any>(this._withTag(tag)));
	}
	
	/**
	 * 指定したすべてのタグを持つリソースに絞り込みます。
	 * 
	 * @method withTags
	 * @chainable
	 * @public
	 * @param {string[]} tags
	 * @return {Model_Archive}
	 */
	withTags(tags:string[]) : Model_Archive {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tags, "Array");
		return (<Model_Archive><any>(this._withTags(tags)));
	}
	
	/**
	 * 名前でソートします。
	 * 
	 * @method sortByName
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_Archive}
	 */
	sortByName(reverse:boolean=false) : Model_Archive {
		Util.validateType(reverse, "boolean");
		return (<Model_Archive><any>(this._sortByName(reverse)));
	}
	
	/**
	 * 指定したサイズのアーカイブに絞り込みます。
	 * 
	 * @method withSizeGib
	 * @chainable
	 * @public
	 * @param {number} sizeGib
	 * @return {Model_Archive}
	 */
	withSizeGib(sizeGib:number) : Model_Archive {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(sizeGib, "number");
		this._filterBy("SizeMB", sizeGib * 1024);
		return this;
	}
	
	/**
	 * パブリックアーカイブに絞り込みます。
	 * 
	 * @method withSharedScope
	 * @chainable
	 * @public
	 * @return {Model_Archive}
	 */
	withSharedScope() : Model_Archive {
		this._filterBy("Scope", EScope.shared);
		return this;
	}
	
	/**
	 * プライベートアーカイブに絞り込みます。
	 * 
	 * @method withUserScope
	 * @chainable
	 * @public
	 * @return {Model_Archive}
	 */
	withUserScope() : Model_Archive {
		this._filterBy("Scope", EScope.user);
		return this;
	}
	
	/**
	 * サイズでソートします。
	 * 
	 * @method sortBySize
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_Archive}
	 */
	sortBySize(reverse:boolean=false) : Model_Archive {
		Util.validateType(reverse, "boolean");
		this._sort("SizeMB", reverse);
		return this;
	}
	
}


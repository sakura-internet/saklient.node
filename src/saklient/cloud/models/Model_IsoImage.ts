/// <reference path="../../../node.d.ts" />

export = Model_IsoImage;

import Util = require('../../Util');
import Client = require('../Client');
import Model = require('./Model');
import IsoImage = require('../resources/IsoImage');
import EScope = require('../enums/EScope');

'use strict';

/**
 * ISOイメージを検索・作成するための機能を備えたクラス。
 * 
 * @module saklient.cloud.models.Model_IsoImage
 * @class Model_IsoImage
 * @constructor
 * @extends Model
 */
class Model_IsoImage extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/cdrom";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "CDROM";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "CDROMs";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "IsoImage";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_IsoImage} this
	 */
	offset(offset:number) : Model_IsoImage {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		return (<Model_IsoImage><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_IsoImage} this
	 */
	limit(count:number) : Model_IsoImage {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_IsoImage><any>(this._limit(count)));
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
	 * @return {Model_IsoImage}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_IsoImage {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		return (<Model_IsoImage><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_IsoImage} this
	 */
	reset() : Model_IsoImage {
		return (<Model_IsoImage><any>(this._reset()));
	}
	
	/**
	 * 新規リソース作成用のオブジェクトを用意します。
	 * 
	 * 返り値のオブジェクトにパラメータを設定し、save() を呼ぶことで実際のリソースが作成されます。
	 * 
	 * @method create
	 * @public
	 * @return {IsoImage} リソースオブジェクト
	 */
	create() : IsoImage {
		return (<IsoImage><any>(this._create()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {IsoImage} リソースオブジェクト
	 */
	getById(id:string) : IsoImage {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		return (<IsoImage><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {IsoImage[]} リソースオブジェクトの配列
	 */
	find() : IsoImage[] {
		return Util.castArray(this._find(), (<IsoImage><any>(null)));
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
	 * @return {Model_IsoImage}
	 */
	withNameLike(name:string) : Model_IsoImage {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		return (<Model_IsoImage><any>(this._withNameLike(name)));
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
	 * @return {Model_IsoImage}
	 */
	withTag(tag:string) : Model_IsoImage {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tag, "string");
		return (<Model_IsoImage><any>(this._withTag(tag)));
	}
	
	/**
	 * 指定したすべてのタグを持つリソースに絞り込みます。
	 * 
	 * @todo Implement test case
	 * @method withTags
	 * @chainable
	 * @public
	 * @param {string[]} tags
	 * @return {Model_IsoImage}
	 */
	withTags(tags:string[]) : Model_IsoImage {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tags, "Array");
		return (<Model_IsoImage><any>(this._withTags(tags)));
	}
	
	/**
	 * 指定したDNFに合致するタグを持つリソースに絞り込みます。
	 * 
	 * @todo Implement test case
	 * @method withTagDnf
	 * @chainable
	 * @public
	 * @param {string[][]} dnf
	 * @return {Model_IsoImage}
	 */
	withTagDnf(dnf:string[][]) : Model_IsoImage {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(dnf, "Array");
		return (<Model_IsoImage><any>(this._withTagDnf(dnf)));
	}
	
	/**
	 * 名前でソートします。
	 * 
	 * @todo Implement test case
	 * @method sortByName
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_IsoImage}
	 */
	sortByName(reverse:boolean=false) : Model_IsoImage {
		Util.validateType(reverse, "boolean");
		return (<Model_IsoImage><any>(this._sortByName(reverse)));
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
	 * 指定したサイズのISOイメージに絞り込みます。
	 * 
	 * @method withSizeGib
	 * @chainable
	 * @public
	 * @param {number} sizeGib
	 * @return {Model_IsoImage}
	 */
	withSizeGib(sizeGib:number) : Model_IsoImage {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(sizeGib, "number");
		this._filterBy("SizeMB", [sizeGib * 1024]);
		return this;
	}
	
	/**
	 * パブリックISOイメージに絞り込みます。
	 * 
	 * @method withSharedScope
	 * @chainable
	 * @public
	 * @return {Model_IsoImage}
	 */
	withSharedScope() : Model_IsoImage {
		this._filterBy("Scope", [EScope.shared]);
		return this;
	}
	
	/**
	 * プライベートISOイメージに絞り込みます。
	 * 
	 * @method withUserScope
	 * @chainable
	 * @public
	 * @return {Model_IsoImage}
	 */
	withUserScope() : Model_IsoImage {
		this._filterBy("Scope", [EScope.user]);
		return this;
	}
	
	/**
	 * サイズでソートします。
	 * 
	 * @method sortBySize
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_IsoImage}
	 */
	sortBySize(reverse:boolean=false) : Model_IsoImage {
		Util.validateType(reverse, "boolean");
		this._sort("SizeMB", reverse);
		return this;
	}
	
}


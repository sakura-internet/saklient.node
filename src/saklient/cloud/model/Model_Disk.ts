/// <reference path="../../../node.d.ts" />

export = Model_Disk;

import Util = require('../../Util');
import Model = require('./Model');
import Disk = require('../resource/Disk');

'use strict';

/**
 * ディスクを検索・作成するための機能を備えたクラス。
 * 
 * @class Model_Disk
 * @constructor
 * @extends Model
 */
class Model_Disk extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/disk";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Disk";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Disks";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "Disk";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_Disk} this
	 */
	offset(offset:number) : Model_Disk {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		return (<Model_Disk><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_Disk} this
	 */
	limit(count:number) : Model_Disk {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_Disk><any>(this._limit(count)));
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
	 * @return {Model_Disk}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Disk {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		return (<Model_Disk><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_Disk} this
	 */
	reset() : Model_Disk {
		return (<Model_Disk><any>(this._reset()));
	}
	
	/**
	 * 新規リソース作成用のオブジェクトを用意します。
	 * 
	 * 返り値のオブジェクトにパラメータを設定し、save() を呼ぶことで実際のリソースが作成されます。
	 * 
	 * @method create
	 * @public
	 * @return {Disk} リソースオブジェクト
	 */
	create() : Disk {
		return (<Disk><any>(this._create()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Disk} リソースオブジェクト
	 */
	getById(id:string) : Disk {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		return (<Disk><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {Disk[]} リソースオブジェクトの配列
	 */
	find() : Disk[] {
		return Util.castArray(this._find(), (<Disk><any>(null)));
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
	 * @return {Model_Disk}
	 */
	withNameLike(name:string) : Model_Disk {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		return (<Model_Disk><any>(this._withNameLike(name)));
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
	 * @return {Model_Disk}
	 */
	withTag(tag:string) : Model_Disk {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tag, "string");
		return (<Model_Disk><any>(this._withTag(tag)));
	}
	
	/**
	 * 指定したすべてのタグを持つリソースに絞り込みます。
	 * 
	 * @method withTags
	 * @chainable
	 * @public
	 * @param {string[]} tags
	 * @return {Model_Disk}
	 */
	withTags(tags:string[]) : Model_Disk {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tags, "Array");
		return (<Model_Disk><any>(this._withTags(tags)));
	}
	
	/**
	 * 名前でソートします。
	 * 
	 * @method sortByName
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_Disk}
	 */
	sortByName(reverse:boolean=false) : Model_Disk {
		Util.validateType(reverse, "boolean");
		return (<Model_Disk><any>(this._sortByName(reverse)));
	}
	
	/**
	 * 指定したサイズのディスクに絞り込みます。
	 * 
	 * @method withSizeGib
	 * @chainable
	 * @public
	 * @param {number} sizeGib
	 * @return {Model_Disk}
	 */
	withSizeGib(sizeGib:number) : Model_Disk {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(sizeGib, "number");
		this._filterBy("SizeMB", sizeGib * 1024);
		return this;
	}
	
	/**
	 * 指定したサーバへ接続されているディスクに絞り込みます。
	 * 
	 * @method withServerId
	 * @chainable
	 * @public
	 * @param {string} id
	 * @return {Model_Disk}
	 */
	withServerId(id:string) : Model_Disk {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		this._filterBy("Server.ID", id);
		return this;
	}
	
	/**
	 * サイズでソートします。
	 * 
	 * @method sortBySize
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_Disk}
	 */
	sortBySize(reverse:boolean=false) : Model_Disk {
		Util.validateType(reverse, "boolean");
		this._sort("SizeMB", reverse);
		return this;
	}
	
}


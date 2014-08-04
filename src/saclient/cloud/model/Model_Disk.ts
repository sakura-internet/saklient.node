/// <reference path="../../../node.d.ts" />

export = Model_Disk;

import Util = require('../Util');
import Model = require('./Model');
import Disk = require('../resource/Disk');

/**
 * ディスクを検索するための機能を備えたクラス。
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
		return (<Model_Disk><any>(this._limit(count)));
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
	 * @return {Model_Disk}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Disk {
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
	 * *
	 * 
	 * @method create
	 * @public
	 * @return {Disk}
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
	 * 指定した文字列を名前に含むディスクに絞り込みます。
	 * 
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Disk}
	 */
	withNameLike(name:string) : Model_Disk {
		this._filterBy("Name", name);
		return this;
	}
	
	/**
	 * 指定したタグを持つディスクに絞り込みます。
	 * 
	 * @method withTag
	 * @chainable
	 * @public
	 * @param {string} tag
	 * @return {Model_Disk}
	 */
	withTag(tag:string) : Model_Disk {
		this._filterBy("Tags.Name", tag, true);
		return this;
	}
	
	/**
	 * 指定したタグを持つディスクに絞り込みます。
	 * 
	 * @method withTags
	 * @chainable
	 * @public
	 * @param {string[]} tags
	 * @return {Model_Disk}
	 */
	withTags(tags:string[]) : Model_Disk {
		this._filterBy("Tags.Name", tags, true);
		return this;
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
		this._filterBy("Server.ID", id);
		return this;
	}
	
}


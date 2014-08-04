/// <reference path="../../../node.d.ts" />

export = Model_Archive;

import Util = require('../../Util');
import Model = require('./Model');
import Archive = require('../resource/Archive');
import EScope = require('../enums/EScope');

/**
 * アーカイブを検索するための機能を備えたクラス。
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
		return (<Model_Archive><any>(this._limit(count)));
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
	 * @return {Model_Archive}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Archive {
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
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Archive} リソースオブジェクト
	 */
	getById(id:string) : Archive {
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
	 * 指定した文字列を名前に含むアーカイブに絞り込みます。
	 * 
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Archive}
	 */
	withNameLike(name:string) : Model_Archive {
		this._filterBy("Name", name);
		return this;
	}
	
	/**
	 * 指定したタグを持つアーカイブに絞り込みます。
	 * 
	 * @method withTag
	 * @chainable
	 * @public
	 * @param {string} tag
	 * @return {Model_Archive}
	 */
	withTag(tag:string) : Model_Archive {
		this._filterBy("Tags.Name", tag, true);
		return this;
	}
	
	/**
	 * 指定したタグを持つアーカイブに絞り込みます。
	 * 
	 * @method withTags
	 * @chainable
	 * @public
	 * @param {string[]} tags
	 * @return {Model_Archive}
	 */
	withTags(tags:string[]) : Model_Archive {
		this._filterBy("Tags.Name", tags, true);
		return this;
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
	
}


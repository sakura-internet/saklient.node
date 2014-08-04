/// <reference path="../../../node.d.ts" />

export = Model_IsoImage;

import Util = require('../Util');
import Model = require('./Model');
import IsoImage = require('../resource/IsoImage');
import EScope = require('../enums/EScope');

/**
 * ISOイメージを検索するための機能を備えたクラス。
 * 
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
		return (<Model_IsoImage><any>(this._limit(count)));
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
	 * @return {Model_IsoImage}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_IsoImage {
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
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {IsoImage} リソースオブジェクト
	 */
	getById(id:string) : IsoImage {
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
	 * 指定した文字列を名前に含むISOイメージに絞り込みます。
	 * 
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_IsoImage}
	 */
	withNameLike(name:string) : Model_IsoImage {
		this._filterBy("Name", name);
		return this;
	}
	
	/**
	 * 指定したタグを持つISOイメージに絞り込みます。
	 * 
	 * @method withTag
	 * @chainable
	 * @public
	 * @param {string} tag
	 * @return {Model_IsoImage}
	 */
	withTag(tag:string) : Model_IsoImage {
		this._filterBy("Tags.Name", tag, true);
		return this;
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
		this._filterBy("SizeMB", sizeGib * 1024);
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
		this._filterBy("Scope", EScope.shared);
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
		this._filterBy("Scope", EScope.user);
		return this;
	}
	
}


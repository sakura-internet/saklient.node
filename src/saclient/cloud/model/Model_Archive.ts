/// <reference path="../../../node.d.ts" />

export = Model_Archive;

import Util = require('../Util');
import Model = require('./Model');
import Archive = require('../resource/Archive');

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
	
}


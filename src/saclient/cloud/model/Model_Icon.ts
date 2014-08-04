/// <reference path="../../../node.d.ts" />

export = Model_Icon;

import Util = require('../../Util');
import Model = require('./Model');
import Icon = require('../resource/Icon');

/**
 * アイコンを検索するための機能を備えたクラス。
 * 
 * @class Model_Icon
 * @constructor
 * @extends Model
 */
class Model_Icon extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/icon";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Icon";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Icons";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "Icon";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_Icon} this
	 */
	offset(offset:number) : Model_Icon {
		return (<Model_Icon><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_Icon} this
	 */
	limit(count:number) : Model_Icon {
		return (<Model_Icon><any>(this._limit(count)));
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
	 * @return {Model_Icon}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Icon {
		return (<Model_Icon><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_Icon} this
	 */
	reset() : Model_Icon {
		return (<Model_Icon><any>(this._reset()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Icon} リソースオブジェクト
	 */
	getById(id:string) : Icon {
		return (<Icon><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {Icon[]} リソースオブジェクトの配列
	 */
	find() : Icon[] {
		return Util.castArray(this._find(), (<Icon><any>(null)));
	}
	
	/**
	 * 指定した文字列を名前に含むアイコンに絞り込みます。
	 * 
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Icon}
	 */
	withNameLike(name:string) : Model_Icon {
		this._filterBy("Name", name);
		return this;
	}
	
	/**
	 * 指定したタグを持つアイコンに絞り込みます。
	 * 
	 * @method withTag
	 * @chainable
	 * @public
	 * @param {string} tag
	 * @return {Model_Icon}
	 */
	withTag(tag:string) : Model_Icon {
		this._filterBy("Tags.Name", tag, true);
		return this;
	}
	
	/**
	 * 指定したタグを持つアイコンに絞り込みます。
	 * 
	 * @method withTags
	 * @chainable
	 * @public
	 * @param {string[]} tags
	 * @return {Model_Icon}
	 */
	withTags(tags:string[]) : Model_Icon {
		this._filterBy("Tags.Name", tags, true);
		return this;
	}
	
}


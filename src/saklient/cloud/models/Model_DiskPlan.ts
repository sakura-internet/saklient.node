/// <reference path="../../../node.d.ts" />

export = Model_DiskPlan;

import Util = require('../../Util');
import Client = require('../Client');
import Model = require('./Model');
import Resource = require('../resources/Resource');
import DiskPlan = require('../resources/DiskPlan');

'use strict';

/**
 * ディスクプランを検索するための機能を備えたクラス。
 * 
 * @module saklient.cloud.models.Model_DiskPlan
 * @class Model_DiskPlan
 * @constructor
 * @extends Model
 */
class Model_DiskPlan extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/product/disk";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "DiskPlan";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "DiskPlans";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		return "DiskPlan";
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
		return new DiskPlan(this._client, obj, wrapped);
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_DiskPlan} this
	 */
	offset(offset:number) : Model_DiskPlan {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		return (<Model_DiskPlan><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_DiskPlan} this
	 */
	limit(count:number) : Model_DiskPlan {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_DiskPlan><any>(this._limit(count)));
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
	 * @return {Model_DiskPlan}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_DiskPlan {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(multiple, "boolean");
		return (<Model_DiskPlan><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_DiskPlan} this
	 */
	reset() : Model_DiskPlan {
		return (<Model_DiskPlan><any>(this._reset()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {DiskPlan} リソースオブジェクト
	 */
	getById(id:string) : DiskPlan {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		return (<DiskPlan><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {DiskPlan[]} リソースオブジェクトの配列
	 */
	find() : DiskPlan[] {
		return Util.castArray(this._find(), (<DiskPlan><any>(null)));
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
		this._hdd = null;
		this._ssd = null;
	}
	
	/**
	 * @private
	 * @member saklient.cloud.models.Model_DiskPlan#_hdd
	 * @type DiskPlan
	 * @protected
	 */
	_hdd : DiskPlan;
	
	/**
	 * @method get_hdd
	 * @protected
	 * @private
	 * @return {DiskPlan}
	 */
	get_hdd() : DiskPlan {
		if (this._hdd == null) {
			this._hdd = this.getById("2");
		};
		return this._hdd;
	}
	
	/**
	 * 標準プラン
	 * 
	 * @property hdd
	 * @type DiskPlan
	 * @readOnly
	 * @public
	 */
	get hdd() : DiskPlan { return this.get_hdd(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.models.Model_DiskPlan#_ssd
	 * @type DiskPlan
	 * @protected
	 */
	_ssd : DiskPlan;
	
	/**
	 * @method get_ssd
	 * @protected
	 * @private
	 * @return {DiskPlan}
	 */
	get_ssd() : DiskPlan {
		if (this._ssd == null) {
			this._ssd = this.getById("4");
		};
		return this._ssd;
	}
	
	/**
	 * SSDプラン
	 * 
	 * @property ssd
	 * @type DiskPlan
	 * @readOnly
	 * @public
	 */
	get ssd() : DiskPlan { return this.get_ssd(); }
	
	
}


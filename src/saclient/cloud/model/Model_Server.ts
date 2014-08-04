/// <reference path="../../../node.d.ts" />

export = Model_Server;

import Util = require('../../Util');
import Model = require('./Model');
import Server = require('../resource/Server');
import ServerPlan = require('../resource/ServerPlan');
import IsoImage = require('../resource/IsoImage');
import EServerInstanceStatus = require('../enums/EServerInstanceStatus');

/**
 * サーバを検索するための機能を備えたクラス。
 * 
 * @class Model_Server
 * @constructor
 * @extends Model
 */
class Model_Server extends Model {
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		Util.validateArgCount(arguments.length, 0);
		return "/server";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		Util.validateArgCount(arguments.length, 0);
		return "Server";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		Util.validateArgCount(arguments.length, 0);
		return "Servers";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		Util.validateArgCount(arguments.length, 0);
		return "Server";
	}
	
	/**
	 * 次に取得するリストの開始オフセットを指定します。
	 * 
	 * @method offset
	 * @chainable
	 * @public
	 * @param {number} offset オフセット
	 * @return {Model_Server} this
	 */
	offset(offset:number) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(offset, "number");
		return (<Model_Server><any>(this._offset(offset)));
	}
	
	/**
	 * 次に取得するリストの上限レコード数を指定します。
	 * 
	 * @method limit
	 * @chainable
	 * @public
	 * @param {number} count 上限レコード数
	 * @return {Model_Server} this
	 */
	limit(count:number) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(count, "number");
		return (<Model_Server><any>(this._limit(count)));
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
	 * @return {Model_Server}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Server {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(value, "any");
		Util.validateType(multiple, "boolean");
		return (<Model_Server><any>(this._filterBy(key, value, multiple)));
	}
	
	/**
	 * 次のリクエストのために設定されているステートをすべて破棄します。
	 * 
	 * @method reset
	 * @chainable
	 * @public
	 * @return {Model_Server} this
	 */
	reset() : Model_Server {
		Util.validateArgCount(arguments.length, 0);
		return (<Model_Server><any>(this._reset()));
	}
	
	/**
	 * *
	 * 
	 * @method create
	 * @public
	 * @return {Server}
	 */
	create() : Server {
		Util.validateArgCount(arguments.length, 0);
		return (<Server><any>(this._create()));
	}
	
	/**
	 * 指定したIDを持つ唯一のリソースを取得します。
	 * 
	 * @method getById
	 * @public
	 * @param {string} id
	 * @return {Server} リソースオブジェクト
	 */
	getById(id:string) : Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(id, "string");
		return (<Server><any>(this._getById(id)));
	}
	
	/**
	 * リソースの検索リクエストを実行し、結果をリストで取得します。
	 * 
	 * @method find
	 * @public
	 * @return {Server[]} リソースオブジェクトの配列
	 */
	find() : Server[] {
		Util.validateArgCount(arguments.length, 0);
		return Util.castArray(this._find(), (<Server><any>(null)));
	}
	
	/**
	 * 指定した文字列を名前に含むサーバに絞り込みます。
	 * 
	 * @method withNameLike
	 * @chainable
	 * @public
	 * @param {string} name
	 * @return {Model_Server}
	 */
	withNameLike(name:string) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		this._filterBy("Name", name);
		return this;
	}
	
	/**
	 * 指定したタグを持つサーバに絞り込みます。
	 * 
	 * @method withTag
	 * @chainable
	 * @public
	 * @param {string} tag
	 * @return {Model_Server}
	 */
	withTag(tag:string) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tag, "string");
		this._filterBy("Tags.Name", tag, true);
		return this;
	}
	
	/**
	 * 指定したタグを持つサーバに絞り込みます。
	 * 
	 * @method withTags
	 * @chainable
	 * @public
	 * @param {string[]} tags
	 * @return {Model_Server}
	 */
	withTags(tags:string[]) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tags, "Array");
		this._filterBy("Tags.Name", tags, true);
		return this;
	}
	
	/**
	 * 指定したタグを持つサーバに絞り込みます。
	 * 
	 * @method withPlan
	 * @chainable
	 * @public
	 * @param {ServerPlan} plan
	 * @return {Model_Server}
	 */
	withPlan(plan:ServerPlan) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(plan, "saclient.cloud.resource.ServerPlan");
		this._filterBy("ServerPlan.ID", plan._id(), true);
		return this;
	}
	
	/**
	 * インスタンスが指定した状態にあるサーバに絞り込みます。
	 * 
	 * @method withStatus
	 * @chainable
	 * @public
	 * @param {string} status
	 * @return {Model_Server}
	 */
	withStatus(status:string) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(status, "string");
		this._filterBy("Instance.Status", status, true);
		return this;
	}
	
	/**
	 * インスタンスが起動中のサーバに絞り込みます。
	 * 
	 * @method withStatusUp
	 * @chainable
	 * @public
	 * @return {Model_Server}
	 */
	withStatusUp() : Model_Server {
		Util.validateArgCount(arguments.length, 0);
		return this.withStatus(EServerInstanceStatus.up);
	}
	
	/**
	 * インスタンスが停止中のサーバに絞り込みます。
	 * 
	 * @method withStatusDown
	 * @chainable
	 * @public
	 * @return {Model_Server}
	 */
	withStatusDown() : Model_Server {
		Util.validateArgCount(arguments.length, 0);
		return this.withStatus(EServerInstanceStatus.down);
	}
	
	/**
	 * 指定したISOイメージが挿入されているサーバに絞り込みます。
	 * 
	 * @method withIsoImage
	 * @chainable
	 * @public
	 * @param {IsoImage} iso
	 * @return {Model_Server}
	 */
	withIsoImage(iso:IsoImage) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(iso, "saclient.cloud.resource.IsoImage");
		this._filterBy("Instance.CDROM.ID", iso._id(), true);
		return this;
	}
	
}


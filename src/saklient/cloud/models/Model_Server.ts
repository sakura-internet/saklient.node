/// <reference path="../../../node.d.ts" />

export = Model_Server;

import Util = require('../../Util');
import Client = require('../Client');
import Model = require('./Model');
import Server = require('../resources/Server');
import ServerPlan = require('../resources/ServerPlan');
import IsoImage = require('../resources/IsoImage');
import EServerInstanceStatus = require('../enums/EServerInstanceStatus');

'use strict';

/**
 * サーバを検索・作成するための機能を備えたクラス。
 * 
 * @module saklient.cloud.models.Model_Server
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
		return "/server";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Server";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Servers";
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
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
	 * Web APIのフィルタリング設定を直接指定します。
	 * 
	 * @method filterBy
	 * @chainable
	 * @public
	 * @param {string} key キー
	 * @param {any} value 値
	 * @param {boolean} multiple=false valueに配列を与え、OR条件で完全一致検索する場合にtrueを指定します。通常、valueはスカラ値であいまい検索されます。
	 * @return {Model_Server}
	 */
	filterBy(key:string, value:any, multiple:boolean=false) : Model_Server {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
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
		return (<Model_Server><any>(this._reset()));
	}
	
	/**
	 * 新規リソース作成用のオブジェクトを用意します。
	 * 
	 * 返り値のオブジェクトにパラメータを設定し、save() を呼ぶことで実際のリソースが作成されます。
	 * 
	 * @method create
	 * @public
	 * @return {Server} リソースオブジェクト
	 */
	create() : Server {
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
		return Util.castArray(this._find(), (<Server><any>(null)));
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
	 * @return {Model_Server}
	 */
	withNameLike(name:string) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		return (<Model_Server><any>(this._withNameLike(name)));
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
	 * @return {Model_Server}
	 */
	withTag(tag:string) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tag, "string");
		return (<Model_Server><any>(this._withTag(tag)));
	}
	
	/**
	 * 指定したすべてのタグを持つリソースに絞り込みます。
	 * 
	 * @todo Implement test case
	 * @method withTags
	 * @chainable
	 * @public
	 * @param {string[]} tags
	 * @return {Model_Server}
	 */
	withTags(tags:string[]) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(tags, "Array");
		return (<Model_Server><any>(this._withTags(tags)));
	}
	
	/**
	 * 指定したDNFに合致するタグを持つリソースに絞り込みます。
	 * 
	 * @todo Implement test case
	 * @method withTagDnf
	 * @chainable
	 * @public
	 * @param {string[][]} dnf
	 * @return {Model_Server}
	 */
	withTagDnf(dnf:string[][]) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(dnf, "Array");
		return (<Model_Server><any>(this._withTagDnf(dnf)));
	}
	
	/**
	 * 名前でソートします。
	 * 
	 * @todo Implement test case
	 * @method sortByName
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_Server}
	 */
	sortByName(reverse:boolean=false) : Model_Server {
		Util.validateType(reverse, "boolean");
		return (<Model_Server><any>(this._sortByName(reverse)));
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
	 * 指定したプランのサーバに絞り込みます。
	 * 
	 * @method withPlan
	 * @chainable
	 * @public
	 * @param {ServerPlan} plan
	 * @return {Model_Server}
	 */
	withPlan(plan:ServerPlan) : Model_Server {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(plan, "saklient.cloud.resources.ServerPlan");
		this._filterBy("ServerPlan.ID", [plan._id()]);
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
		this._filterBy("Instance.Status", [status]);
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
		Util.validateType(iso, "saklient.cloud.resources.IsoImage");
		this._filterBy("Instance.CDROM.ID", [iso._id()]);
		return this;
	}
	
	/**
	 * 仮想コア数でソートします。
	 * 
	 * @method sortByCpu
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_Server}
	 */
	sortByCpu(reverse:boolean=false) : Model_Server {
		Util.validateType(reverse, "boolean");
		this._sort("ServerPlan.CPU", reverse);
		return this;
	}
	
	/**
	 * メモリ容量でソートします。
	 * 
	 * @method sortByMemory
	 * @chainable
	 * @public
	 * @param {boolean} reverse=false
	 * @return {Model_Server}
	 */
	sortByMemory(reverse:boolean=false) : Model_Server {
		Util.validateType(reverse, "boolean");
		this._sort("ServerPlan.MemoryMB", reverse);
		return this;
	}
	
}


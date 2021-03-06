/// <reference path="../../../node.d.ts" />

export = Resource;

import Util = require('../../Util');
import Client = require('../Client');
import HttpException = require('../../errors/HttpException');

'use strict';

/**
 * @private
 * @module saklient.cloud.resources.Resource
 * @class Resource
 * @constructor
 */
class Resource {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.Resource#_client
	 * @type Client
	 * @protected
	 */
	_client : Client;
	
	/**
	 * @method get_client
	 * @protected
	 * @private
	 * @return {Client}
	 */
	get_client() : Client {
		return this._client;
	}
	
	/**
	 * @private
	 * @property client
	 * @type Client
	 * @readOnly
	 */
	get client() : Client { return this.get_client(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.Resource#_query
	 * @type any
	 * @protected
	 */
	_query : any;
	
	/**
	 * @private
	 * @method setParam
	 * @param {string} key
	 * @param {any} value
	 * @return {void}
	 */
	setParam(key:string, value:any) : void {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		this._query[key] = value;
	}
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return null;
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return null;
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return null;
	}
	
	/**
	 * @private
	 * @method _className
	 * @return {string}
	 */
	_className() : string {
		return null;
	}
	
	/**
	 * @private
	 * @method _id
	 * @return {string}
	 */
	_id() : string {
		return null;
	}
	
	/**
	 * @private
	 * @constructor
	 * @param {Client} client
	 */
	constructor(client:Client) {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(client, "saklient.cloud.Client");
		this._client = client;
		this._query = {};
	}
	
	/**
	 * @private
	 * @member saklient.cloud.resources.Resource#isNew
	 * @type boolean
	 * @protected
	 */
	isNew : boolean;
	
	/**
	 * @private
	 * @member saklient.cloud.resources.Resource#isIncomplete
	 * @type boolean
	 * @protected
	 */
	isIncomplete : boolean;
	
	/**
	 * @private
	 * @method _onBeforeSave
	 * @protected
	 * @param {any} query
	 * @return {void}
	 */
	_onBeforeSave(query:any) : void {
		Util.validateArgCount(arguments.length, 1);
	}
	
	/**
	 * @private
	 * @method _onAfterApiDeserialize
	 * @protected
	 * @param {any} r
	 * @param {any} root
	 * @return {void}
	 */
	_onAfterApiDeserialize(r:any, root:any) : void {
		Util.validateArgCount(arguments.length, 2);
	}
	
	/**
	 * @private
	 * @method _onBeforeApiSerialize
	 * @protected
	 * @param {boolean} withClean
	 * @return {void}
	 */
	_onBeforeApiSerialize(withClean:boolean) : void {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(withClean, "boolean");
	}
	
	/**
	 * @private
	 * @method _onAfterApiSerialize
	 * @protected
	 * @param {any} r
	 * @param {boolean} withClean
	 * @return {void}
	 */
	_onAfterApiSerialize(r:any, withClean:boolean) : void {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(withClean, "boolean");
	}
	
	/**
	 * @private
	 * @method apiDeserializeImpl
	 * @protected
	 * @param {any} r
	 * @return {void}
	 */
	apiDeserializeImpl(r:any) : void {
		Util.validateArgCount(arguments.length, 1);
	}
	
	/**
	 * @private
	 * @method apiDeserialize
	 * @param {any} obj
	 * @param {boolean} wrapped=false
	 * @return {void}
	 */
	apiDeserialize(obj:any, wrapped:boolean=false) : void {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(wrapped, "boolean");
		var root:any = null;
		var record:any = null;
		var rkey:string = this._rootKey();
		if (obj != null) {
			if (!wrapped) {
				if (rkey != null) {
					root = {};
					root[rkey] = obj;
				};
				record = obj;
			}
			else {
				root = obj;
				record = obj[rkey];
			};
		};
		this.apiDeserializeImpl(record);
		this._onAfterApiDeserialize(record, root);
	}
	
	/**
	 * @private
	 * @method apiSerializeImpl
	 * @protected
	 * @param {boolean} withClean=false
	 * @return {any}
	 */
	apiSerializeImpl(withClean:boolean=false) : any {
		Util.validateType(withClean, "boolean");
		return null;
	}
	
	/**
	 * @private
	 * @method apiSerialize
	 * @param {boolean} withClean=false
	 * @return {any}
	 */
	apiSerialize(withClean:boolean=false) : any {
		Util.validateType(withClean, "boolean");
		this._onBeforeApiSerialize(withClean);
		var ret:any = this.apiSerializeImpl(withClean);
		this._onAfterApiSerialize(ret, withClean);
		return ret;
	}
	
	/**
	 * @private
	 * @method apiSerializeID
	 * @protected
	 * @return {any}
	 */
	apiSerializeID() : any {
		var id:string = this._id();
		if (id == null) {
			return null;
		};
		var r:any = {};
		r["ID"] = id;
		return r;
	}
	
	/**
	 * @private
	 * @method normalizeFieldName
	 * @protected
	 * @param {string} name
	 * @return {string}
	 */
	normalizeFieldName(name:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		return name;
	}
	
	/**
	 * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
	 * 
	 * @private
	 * @method _save
	 * @chainable
	 * @protected
	 * @return {Resource} this
	 */
	_save() : Resource {
		var r:any = this.apiSerialize();
		var query:any = this._query;
		this._query = {};
		var keys:string[] = Object.keys(query);
		for (var __it1:number=0; __it1<keys.length; __it1++) {
			var k = keys[__it1];
			var v:any = query[k];
			r[k] = v;
		};
		var method:string = this.isNew ? "POST" : "PUT";
		var path:string = this._apiPath();
		if (!this.isNew) {
			path += "/" + Util.urlEncode(this._id());
		};
		var q:any = {};
		q[this._rootKey()] = r;
		this._onBeforeSave(q);
		var result:any = this._client.request(method, path, q);
		this.apiDeserialize(result, true);
		return this;
	}
	
	/**
	 * このローカルオブジェクトのIDと一致するリソースの削除リクエストをAPIに送信します。
	 * 
	 * @method destroy
	 * @public
	 * @return {void}
	 */
	destroy() : void {
		if (this.isNew) {
			return;
		};
		var path:string = this._apiPath() + "/" + Util.urlEncode(this._id());
		this.requestRetry("DELETE", path);
	}
	
	/**
	 * 最新のリソース情報を再取得します。
	 * 
	 * @private
	 * @method _reload
	 * @chainable
	 * @protected
	 * @return {Resource} this
	 */
	_reload() : Resource {
		var result:any = this.requestRetry("GET", this._apiPath() + "/" + Util.urlEncode(this._id()));
		this.apiDeserialize(result, true);
		return this;
	}
	
	/**
	 * このリソースが存在するかを調べます。
	 * 
	 * @method exists
	 * @public
	 * @return {boolean}
	 */
	exists() : boolean {
		var query:any = {};
		Util.setByPath(query, "Filter.ID", [this._id()]);
		Util.setByPath(query, "Include", ["ID"]);
		var result:any = this.requestRetry("GET", this._apiPath(), query);
		var cnt:any = result["Count"];
		return (<number><any>(cnt)) == 1;
	}
	
	/**
	 * @private
	 * @method dump
	 * @return {any}
	 */
	dump() : any {
		return this.apiSerialize(true);
	}
	
	/**
	 * @private
	 * @static
	 * @method createWith
	 * @chainable
	 * @param {string} className
	 * @param {Client} client
	 * @param {any} obj
	 * @param {boolean} wrapped=false
	 * @return {Resource}
	 */
	static createWith(className:string, client:Client, obj:any, wrapped:boolean=false) : Resource {
		Util.validateArgCount(arguments.length, 3);
		Util.validateType(className, "string");
		Util.validateType(client, "saklient.cloud.Client");
		Util.validateType(wrapped, "boolean");
		var a:any[] = [client, obj, wrapped];
		return (<Resource><any>(Util.createClassInstance("saklient.cloud.resources." + className, a)));
	}
	
	/**
	 * @method requestRetry
	 * @public
	 * @param {string} method
	 * @param {string} path
	 * @param {any} query=null
	 * @param {number} retryCount=5
	 * @param {number} retrySleep=5
	 * @return {any}
	 */
	requestRetry(method:string, path:string, query:any=null, retryCount:number=5, retrySleep:number=5) : any {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(method, "string");
		Util.validateType(path, "string");
		Util.validateType(retryCount, "number");
		Util.validateType(retrySleep, "number");
		var ret:any = null;
		while (1 < retryCount) {
			var isOk:boolean = false;
			try {
				ret = this._client.request(method, path, query);
				isOk = true;
			}
			catch (__ex) {
				if (__ex instanceof HttpException) {
					var ex = __ex;
					{
						isOk = false;
					}
				}
			};
			if (isOk) {
				retryCount = -1;
			}
			else {
				retryCount -= 1;
				Util.sleep(retrySleep);
			};
		};
		if (retryCount == 0) {
			ret = this._client.request(method, path, query);
		};
		return ret;
	}
	
}


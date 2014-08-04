/// <reference path="../../../node.d.ts" />

export = Resource;

import Util = require('../../Util');
import Client = require('../Client');

/**
 * @ignore
 * @class Resource
 * @constructor
 */
class Resource {
	
	/**
	 * @private
	 * @member saclient.cloud.resource.Resource#_client
	 * @type Client
	 * @protected
	 */
	_client : Client;
	
	/**
	 * @method get_client
	 * @protected
	 * @return {Client}
	 */
	get_client() : Client {
		Util.validateArgCount(arguments.length, 0);
		return this._client;
	}
	
	/**
	 * @property client
	 * @type Client
	 * @readOnly
	 * @public
	 */
	get client() : Client { return this.get_client(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.resource.Resource#_params
	 * @type any
	 * @protected
	 */
	_params : any;
	
	/**
	 * @method setParam
	 * @public
	 * @param {any} value
	 * @param {string} key
	 * @return {void}
	 */
	setParam(key:string, value:any) : void {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(key, "string");
		Util.validateType(value, "any");
		this._params[key] = value;
	}
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		Util.validateArgCount(arguments.length, 0);
		return null;
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		Util.validateArgCount(arguments.length, 0);
		return null;
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		Util.validateArgCount(arguments.length, 0);
		return null;
	}
	
	/**
	 * @private
	 * @method _className
	 * @protected
	 * @return {string}
	 */
	_className() : string {
		Util.validateArgCount(arguments.length, 0);
		return null;
	}
	
	/**
	 * @private
	 * @method _id
	 * @public
	 * @return {string}
	 */
	_id() : string {
		Util.validateArgCount(arguments.length, 0);
		return null;
	}
	
	/**
	 * @private
	 * @constructor
	 * @public
	 * @param {Client} client
	 */
	constructor(client:Client) {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(client, "saclient.cloud.Client");
		this._client = client;
		this._params = {};
	}
	
	/**
	 * @member saclient.cloud.resource.Resource#isNew
	 * @type boolean
	 * @protected
	 */
	isNew : boolean;
	
	/**
	 * @member saclient.cloud.resource.Resource#isIncomplete
	 * @type boolean
	 * @protected
	 */
	isIncomplete : boolean;
	
	/**
	 * @private
	 * @method _onBeforeSave
	 * @protected
	 * @param {any} r
	 * @return {void}
	 */
	_onBeforeSave(r:any) : void {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(r, "any");
	}
	
	/**
	 * @private
	 * @method _onAfterApiDeserialize
	 * @protected
	 * @param {any} r
	 * @return {void}
	 */
	_onAfterApiDeserialize(r:any) : void {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(r, "any");
	}
	
	/**
	 * @private
	 * @method _onAfterApiSerialize
	 * @protected
	 * @param {boolean} withClean
	 * @param {any} r
	 * @return {void}
	 */
	_onAfterApiSerialize(r:any, withClean:boolean) : void {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(r, "any");
		Util.validateType(withClean, "boolean");
	}
	
	/**
	 * @method apiDeserializeImpl
	 * @protected
	 * @param {any} r
	 * @return {void}
	 */
	apiDeserializeImpl(r:any) : void {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(r, "any");
	}
	
	/**
	 * @method apiDeserialize
	 * @public
	 * @param {any} r
	 * @return {void}
	 */
	apiDeserialize(r:any) : void {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(r, "any");
		this.apiDeserializeImpl(r);
		this._onAfterApiDeserialize(r);
	}
	
	/**
	 * @method apiSerializeImpl
	 * @protected
	 * @param {boolean} withClean=false
	 * @return {any}
	 */
	apiSerializeImpl(withClean:boolean=false) : any {
		Util.validateArgCount(arguments.length, 0);
		Util.validateType(withClean, "boolean");
		return null;
	}
	
	/**
	 * @method apiSerialize
	 * @public
	 * @param {boolean} withClean=false
	 * @return {any}
	 */
	apiSerialize(withClean:boolean=false) : any {
		Util.validateArgCount(arguments.length, 0);
		Util.validateType(withClean, "boolean");
		var ret:any = this.apiSerializeImpl(withClean);
		this._onAfterApiSerialize(ret, withClean);
		return ret;
	}
	
	/**
	 * @method apiSerializeID
	 * @protected
	 * @return {any}
	 */
	apiSerializeID() : any {
		Util.validateArgCount(arguments.length, 0);
		var id:string = this._id();
		if (id == null) {
			return null;
		};
		var r:any = {};
		r["ID"] = id;
		return r;
	}
	
	/**
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
	 * @method setProperty
	 * @public
	 * @param {string} name
	 * @param {any} value
	 * @return {void}
	 */
	setProperty(name:string, value:any) : void {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(name, "string");
		Util.validateType(value, "any");
		name = this.normalizeFieldName(name);
		this["m_" + name] = value;
		this["n_" + name] = true;
	}
	
	/**
	 * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
	 * 
	 * @private
	 * @method _save
	 * @chainable
	 * @protected
	 * @return {Resource} this
	 */
	_save() : Resource {
		Util.validateArgCount(arguments.length, 0);
		var r:any = this.apiSerialize();
		var params:any = this._params;
		this._params = {};
		var keys:string[] = Object.keys(params);
		for (var __it1:number=0; __it1<keys.length; __it1++) {
			var k = keys[__it1];
			var v:any = params[k];
			r[k] = v;
		};
		this._onBeforeSave(r);
		var method = this.isNew ? "POST" : "PUT";
		var path = this._apiPath();
		if (!this.isNew) {
			path += "/" + Util.urlEncode(this._id());
		};
		var q:any = {};
		q[this._rootKey()] = r;
		var result:any = this._client.request(method, path, q);
		this.apiDeserialize(result[this._rootKey()]);
		return this;
	}
	
	/**
	 * このローカルオブジェクトのIDと対応するリソースの削除リクエストをAPIに送信します。
	 * 
	 * @method destroy
	 * @public
	 * @return {void}
	 */
	destroy() : void {
		Util.validateArgCount(arguments.length, 0);
		if (this.isNew) {
			return;
		};
		var path = this._apiPath() + "/" + Util.urlEncode(this._id());
		this._client.request("DELETE", path);
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
		Util.validateArgCount(arguments.length, 0);
		var result:any = this._client.request("GET", this._apiPath() + "/" + Util.urlEncode(this._id()));
		this.apiDeserialize(result[this._rootKey()]);
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
		Util.validateArgCount(arguments.length, 0);
		var params:any = {};
		Util.setByPath(params, "Filter.ID", [this._id()]);
		Util.setByPath(params, "Include", ["ID"]);
		var result:any = this._client.request("GET", this._apiPath(), params);
		return result["Count"] == 1;
	}
	
	/**
	 * @method dump
	 * @public
	 * @return {any}
	 */
	dump() : any {
		Util.validateArgCount(arguments.length, 0);
		return this.apiSerialize(true);
	}
	
}


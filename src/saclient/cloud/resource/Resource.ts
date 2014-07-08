/// <reference path="../../../node.d.ts" />

export = Resource;

import Util = require('../Util');
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
	 * @method _id
	 * @public
	 * @return {string}
	 */
	_id() : string {
		return null;
	}
	
	/**
	 * @private
	 * @constructor
	 * @public
	 * @param {Client} client
	 */
	constructor(client:Client) {
		this._client = client;
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
	 * @method apiDeserialize
	 * @public
	 * @param {any} r
	 * @return {void}
	 */
	apiDeserialize(r:any) : void {}
	
	/**
	 * @method apiSerialize
	 * @public
	 * @param {boolean} withClean=false
	 * @return {any}
	 */
	apiSerialize(withClean:boolean=false) : any {
		return null;
	}
	
	/**
	 * @method apiSerializeID
	 * @protected
	 * @return {any}
	 */
	apiSerializeID() : any {
		var id:string = this._id();
		if (id == null) return null;
		;
		var r:any = {};
		r["ID"] = id;
		return r;
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
		var r:any = {};
		r[this._rootKey()] = this.apiSerialize();
		var method = this.isNew ? "POST" : "PUT";
		var path = this._apiPath();
		if (!this.isNew) path += "/" + Util.urlEncode(this._id());
		var result:any = this._client.request(method, path, r);
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
		if (this.isNew) return;
		;
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
		var result:any = this._client.request("GET", this._apiPath() + "/" + Util.urlEncode(this._id()));
		this.apiDeserialize(result[this._rootKey()]);
		return this;
	}
	
	/**
	 * @method dump
	 * @public
	 * @return {any}
	 */
	dump() : any {
		return this.apiSerialize();
	}
	
}


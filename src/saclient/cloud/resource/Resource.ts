/// <reference path="../Client.ts" />

/**
 * @module saclient.cloud.resource
 */
module saclient.cloud.resource {

	import Client = saclient.cloud.Client;
	
	/**
	 * @ignore
	 * @class Resource
	 * @constructor
	 */
	export class Resource {
		
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
		 * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
		 * 
		 * @private
		 * @method _create
		 * @chainable
		 * @protected
		 * @return {Resource} this
		 */
		_create() : Resource {
			return this;
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
			var result:any = this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()), r);
			this.apiDeserialize(result[this._rootKey()]);
			return this;
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
	
}

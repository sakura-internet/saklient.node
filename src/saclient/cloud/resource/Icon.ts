/// <reference path="../Client.ts" />

/**
 * @module saclient.cloud.resource
 */
module saclient.cloud.resource {

	import Client = saclient.cloud.Client;
	
	/**
	 * アイコンのリソース情報へのアクセス機能や操作機能を備えたクラス。
	 * 
	 * @class Icon
	 * @constructor
	 * @extends Resource
	 */
	export class Icon extends saclient.cloud.resource.Resource {
		
		/**
		 * @member saclient.cloud.resource.Icon#m_id
		 * @type string
		 * @protected
		 */
		m_id : string;
		
		/**
		 * @member saclient.cloud.resource.Icon#m_name
		 * @type string
		 * @protected
		 */
		m_name : string;
		
		/**
		 * @member saclient.cloud.resource.Icon#m_url
		 * @type string
		 * @protected
		 */
		m_url : string;
		
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
		 * @method _id
		 * @public
		 * @return {string}
		 */
		_id() : string {
			return this.get_id();
		}
		
		/**
		 * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
		 * 
		 * @method create
		 * @chainable
		 * @public
		 * @return {Icon} this
		 */
		create() : Icon {
			return (<Icon><any>(this._create()));
		}
		
		/**
		 * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
		 * 
		 * @method save
		 * @chainable
		 * @public
		 * @return {Icon} this
		 */
		save() : Icon {
			return (<Icon><any>(this._save()));
		}
		
		/**
		 * 最新のリソース情報を再取得します。
		 * 
		 * @method reload
		 * @chainable
		 * @public
		 * @return {Icon} this
		 */
		reload() : Icon {
			return (<Icon><any>(this._reload()));
		}
		
		/**
		 * @private
		 * @constructor
		 * @public
		 * @param {Client} client
		 * @param {any} r
		 */
		constructor(client:Client, r:any) {
			super(client);
			this.apiDeserialize(r);
		}
		
		/**
		 * @member saclient.cloud.resource.Icon#n_id
		 * @type boolean
		 * @private
		 */
		private n_id : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_id
		 * @private
		 * @return {string}
		 */
		private get_id() : string {
			return this.m_id;
		}
		
		/**
		 * @property id
		 * @type string
		 * @readOnly
		 * @public
		 */
		get id() : string { return this.get_id(); }
		
		
		/**
		 * @member saclient.cloud.resource.Icon#n_name
		 * @type boolean
		 * @private
		 */
		private n_name : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_name
		 * @private
		 * @return {string}
		 */
		private get_name() : string {
			return this.m_name;
		}
		
		/**
		 * @property name
		 * @type string
		 * @readOnly
		 * @public
		 */
		get name() : string { return this.get_name(); }
		
		
		/**
		 * @member saclient.cloud.resource.Icon#n_url
		 * @type boolean
		 * @private
		 */
		private n_url : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_url
		 * @private
		 * @return {string}
		 */
		private get_url() : string {
			return this.m_url;
		}
		
		/**
		 * @property url
		 * @type string
		 * @readOnly
		 * @public
		 */
		get url() : string { return this.get_url(); }
		
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method apiDeserialize
		 * @public
		 * @param {any} r
		 */
		apiDeserialize(r:any) {
			this.isIncomplete = true;
			if (("ID" in r)) {
				this.m_id = r["ID"] == null ? null : "" + r["ID"];
				this.n_id = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("Name" in r)) {
				this.m_name = r["Name"] == null ? null : "" + r["Name"];
				this.n_name = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("URL" in r)) {
				this.m_url = r["URL"] == null ? null : "" + r["URL"];
				this.n_url = false;
			}
			else {
				this.isIncomplete = false;
			};
		}
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method apiSerialize
		 * @public
		 * @param {boolean} withClean=false
		 * @return {any}
		 */
		apiSerialize(withClean:boolean=false) : any {
			var ret:any = {  };
			if (withClean || this.n_id) {
				ret["ID"] = this.m_id;
			};
			if (withClean || this.n_name) {
				ret["Name"] = this.m_name;
			};
			if (withClean || this.n_url) {
				ret["URL"] = this.m_url;
			};
			return ret;
		}
		
	}
	
}

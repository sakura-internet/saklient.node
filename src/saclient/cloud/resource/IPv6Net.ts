/// <reference path="../Client.ts" />

/**
 * @module saclient.cloud.resource
 */
module saclient.cloud.resource {

	import Client = saclient.cloud.Client;
	
	/**
	 * IPv6ネットワークのリソース情報へのアクセス機能や操作機能を備えたクラス。
	 * 
	 * @class IPv6Net
	 * @constructor
	 * @extends Resource
	 */
	export class IPv6Net extends saclient.cloud.resource.Resource {
		
		/**
		 * @member saclient.cloud.resource.IPv6Net#m_id
		 * @type string
		 * @protected
		 */
		m_id : string;
		
		/**
		 * @member saclient.cloud.resource.IPv6Net#m_ipv6Prefix
		 * @type string
		 * @protected
		 */
		m_ipv6Prefix : string;
		
		/**
		 * @member saclient.cloud.resource.IPv6Net#m_ipv6PrefixLen
		 * @type number
		 * @protected
		 */
		m_ipv6PrefixLen : number;
		
		/**
		 * @member saclient.cloud.resource.IPv6Net#m_ipv6PrefixTail
		 * @type string
		 * @protected
		 */
		m_ipv6PrefixTail : string;
		
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
		 * @member saclient.cloud.resource.IPv6Net#n_id
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
		 * @member saclient.cloud.resource.IPv6Net#n_ipv6Prefix
		 * @type boolean
		 * @private
		 */
		private n_ipv6Prefix : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_ipv6Prefix
		 * @private
		 * @return {string}
		 */
		private get_ipv6Prefix() : string {
			return this.m_ipv6Prefix;
		}
		
		/**
		 * @property ipv6Prefix
		 * @type string
		 * @readOnly
		 * @public
		 */
		get ipv6Prefix() : string { return this.get_ipv6Prefix(); }
		
		
		/**
		 * @member saclient.cloud.resource.IPv6Net#n_ipv6PrefixLen
		 * @type boolean
		 * @private
		 */
		private n_ipv6PrefixLen : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_ipv6PrefixLen
		 * @private
		 * @return {number}
		 */
		private get_ipv6PrefixLen() : number {
			return this.m_ipv6PrefixLen;
		}
		
		/**
		 * @property ipv6PrefixLen
		 * @type number
		 * @readOnly
		 * @public
		 */
		get ipv6PrefixLen() : number { return this.get_ipv6PrefixLen(); }
		
		
		/**
		 * @member saclient.cloud.resource.IPv6Net#n_ipv6PrefixTail
		 * @type boolean
		 * @private
		 */
		private n_ipv6PrefixTail : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_ipv6PrefixTail
		 * @private
		 * @return {string}
		 */
		private get_ipv6PrefixTail() : string {
			return this.m_ipv6PrefixTail;
		}
		
		/**
		 * @property ipv6PrefixTail
		 * @type string
		 * @readOnly
		 * @public
		 */
		get ipv6PrefixTail() : string { return this.get_ipv6PrefixTail(); }
		
		
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
			if (("IPv6Prefix" in r)) {
				this.m_ipv6Prefix = r["IPv6Prefix"] == null ? null : "" + r["IPv6Prefix"];
				this.n_ipv6Prefix = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("IPv6PrefixLen" in r)) {
				this.m_ipv6PrefixLen = r["IPv6PrefixLen"] == null ? null : parseInt("" + r["IPv6PrefixLen"], 10);
				this.n_ipv6PrefixLen = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("IPv6PrefixTail" in r)) {
				this.m_ipv6PrefixTail = r["IPv6PrefixTail"] == null ? null : "" + r["IPv6PrefixTail"];
				this.n_ipv6PrefixTail = false;
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
			if (withClean || this.n_ipv6Prefix) {
				ret["IPv6Prefix"] = this.m_ipv6Prefix;
			};
			if (withClean || this.n_ipv6PrefixLen) {
				ret["IPv6PrefixLen"] = this.m_ipv6PrefixLen;
			};
			if (withClean || this.n_ipv6PrefixTail) {
				ret["IPv6PrefixTail"] = this.m_ipv6PrefixTail;
			};
			return ret;
		}
		
	}
	
}

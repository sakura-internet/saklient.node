/// <reference path="../Client.ts" />
/// <reference path="../Util.ts" />

/**
 * @module saclient.cloud.resource
 */
module saclient.cloud.resource {

	import Client = saclient.cloud.Client;
	import Util = saclient.cloud.Util;
	
	/**
	 * サーバインスタンスのリソース情報へのアクセス機能や操作機能を備えたクラス。
	 * 
	 * @class ServerInstance
	 * @constructor
	 * @extends Resource
	 */
	export class ServerInstance extends saclient.cloud.resource.Resource {
		
		/**
		 * @member saclient.cloud.resource.ServerInstance#m_status
		 * @type string
		 * @protected
		 */
		m_status : string;
		
		/**
		 * @member saclient.cloud.resource.ServerInstance#m_beforeStatus
		 * @type string
		 * @protected
		 */
		m_beforeStatus : string;
		
		/**
		 * @member saclient.cloud.resource.ServerInstance#m_statusChangedAt
		 * @type Date
		 * @protected
		 */
		m_statusChangedAt : Date;
		
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
		 * @member saclient.cloud.resource.ServerInstance#n_status
		 * @type boolean
		 * @private
		 */
		private n_status : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_status
		 * @private
		 * @return {string}
		 */
		private get_status() : string {
			return this.m_status;
		}
		
		/**
		 * @property status
		 * @type string
		 * @readOnly
		 * @public
		 */
		get status() : string { return this.get_status(); }
		
		
		/**
		 * @member saclient.cloud.resource.ServerInstance#n_beforeStatus
		 * @type boolean
		 * @private
		 */
		private n_beforeStatus : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_beforeStatus
		 * @private
		 * @return {string}
		 */
		private get_beforeStatus() : string {
			return this.m_beforeStatus;
		}
		
		/**
		 * @property beforeStatus
		 * @type string
		 * @readOnly
		 * @public
		 */
		get beforeStatus() : string { return this.get_beforeStatus(); }
		
		
		/**
		 * @member saclient.cloud.resource.ServerInstance#n_statusChangedAt
		 * @type boolean
		 * @private
		 */
		private n_statusChangedAt : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_statusChangedAt
		 * @private
		 * @return {Date}
		 */
		private get_statusChangedAt() : Date {
			return this.m_statusChangedAt;
		}
		
		/**
		 * @property statusChangedAt
		 * @type Date
		 * @readOnly
		 * @public
		 */
		get statusChangedAt() : Date { return this.get_statusChangedAt(); }
		
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method apiDeserialize
		 * @public
		 * @param {any} r
		 */
		apiDeserialize(r:any) {
			this.isIncomplete = true;
			if (("Status" in r)) {
				this.m_status = r["Status"] == null ? null : "" + r["Status"];
				this.n_status = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("BeforeStatus" in r)) {
				this.m_beforeStatus = r["BeforeStatus"] == null ? null : "" + r["BeforeStatus"];
				this.n_beforeStatus = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("StatusChangedAt" in r)) {
				this.m_statusChangedAt = r["StatusChangedAt"] == null ? null : Util.str2date("" + r["StatusChangedAt"]);
				this.n_statusChangedAt = false;
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
			if (withClean || this.n_status) {
				ret["Status"] = this.m_status;
			};
			if (withClean || this.n_beforeStatus) {
				ret["BeforeStatus"] = this.m_beforeStatus;
			};
			if (withClean || this.n_statusChangedAt) {
				ret["StatusChangedAt"] = this.m_statusChangedAt == null ? null : Util.date2str(this.m_statusChangedAt);
			};
			return ret;
		}
		
	}
	
}

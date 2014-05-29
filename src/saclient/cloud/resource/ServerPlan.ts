/// <reference path="../Client.ts" />

/**
 * @module saclient.cloud.resource
 */
module saclient.cloud.resource {

	import Client = saclient.cloud.Client;
	
	/**
	 * サーバのプラン情報へのアクセス機能を備えたクラス。
	 * 
	 * @class ServerPlan
	 * @constructor
	 * @extends Resource
	 */
	export class ServerPlan extends saclient.cloud.resource.Resource {
		
		/**
		 * @member saclient.cloud.resource.ServerPlan#m_id
		 * @type string
		 * @protected
		 */
		m_id : string;
		
		/**
		 * @member saclient.cloud.resource.ServerPlan#m_name
		 * @type string
		 * @protected
		 */
		m_name : string;
		
		/**
		 * @member saclient.cloud.resource.ServerPlan#m_cpu
		 * @type number
		 * @protected
		 */
		m_cpu : number;
		
		/**
		 * @member saclient.cloud.resource.ServerPlan#m_memoryMib
		 * @type number
		 * @protected
		 */
		m_memoryMib : number;
		
		/**
		 * @member saclient.cloud.resource.ServerPlan#m_serviceClass
		 * @type string
		 * @protected
		 */
		m_serviceClass : string;
		
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
		 * @method get_memoryGib
		 * @protected
		 * @return {number}
		 */
		get_memoryGib() : number {
			return this.get_memoryMib() >> 10;
		}
		
		/**
		 * @property memoryGib
		 * @type number
		 * @readOnly
		 * @public
		 */
		get memoryGib() : number { return this.get_memoryGib(); }
		
		
		/**
		 * @member saclient.cloud.resource.ServerPlan#n_id
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
		 * @member saclient.cloud.resource.ServerPlan#n_name
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
		 * @member saclient.cloud.resource.ServerPlan#n_cpu
		 * @type boolean
		 * @private
		 */
		private n_cpu : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_cpu
		 * @private
		 * @return {number}
		 */
		private get_cpu() : number {
			return this.m_cpu;
		}
		
		/**
		 * @property cpu
		 * @type number
		 * @readOnly
		 * @public
		 */
		get cpu() : number { return this.get_cpu(); }
		
		
		/**
		 * @member saclient.cloud.resource.ServerPlan#n_memoryMib
		 * @type boolean
		 * @private
		 */
		private n_memoryMib : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_memoryMib
		 * @private
		 * @return {number}
		 */
		private get_memoryMib() : number {
			return this.m_memoryMib;
		}
		
		/**
		 * @property memoryMib
		 * @type number
		 * @readOnly
		 * @public
		 */
		get memoryMib() : number { return this.get_memoryMib(); }
		
		
		/**
		 * @member saclient.cloud.resource.ServerPlan#n_serviceClass
		 * @type boolean
		 * @private
		 */
		private n_serviceClass : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_serviceClass
		 * @private
		 * @return {string}
		 */
		private get_serviceClass() : string {
			return this.m_serviceClass;
		}
		
		/**
		 * @property serviceClass
		 * @type string
		 * @readOnly
		 * @public
		 */
		get serviceClass() : string { return this.get_serviceClass(); }
		
		
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
			if (("CPU" in r)) {
				this.m_cpu = r["CPU"] == null ? null : parseInt("" + r["CPU"], 10);
				this.n_cpu = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("MemoryMB" in r)) {
				this.m_memoryMib = r["MemoryMB"] == null ? null : parseInt("" + r["MemoryMB"], 10);
				this.n_memoryMib = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("ServiceClass" in r)) {
				this.m_serviceClass = r["ServiceClass"] == null ? null : "" + r["ServiceClass"];
				this.n_serviceClass = false;
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
			if (withClean || this.n_cpu) {
				ret["CPU"] = this.m_cpu;
			};
			if (withClean || this.n_memoryMib) {
				ret["MemoryMB"] = this.m_memoryMib;
			};
			if (withClean || this.n_serviceClass) {
				ret["ServiceClass"] = this.m_serviceClass;
			};
			return ret;
		}
		
	}
	
}

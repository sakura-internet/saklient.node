/// <reference path="../../../node.d.ts" />

export = DiskPlan;

import Util = require('../Util');
import Client = require('../Client');
import Resource = require('./Resource');

/**
 * ディスクのプラン情報へのアクセス機能を備えたクラス。
 * 
 * @class DiskPlan
 * @constructor
 * @extends Resource
 */
class DiskPlan extends Resource {
	
	/**
	 * @member saclient.cloud.resource.DiskPlan#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * @member saclient.cloud.resource.DiskPlan#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * @member saclient.cloud.resource.DiskPlan#m_storageClass
	 * @type string
	 * @protected
	 */
	m_storageClass : string;
	
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
	 * @member saclient.cloud.resource.DiskPlan#n_id
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
	 * @member saclient.cloud.resource.DiskPlan#n_name
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
	 * @member saclient.cloud.resource.DiskPlan#n_storageClass
	 * @type boolean
	 * @private
	 */
	private n_storageClass : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_storageClass
	 * @private
	 * @return {string}
	 */
	private get_storageClass() : string {
		return this.m_storageClass;
	}
	
	/**
	 * @property storageClass
	 * @type string
	 * @readOnly
	 * @public
	 */
	get storageClass() : string { return this.get_storageClass(); }
	
	
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
		if (("StorageClass" in r)) {
			this.m_storageClass = r["StorageClass"] == null ? null : "" + r["StorageClass"];
			this.n_storageClass = false;
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
		if (withClean || this.n_storageClass) {
			ret["StorageClass"] = this.m_storageClass;
		};
		return ret;
	}
	
}


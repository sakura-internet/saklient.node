/// <reference path="../../../node.d.ts" />

export = InternetPlan;

import Util = require('../Util');
import Client = require('../Client');
import Resource = require('./Resource');

/**
 * ルータのプラン情報へのアクセス機能を備えたクラス。
 * 
 * @class InternetPlan
 * @constructor
 * @extends Resource
 */
class InternetPlan extends Resource {
	
	/**
	 * @member saclient.cloud.resource.InternetPlan#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * @member saclient.cloud.resource.InternetPlan#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * @member saclient.cloud.resource.InternetPlan#m_bandWidthMbps
	 * @type number
	 * @protected
	 */
	m_bandWidthMbps : number;
	
	/**
	 * @member saclient.cloud.resource.InternetPlan#m_serviceClass
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
	 * @member saclient.cloud.resource.InternetPlan#n_id
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
	 * @member saclient.cloud.resource.InternetPlan#n_name
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
	 * @member saclient.cloud.resource.InternetPlan#n_bandWidthMbps
	 * @type boolean
	 * @private
	 */
	private n_bandWidthMbps : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_bandWidthMbps
	 * @private
	 * @return {number}
	 */
	private get_bandWidthMbps() : number {
		return this.m_bandWidthMbps;
	}
	
	/**
	 * @property bandWidthMbps
	 * @type number
	 * @readOnly
	 * @public
	 */
	get bandWidthMbps() : number { return this.get_bandWidthMbps(); }
	
	
	/**
	 * @member saclient.cloud.resource.InternetPlan#n_serviceClass
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
	 * @method apiDeserializeImpl
	 * @protected
	 * @param {any} r
	 */
	apiDeserializeImpl(r:any) {
		this.isNew = r == null;
		if (this.isNew) {
			r = {  };
		};
		this.isIncomplete = false;
		if (("ID" in r)) {
			this.m_id = r["ID"] == null ? null : "" + r["ID"];
		}
		else {
			this.m_id = null;
			this.isIncomplete = true;
		};
		this.n_id = false;
		if (("Name" in r)) {
			this.m_name = r["Name"] == null ? null : "" + r["Name"];
		}
		else {
			this.m_name = null;
			this.isIncomplete = true;
		};
		this.n_name = false;
		if (("BandWidthMbps" in r)) {
			this.m_bandWidthMbps = r["BandWidthMbps"] == null ? null : parseInt("" + r["BandWidthMbps"], 10);
		}
		else {
			this.m_bandWidthMbps = null;
			this.isIncomplete = true;
		};
		this.n_bandWidthMbps = false;
		if (("ServiceClass" in r)) {
			this.m_serviceClass = r["ServiceClass"] == null ? null : "" + r["ServiceClass"];
		}
		else {
			this.m_serviceClass = null;
			this.isIncomplete = true;
		};
		this.n_serviceClass = false;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method apiSerializeImpl
	 * @protected
	 * @param {boolean} withClean=false
	 * @return {any}
	 */
	apiSerializeImpl(withClean:boolean=false) : any {
		var ret:any = {  };
		if (withClean || this.n_id) {
			ret["ID"] = this.m_id;
		};
		if (withClean || this.n_name) {
			ret["Name"] = this.m_name;
		};
		if (withClean || this.n_bandWidthMbps) {
			ret["BandWidthMbps"] = this.m_bandWidthMbps;
		};
		if (withClean || this.n_serviceClass) {
			ret["ServiceClass"] = this.m_serviceClass;
		};
		return ret;
	}
	
}


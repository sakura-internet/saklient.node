/// <reference path="../../../node.d.ts" />

export = RouterPlan;

import Util = require('../../Util');
import Client = require('../Client');
import Resource = require('./Resource');

/**
 * ルータのプラン情報へのアクセス機能を備えたクラス。
 * 
 * @class RouterPlan
 * @constructor
 * @extends Resource
 */
class RouterPlan extends Resource {
	
	/**
	 * @member saclient.cloud.resource.RouterPlan#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * @member saclient.cloud.resource.RouterPlan#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * @member saclient.cloud.resource.RouterPlan#m_bandWidthMbps
	 * @type number
	 * @protected
	 */
	m_bandWidthMbps : number;
	
	/**
	 * @member saclient.cloud.resource.RouterPlan#m_serviceClass
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
		Util.validateArgCount(arguments.length, 0);
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
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(client, "saclient.cloud.Client");
		Util.validateType(r, "any");
		this.apiDeserialize(r);
	}
	
	/**
	 * @member saclient.cloud.resource.RouterPlan#n_id
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
		Util.validateArgCount(arguments.length, 0);
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
	 * @member saclient.cloud.resource.RouterPlan#n_name
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
		Util.validateArgCount(arguments.length, 0);
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
	 * @member saclient.cloud.resource.RouterPlan#n_bandWidthMbps
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
		Util.validateArgCount(arguments.length, 0);
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
	 * @member saclient.cloud.resource.RouterPlan#n_serviceClass
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
		Util.validateArgCount(arguments.length, 0);
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(r, "any");
		this.isNew = r == null;
		if (this.isNew) {
			r = {  };
		};
		this.isIncomplete = false;
		if (Util.existsPath(r, "ID")) {
			this.m_id = Util.getByPath(r, "ID") == null ? null : "" + Util.getByPath(r, "ID");
		}
		else {
			this.m_id = null;
			this.isIncomplete = true;
		};
		this.n_id = false;
		if (Util.existsPath(r, "Name")) {
			this.m_name = Util.getByPath(r, "Name") == null ? null : "" + Util.getByPath(r, "Name");
		}
		else {
			this.m_name = null;
			this.isIncomplete = true;
		};
		this.n_name = false;
		if (Util.existsPath(r, "BandWidthMbps")) {
			this.m_bandWidthMbps = Util.getByPath(r, "BandWidthMbps") == null ? null : parseInt("" + Util.getByPath(r, "BandWidthMbps"), 10);
		}
		else {
			this.m_bandWidthMbps = null;
			this.isIncomplete = true;
		};
		this.n_bandWidthMbps = false;
		if (Util.existsPath(r, "ServiceClass")) {
			this.m_serviceClass = Util.getByPath(r, "ServiceClass") == null ? null : "" + Util.getByPath(r, "ServiceClass");
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
		Util.validateArgCount(arguments.length, 0);
		Util.validateType(withClean, "boolean");
		var ret:any = {  };
		if (withClean || this.n_id) {
			Util.setByPath(ret, "ID", this.m_id);
		};
		if (withClean || this.n_name) {
			Util.setByPath(ret, "Name", this.m_name);
		};
		if (withClean || this.n_bandWidthMbps) {
			Util.setByPath(ret, "BandWidthMbps", this.m_bandWidthMbps);
		};
		if (withClean || this.n_serviceClass) {
			Util.setByPath(ret, "ServiceClass", this.m_serviceClass);
		};
		return ret;
	}
	
}


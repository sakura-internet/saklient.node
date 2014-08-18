/// <reference path="../../../node.d.ts" />

export = ServerPlan;

import Util = require('../../Util');
import Client = require('../Client');
import Resource = require('./Resource');

'use strict';

/**
 * サーバのプラン情報へのアクセス機能を備えたクラス。
 * 
 * @class ServerPlan
 * @constructor
 * @extends Resource
 */
class ServerPlan extends Resource {
	
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
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/product/server";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "ServerPlan";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "ServerPlans";
	}
	
	/**
	 * @method className
	 * @public
	 * @return {string}
	 */
	className() : string {
		return "ServerPlan";
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
	 * @private
	 * @constructor
	 * @public
	 * @param {any} obj
	 * @param {Client} client
	 * @param {boolean} wrapped=false
	 */
	constructor(client:Client, obj:any, wrapped:boolean=false) {
		super(client);
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(client, "saclient.cloud.Client");
		Util.validateType(wrapped, "boolean");
		this.apiDeserialize(obj, wrapped);
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
	 * @method apiDeserializeImpl
	 * @protected
	 * @param {any} r
	 */
	apiDeserializeImpl(r:any) {
		Util.validateArgCount(arguments.length, 1);
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
		if (Util.existsPath(r, "CPU")) {
			this.m_cpu = Util.getByPath(r, "CPU") == null ? null : parseInt("" + Util.getByPath(r, "CPU"), 10);
		}
		else {
			this.m_cpu = null;
			this.isIncomplete = true;
		};
		this.n_cpu = false;
		if (Util.existsPath(r, "MemoryMB")) {
			this.m_memoryMib = Util.getByPath(r, "MemoryMB") == null ? null : parseInt("" + Util.getByPath(r, "MemoryMB"), 10);
		}
		else {
			this.m_memoryMib = null;
			this.isIncomplete = true;
		};
		this.n_memoryMib = false;
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
		Util.validateType(withClean, "boolean");
		var ret:any = {  };
		if (withClean || this.n_id) {
			Util.setByPath(ret, "ID", this.m_id);
		};
		if (withClean || this.n_name) {
			Util.setByPath(ret, "Name", this.m_name);
		};
		if (withClean || this.n_cpu) {
			Util.setByPath(ret, "CPU", this.m_cpu);
		};
		if (withClean || this.n_memoryMib) {
			Util.setByPath(ret, "MemoryMB", this.m_memoryMib);
		};
		if (withClean || this.n_serviceClass) {
			Util.setByPath(ret, "ServiceClass", this.m_serviceClass);
		};
		return ret;
	}
	
}


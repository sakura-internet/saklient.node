/// <reference path="../../../node.d.ts" />

export = Ipv4Net;

import Util = require('../../Util');
import Client = require('../Client');
import Resource = require('./Resource');
import Swytch = require('./Swytch');

'use strict';

/**
 * IPv4ネットワークのリソース情報へのアクセス機能や操作機能を備えたクラス。
 * 
 * @class Ipv4Net
 * @constructor
 * @extends Resource
 */
class Ipv4Net extends Resource {
	
	/**
	 * @member saclient.cloud.resource.Ipv4Net#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * @member saclient.cloud.resource.Ipv4Net#m_address
	 * @type string
	 * @protected
	 */
	m_address : string;
	
	/**
	 * @member saclient.cloud.resource.Ipv4Net#m_maskLen
	 * @type number
	 * @protected
	 */
	m_maskLen : number;
	
	/**
	 * @member saclient.cloud.resource.Ipv4Net#m_defaultRoute
	 * @type string
	 * @protected
	 */
	m_defaultRoute : string;
	
	/**
	 * @member saclient.cloud.resource.Ipv4Net#m_nextHop
	 * @type string
	 * @protected
	 */
	m_nextHop : string;
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/subnet";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Subnet";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Subnets";
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
	 * 最新のリソース情報を再取得します。
	 * 
	 * @method reload
	 * @public
	 * @return {Swytch} this
	 */
	reload() : Swytch {
		return (<Swytch><any>(this._reload()));
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
	 * @member saclient.cloud.resource.Ipv4Net#n_id
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
	 * @member saclient.cloud.resource.Ipv4Net#n_address
	 * @type boolean
	 * @private
	 */
	private n_address : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_address
	 * @private
	 * @return {string}
	 */
	private get_address() : string {
		return this.m_address;
	}
	
	/**
	 * @property address
	 * @type string
	 * @readOnly
	 * @public
	 */
	get address() : string { return this.get_address(); }
	
	
	/**
	 * @member saclient.cloud.resource.Ipv4Net#n_maskLen
	 * @type boolean
	 * @private
	 */
	private n_maskLen : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_maskLen
	 * @private
	 * @return {number}
	 */
	private get_maskLen() : number {
		return this.m_maskLen;
	}
	
	/**
	 * @property maskLen
	 * @type number
	 * @readOnly
	 * @public
	 */
	get maskLen() : number { return this.get_maskLen(); }
	
	
	/**
	 * @member saclient.cloud.resource.Ipv4Net#n_defaultRoute
	 * @type boolean
	 * @private
	 */
	private n_defaultRoute : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_defaultRoute
	 * @private
	 * @return {string}
	 */
	private get_defaultRoute() : string {
		return this.m_defaultRoute;
	}
	
	/**
	 * @property defaultRoute
	 * @type string
	 * @readOnly
	 * @public
	 */
	get defaultRoute() : string { return this.get_defaultRoute(); }
	
	
	/**
	 * @member saclient.cloud.resource.Ipv4Net#n_nextHop
	 * @type boolean
	 * @private
	 */
	private n_nextHop : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_nextHop
	 * @private
	 * @return {string}
	 */
	private get_nextHop() : string {
		return this.m_nextHop;
	}
	
	/**
	 * @property nextHop
	 * @type string
	 * @readOnly
	 * @public
	 */
	get nextHop() : string { return this.get_nextHop(); }
	
	
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
		if (Util.existsPath(r, "NetworkAddress")) {
			this.m_address = Util.getByPath(r, "NetworkAddress") == null ? null : "" + Util.getByPath(r, "NetworkAddress");
		}
		else {
			this.m_address = null;
			this.isIncomplete = true;
		};
		this.n_address = false;
		if (Util.existsPath(r, "NetworkMaskLen")) {
			this.m_maskLen = Util.getByPath(r, "NetworkMaskLen") == null ? null : parseInt("" + Util.getByPath(r, "NetworkMaskLen"), 10);
		}
		else {
			this.m_maskLen = null;
			this.isIncomplete = true;
		};
		this.n_maskLen = false;
		if (Util.existsPath(r, "DefaultRoute")) {
			this.m_defaultRoute = Util.getByPath(r, "DefaultRoute") == null ? null : "" + Util.getByPath(r, "DefaultRoute");
		}
		else {
			this.m_defaultRoute = null;
			this.isIncomplete = true;
		};
		this.n_defaultRoute = false;
		if (Util.existsPath(r, "NextHop")) {
			this.m_nextHop = Util.getByPath(r, "NextHop") == null ? null : "" + Util.getByPath(r, "NextHop");
		}
		else {
			this.m_nextHop = null;
			this.isIncomplete = true;
		};
		this.n_nextHop = false;
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
		if (withClean || this.n_address) {
			Util.setByPath(ret, "NetworkAddress", this.m_address);
		};
		if (withClean || this.n_maskLen) {
			Util.setByPath(ret, "NetworkMaskLen", this.m_maskLen);
		};
		if (withClean || this.n_defaultRoute) {
			Util.setByPath(ret, "DefaultRoute", this.m_defaultRoute);
		};
		if (withClean || this.n_nextHop) {
			Util.setByPath(ret, "NextHop", this.m_nextHop);
		};
		return ret;
	}
	
}


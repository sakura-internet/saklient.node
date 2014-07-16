/// <reference path="../../../node.d.ts" />

export = IPv6Net;

import Util = require('../Util');
import Client = require('../Client');
import Resource = require('./Resource');

/**
 * IPv6ネットワークのリソース情報へのアクセス機能や操作機能を備えたクラス。
 * 
 * @class IPv6Net
 * @constructor
 * @extends Resource
 */
class IPv6Net extends Resource {
	
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
		if (("IPv6Prefix" in r)) {
			this.m_ipv6Prefix = r["IPv6Prefix"] == null ? null : "" + r["IPv6Prefix"];
		}
		else {
			this.m_ipv6Prefix = null;
			this.isIncomplete = true;
		};
		this.n_ipv6Prefix = false;
		if (("IPv6PrefixLen" in r)) {
			this.m_ipv6PrefixLen = r["IPv6PrefixLen"] == null ? null : parseInt("" + r["IPv6PrefixLen"], 10);
		}
		else {
			this.m_ipv6PrefixLen = null;
			this.isIncomplete = true;
		};
		this.n_ipv6PrefixLen = false;
		if (("IPv6PrefixTail" in r)) {
			this.m_ipv6PrefixTail = r["IPv6PrefixTail"] == null ? null : "" + r["IPv6PrefixTail"];
		}
		else {
			this.m_ipv6PrefixTail = null;
			this.isIncomplete = true;
		};
		this.n_ipv6PrefixTail = false;
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


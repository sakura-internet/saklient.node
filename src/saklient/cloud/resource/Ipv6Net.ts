/// <reference path="../../../node.d.ts" />

export = Ipv6Net;

import Util = require('../../Util');
import Client = require('../Client');
import Resource = require('./Resource');
import Swytch = require('./Swytch');

'use strict';

/**
 * IPv6ネットワークの実体1つに対応し、属性の取得や操作を行うためのクラス。
 * 
 * @module saklient.cloud.resource.Ipv6Net
 * @class Ipv6Net
 * @constructor
 * @extends Resource
 */
class Ipv6Net extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saklient.cloud.resource.Ipv6Net#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * ネットワークプレフィックス
	 * 
	 * @member saklient.cloud.resource.Ipv6Net#m_prefix
	 * @type string
	 * @protected
	 */
	m_prefix : string;
	
	/**
	 * ネットワークプレフィックス長
	 * 
	 * @member saklient.cloud.resource.Ipv6Net#m_prefixLen
	 * @type number
	 * @protected
	 */
	m_prefixLen : number;
	
	/**
	 * このネットワーク範囲における最後のIPv6アドレス
	 * 
	 * @member saklient.cloud.resource.Ipv6Net#m_prefixTail
	 * @type string
	 * @protected
	 */
	m_prefixTail : string;
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/ipv6net";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "IPv6Net";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "IPv6Nets";
	}
	
	/**
	 * @private
	 * @method _className
	 * @return {string}
	 */
	_className() : string {
		return "Ipv6Net";
	}
	
	/**
	 * @private
	 * @method _id
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
	 * @param {Client} client
	 * @param {any} obj
	 * @param {boolean} wrapped=false
	 */
	constructor(client:Client, obj:any, wrapped:boolean=false) {
		super(client);
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(client, "saklient.cloud.Client");
		Util.validateType(wrapped, "boolean");
		this.apiDeserialize(obj, wrapped);
	}
	
	/**
	 * @member saklient.cloud.resource.Ipv6Net#n_id
	 * @default false
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
	 * ID
	 * 
	 * @property id
	 * @type string
	 * @readOnly
	 * @public
	 */
	get id() : string { return this.get_id(); }
	
	
	/**
	 * @member saklient.cloud.resource.Ipv6Net#n_prefix
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_prefix : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_prefix
	 * @private
	 * @return {string}
	 */
	private get_prefix() : string {
		return this.m_prefix;
	}
	
	/**
	 * ネットワークプレフィックス
	 * 
	 * @property prefix
	 * @type string
	 * @readOnly
	 * @public
	 */
	get prefix() : string { return this.get_prefix(); }
	
	
	/**
	 * @member saklient.cloud.resource.Ipv6Net#n_prefixLen
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_prefixLen : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_prefixLen
	 * @private
	 * @return {number}
	 */
	private get_prefixLen() : number {
		return this.m_prefixLen;
	}
	
	/**
	 * ネットワークプレフィックス長
	 * 
	 * @property prefixLen
	 * @type number
	 * @readOnly
	 * @public
	 */
	get prefixLen() : number { return this.get_prefixLen(); }
	
	
	/**
	 * @member saklient.cloud.resource.Ipv6Net#n_prefixTail
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_prefixTail : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_prefixTail
	 * @private
	 * @return {string}
	 */
	private get_prefixTail() : string {
		return this.m_prefixTail;
	}
	
	/**
	 * このネットワーク範囲における最後のIPv6アドレス
	 * 
	 * @property prefixTail
	 * @type string
	 * @readOnly
	 * @public
	 */
	get prefixTail() : string { return this.get_prefixTail(); }
	
	
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
		if (Util.existsPath(r, "IPv6Prefix")) {
			this.m_prefix = Util.getByPath(r, "IPv6Prefix") == null ? null : "" + Util.getByPath(r, "IPv6Prefix");
		}
		else {
			this.m_prefix = null;
			this.isIncomplete = true;
		};
		this.n_prefix = false;
		if (Util.existsPath(r, "IPv6PrefixLen")) {
			this.m_prefixLen = Util.getByPath(r, "IPv6PrefixLen") == null ? null : parseInt("" + Util.getByPath(r, "IPv6PrefixLen"), 10);
		}
		else {
			this.m_prefixLen = null;
			this.isIncomplete = true;
		};
		this.n_prefixLen = false;
		if (Util.existsPath(r, "IPv6PrefixTail")) {
			this.m_prefixTail = Util.getByPath(r, "IPv6PrefixTail") == null ? null : "" + Util.getByPath(r, "IPv6PrefixTail");
		}
		else {
			this.m_prefixTail = null;
			this.isIncomplete = true;
		};
		this.n_prefixTail = false;
	}
	
	/**
	 * @private
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
		if (withClean || this.n_prefix) {
			Util.setByPath(ret, "IPv6Prefix", this.m_prefix);
		};
		if (withClean || this.n_prefixLen) {
			Util.setByPath(ret, "IPv6PrefixLen", this.m_prefixLen);
		};
		if (withClean || this.n_prefixTail) {
			Util.setByPath(ret, "IPv6PrefixTail", this.m_prefixTail);
		};
		return ret;
	}
	
}


/// <reference path="../../../node.d.ts" />

export = Iface;

import Util = require('../Util');
import Client = require('../Client');
import Resource = require('./Resource');

/**
 * インタフェースのリソース情報へのアクセス機能や操作機能を備えたクラス。
 * 
 * @class Iface
 * @constructor
 * @extends Resource
 */
class Iface extends Resource {
	
	/**
	 * @member saclient.cloud.resource.Iface#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * @member saclient.cloud.resource.Iface#m_macAddress
	 * @type string
	 * @protected
	 */
	m_macAddress : string;
	
	/**
	 * @member saclient.cloud.resource.Iface#m_ipAddress
	 * @type string
	 * @protected
	 */
	m_ipAddress : string;
	
	/**
	 * @member saclient.cloud.resource.Iface#m_userIpAddress
	 * @type string
	 * @protected
	 */
	m_userIpAddress : string;
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/interface";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Interface";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Interfaces";
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
	 * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
	 * 
	 * @method save
	 * @chainable
	 * @public
	 * @return {Iface} this
	 */
	save() : Iface {
		return (<Iface><any>(this._save()));
	}
	
	/**
	 * 最新のリソース情報を再取得します。
	 * 
	 * @method reload
	 * @chainable
	 * @public
	 * @return {Iface} this
	 */
	reload() : Iface {
		return (<Iface><any>(this._reload()));
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
	 * @member saclient.cloud.resource.Iface#n_id
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
	 * @member saclient.cloud.resource.Iface#n_macAddress
	 * @type boolean
	 * @private
	 */
	private n_macAddress : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_macAddress
	 * @private
	 * @return {string}
	 */
	private get_macAddress() : string {
		return this.m_macAddress;
	}
	
	/**
	 * @property macAddress
	 * @type string
	 * @readOnly
	 * @public
	 */
	get macAddress() : string { return this.get_macAddress(); }
	
	
	/**
	 * @member saclient.cloud.resource.Iface#n_ipAddress
	 * @type boolean
	 * @private
	 */
	private n_ipAddress : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_ipAddress
	 * @private
	 * @return {string}
	 */
	private get_ipAddress() : string {
		return this.m_ipAddress;
	}
	
	/**
	 * @property ipAddress
	 * @type string
	 * @readOnly
	 * @public
	 */
	get ipAddress() : string { return this.get_ipAddress(); }
	
	
	/**
	 * @member saclient.cloud.resource.Iface#n_userIpAddress
	 * @type boolean
	 * @private
	 */
	private n_userIpAddress : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_userIpAddress
	 * @private
	 * @return {string}
	 */
	private get_userIpAddress() : string {
		return this.m_userIpAddress;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_userIpAddress
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	private set_userIpAddress(v:string) : string {
		this.m_userIpAddress = v;
		this.n_userIpAddress = true;
		return this.m_userIpAddress;
	}
	
	/**
	 * @property userIpAddress
	 * @type string
	 * @public
	 */
	get userIpAddress() : string { return this.get_userIpAddress(); }
	set userIpAddress(v:string) { this.set_userIpAddress(v); }
	
	
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
		if (("MACAddress" in r)) {
			this.m_macAddress = r["MACAddress"] == null ? null : "" + r["MACAddress"];
		}
		else {
			this.m_macAddress = null;
			this.isIncomplete = true;
		};
		this.n_macAddress = false;
		if (("IPAddress" in r)) {
			this.m_ipAddress = r["IPAddress"] == null ? null : "" + r["IPAddress"];
		}
		else {
			this.m_ipAddress = null;
			this.isIncomplete = true;
		};
		this.n_ipAddress = false;
		if (("UserIPAddress" in r)) {
			this.m_userIpAddress = r["UserIPAddress"] == null ? null : "" + r["UserIPAddress"];
		}
		else {
			this.m_userIpAddress = null;
			this.isIncomplete = true;
		};
		this.n_userIpAddress = false;
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
		if (withClean || this.n_macAddress) {
			ret["MACAddress"] = this.m_macAddress;
		};
		if (withClean || this.n_ipAddress) {
			ret["IPAddress"] = this.m_ipAddress;
		};
		if (withClean || this.n_userIpAddress) {
			ret["UserIPAddress"] = this.m_userIpAddress;
		};
		return ret;
	}
	
}


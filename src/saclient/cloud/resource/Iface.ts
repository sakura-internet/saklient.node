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
	 * サーバ
	 * 
	 * @member saclient.cloud.resource.Iface#m_serverId
	 * @type string
	 * @protected
	 */
	m_serverId : string;
	
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
	 * @member saclient.cloud.resource.Iface#n_serverId
	 * @type boolean
	 * @private
	 */
	private n_serverId : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_serverId
	 * @private
	 * @return {string}
	 */
	private get_serverId() : string {
		return this.m_serverId;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_serverId
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	private set_serverId(v:string) : string {
		this.m_serverId = v;
		this.n_serverId = true;
		return this.m_serverId;
	}
	
	/**
	 * サーバ
	 * 
	 * @property serverId
	 * @type string
	 * @public
	 */
	get serverId() : string { return this.get_serverId(); }
	set serverId(v:string) { this.set_serverId(v); }
	
	
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
		if (Util.existsPath(r, "ID")) {
			this.m_id = Util.getByPath(r, "ID") == null ? null : "" + Util.getByPath(r, "ID");
		}
		else {
			this.m_id = null;
			this.isIncomplete = true;
		};
		this.n_id = false;
		if (Util.existsPath(r, "MACAddress")) {
			this.m_macAddress = Util.getByPath(r, "MACAddress") == null ? null : "" + Util.getByPath(r, "MACAddress");
		}
		else {
			this.m_macAddress = null;
			this.isIncomplete = true;
		};
		this.n_macAddress = false;
		if (Util.existsPath(r, "IPAddress")) {
			this.m_ipAddress = Util.getByPath(r, "IPAddress") == null ? null : "" + Util.getByPath(r, "IPAddress");
		}
		else {
			this.m_ipAddress = null;
			this.isIncomplete = true;
		};
		this.n_ipAddress = false;
		if (Util.existsPath(r, "UserIPAddress")) {
			this.m_userIpAddress = Util.getByPath(r, "UserIPAddress") == null ? null : "" + Util.getByPath(r, "UserIPAddress");
		}
		else {
			this.m_userIpAddress = null;
			this.isIncomplete = true;
		};
		this.n_userIpAddress = false;
		if (Util.existsPath(r, "Server.ID")) {
			this.m_serverId = Util.getByPath(r, "Server.ID") == null ? null : "" + Util.getByPath(r, "Server.ID");
		}
		else {
			this.m_serverId = null;
			this.isIncomplete = true;
		};
		this.n_serverId = false;
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
		if (withClean || this.n_serverId) {
			ret["Server.ID"] = this.m_serverId;
		};
		return ret;
	}
	
}


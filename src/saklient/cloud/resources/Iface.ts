/// <reference path="../../../node.d.ts" />

export = Iface;

import Util = require('../../Util');
import SaklientException = require('../../errors/SaklientException');
import Client = require('../Client');
import Resource = require('./Resource');
import Swytch = require('./Swytch');
import IfaceActivity = require('./IfaceActivity');

'use strict';

/**
 * インタフェースの実体1つに対応し、属性の取得や操作を行うためのクラス。
 * 
 * @module saklient.cloud.resources.Iface
 * @class Iface
 * @constructor
 * @extends Resource
 */
class Iface extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saklient.cloud.resources.Iface#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * MACアドレス
	 * 
	 * @member saklient.cloud.resources.Iface#m_macAddress
	 * @type string
	 * @protected
	 */
	m_macAddress : string;
	
	/**
	 * IPv4アドレス（共有セグメントによる自動割当）
	 * 
	 * @member saklient.cloud.resources.Iface#m_ipAddress
	 * @type string
	 * @protected
	 */
	m_ipAddress : string;
	
	/**
	 * ユーザ設定IPv4アドレス
	 * 
	 * @member saklient.cloud.resources.Iface#m_userIpAddress
	 * @type string
	 * @protected
	 */
	m_userIpAddress : string;
	
	/**
	 * このインタフェースが取り付けられているサーバのID
	 * 
	 * @member saklient.cloud.resources.Iface#m_serverId
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
	 * @method _className
	 * @return {string}
	 */
	_className() : string {
		return "Iface";
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
	 * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
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
	 * @member saklient.cloud.resources.Iface#_activity
	 * @type IfaceActivity
	 * @protected
	 */
	_activity : IfaceActivity;
	
	/**
	 * @method get_activity
	 * @private
	 * @return {IfaceActivity}
	 */
	get_activity() : IfaceActivity {
		return this._activity;
	}
	
	/**
	 * アクティビティ
	 * 
	 * @property activity
	 * @type IfaceActivity
	 * @readOnly
	 * @public
	 */
	get activity() : IfaceActivity { return this.get_activity(); }
	
	
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
		this._activity = new IfaceActivity(client);
		this.apiDeserialize(obj, wrapped);
	}
	
	/**
	 * @private
	 * @method _onAfterApiDeserialize
	 * @protected
	 * @param {any} r
	 * @param {any} root
	 * @return {void}
	 */
	_onAfterApiDeserialize(r:any, root:any) : void {
		Util.validateArgCount(arguments.length, 2);
		if (r != null) {
			this._activity.setSourceId(this._id());
		};
	}
	
	/**
	 * スイッチに接続します。
	 * 
	 * @method connectToSwytch
	 * @chainable
	 * @public
	 * @param {Swytch} swytch 接続先のスイッチ。
	 * @return {Iface} this
	 */
	connectToSwytch(swytch:Swytch) : Iface {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(swytch, "saklient.cloud.resources.Swytch");
		this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/to/switch/" + Util.urlEncode(swytch._id()));
		return this.reload();
	}
	
	/**
	 * 共有セグメントに接続します。
	 * 
	 * @method connectToSharedSegment
	 * @chainable
	 * @public
	 * @return {Iface} this
	 */
	connectToSharedSegment() : Iface {
		this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/to/switch/shared");
		return this.reload();
	}
	
	/**
	 * スイッチから切断します。
	 * 
	 * @method disconnectFromSwytch
	 * @chainable
	 * @public
	 * @return {Iface} this
	 */
	disconnectFromSwytch() : Iface {
		this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/to/switch");
		return this.reload();
	}
	
	/**
	 * @member saklient.cloud.resources.Iface#n_id
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
	 * @member saklient.cloud.resources.Iface#n_macAddress
	 * @default false
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
	 * MACアドレス
	 * 
	 * @property macAddress
	 * @type string
	 * @readOnly
	 * @public
	 */
	get macAddress() : string { return this.get_macAddress(); }
	
	
	/**
	 * @member saklient.cloud.resources.Iface#n_ipAddress
	 * @default false
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
	 * IPv4アドレス（共有セグメントによる自動割当）
	 * 
	 * @property ipAddress
	 * @type string
	 * @readOnly
	 * @public
	 */
	get ipAddress() : string { return this.get_ipAddress(); }
	
	
	/**
	 * @member saklient.cloud.resources.Iface#n_userIpAddress
	 * @default false
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		this.m_userIpAddress = v;
		this.n_userIpAddress = true;
		return this.m_userIpAddress;
	}
	
	/**
	 * ユーザ設定IPv4アドレス
	 * 
	 * @property userIpAddress
	 * @type string
	 * @public
	 */
	get userIpAddress() : string { return this.get_userIpAddress(); }
	set userIpAddress(v:string) { this.set_userIpAddress(v); }
	
	
	/**
	 * @member saklient.cloud.resources.Iface#n_serverId
	 * @default false
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		if (!this.isNew) {
			throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.Iface#serverId");
		};
		this.m_serverId = v;
		this.n_serverId = true;
		return this.m_serverId;
	}
	
	/**
	 * このインタフェースが取り付けられているサーバのID
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
	 * @private
	 * @method apiSerializeImpl
	 * @protected
	 * @param {boolean} withClean=false
	 * @return {any}
	 */
	apiSerializeImpl(withClean:boolean=false) : any {
		Util.validateType(withClean, "boolean");
		var missing:string[] = [];
		var ret:any = {  };
		if (withClean || this.n_id) {
			Util.setByPath(ret, "ID", this.m_id);
		};
		if (withClean || this.n_macAddress) {
			Util.setByPath(ret, "MACAddress", this.m_macAddress);
		};
		if (withClean || this.n_ipAddress) {
			Util.setByPath(ret, "IPAddress", this.m_ipAddress);
		};
		if (withClean || this.n_userIpAddress) {
			Util.setByPath(ret, "UserIPAddress", this.m_userIpAddress);
		};
		if (withClean || this.n_serverId) {
			Util.setByPath(ret, "Server.ID", this.m_serverId);
		}
		else {
			if (this.isNew) {
				missing.push("serverId");
			};
		};
		if (missing.length > 0) {
			throw new SaklientException("required_field", "Required fields must be set before the Iface creation: " + missing.join(", "));
		};
		return ret;
	}
	
}


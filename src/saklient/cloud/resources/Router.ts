/// <reference path="../../../node.d.ts" />

export = Router;

import Util = require('../../Util');
import HttpException = require('../../errors/HttpException');
import SaklientException = require('../../errors/SaklientException');
import Client = require('../Client');
import Resource = require('./Resource');
import Icon = require('./Icon');
import Swytch = require('./Swytch');
import Ipv4Net = require('./Ipv4Net');
import Ipv6Net = require('./Ipv6Net');
import RouterActivity = require('./RouterActivity');
import Model_Swytch = require('../models/Model_Swytch');

'use strict';

/**
 * ルータの実体1つに対応し、属性の取得や操作を行うためのクラス。
 * 
 * @module saklient.cloud.resources.Router
 * @class Router
 * @constructor
 * @extends Resource
 */
class Router extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saklient.cloud.resources.Router#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * 名前
	 * 
	 * @member saklient.cloud.resources.Router#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * 説明
	 * 
	 * @member saklient.cloud.resources.Router#m_description
	 * @type string
	 * @protected
	 */
	m_description : string;
	
	/**
	 * ネットワークのマスク長
	 * 
	 * @member saklient.cloud.resources.Router#m_networkMaskLen
	 * @type number
	 * @protected
	 */
	m_networkMaskLen : number;
	
	/**
	 * 帯域幅
	 * 
	 * @member saklient.cloud.resources.Router#m_bandWidthMbps
	 * @type number
	 * @protected
	 */
	m_bandWidthMbps : number;
	
	/**
	 * スイッチ
	 * 
	 * @member saklient.cloud.resources.Router#m_swytchId
	 * @type string
	 * @protected
	 */
	m_swytchId : string;
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/internet";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Internet";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Internet";
	}
	
	/**
	 * @private
	 * @method _className
	 * @return {string}
	 */
	_className() : string {
		return "Router";
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
	 * @return {Router} this
	 */
	save() : Router {
		return (<Router><any>(this._save()));
	}
	
	/**
	 * 最新のリソース情報を再取得します。
	 * 
	 * @method reload
	 * @chainable
	 * @public
	 * @return {Router} this
	 */
	reload() : Router {
		return (<Router><any>(this._reload()));
	}
	
	/**
	 * @private
	 * @member saklient.cloud.resources.Router#_activity
	 * @type RouterActivity
	 * @protected
	 */
	_activity : RouterActivity;
	
	/**
	 * @method get_activity
	 * @private
	 * @return {RouterActivity}
	 */
	get_activity() : RouterActivity {
		return this._activity;
	}
	
	/**
	 * アクティビティ
	 * 
	 * @property activity
	 * @type RouterActivity
	 * @readOnly
	 * @public
	 */
	get activity() : RouterActivity { return this.get_activity(); }
	
	
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
		this._activity = new RouterActivity(client);
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
	 * 作成中のルータが利用可能になるまで待機します。
	 * 
	 * @private
	 * @method afterCreate
	 * @param {number} timeoutSec
	 * @param {(Router, boolean) => void} callback
	 * @return {void}
	 */
	afterCreate(timeoutSec:number, callback:(Router, boolean) => void) : void {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(timeoutSec, "number");
		Util.validateType(callback, "function");
		var ret:boolean = this.sleepWhileCreating(timeoutSec);
		callback(this, ret);
	}
	
	/**
	 * 作成中のルータが利用可能になるまで待機します。
	 * 
	 * @method sleepWhileCreating
	 * @public
	 * @param {number} timeoutSec=120
	 * @return {boolean} 成功時はtrue、タイムアウトやエラーによる失敗時はfalseを返します。
	 */
	sleepWhileCreating(timeoutSec:number=120) : boolean {
		Util.validateType(timeoutSec, "number");
		var step:number = 3;
		var isOk:boolean = false;
		while (0 < timeoutSec) {
			try {
				if (this.exists()) {
					this.reload();
					isOk = true;
				};
			}
			catch (__ex) {
				if (__ex instanceof HttpException) {
					var ex = __ex;
					{}
				}
			};
			timeoutSec -= step;
			if (isOk) {
				timeoutSec = 0;
			};
			if (0 < timeoutSec) {
				Util.sleep(step);
			};
		};
		return isOk;
	}
	
	/**
	 * このルータが接続されているスイッチを取得します。
	 * 
	 * @method getSwytch
	 * @public
	 * @return {Swytch}
	 */
	getSwytch() : Swytch {
		var model:any = Util.createClassInstance("saklient.cloud.models.Model_Swytch", [this._client]);
		var id:string = this.get_swytchId();
		return model.getById(id);
	}
	
	/**
	 * このルータ＋スイッチでIPv6アドレスを有効にします。
	 * 
	 * @method addIpv6Net
	 * @public
	 * @return {Ipv6Net} 有効化されたIPv6ネットワーク
	 */
	addIpv6Net() : Ipv6Net {
		var result:any = this._client.request("POST", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/ipv6net");
		this.reload();
		return new Ipv6Net(this._client, result["IPv6Net"]);
	}
	
	/**
	 * このルータ＋スイッチでIPv6アドレスを無効にします。
	 * 
	 * @method removeIpv6Net
	 * @chainable
	 * @public
	 * @param {Ipv6Net} ipv6Net
	 * @return {Router} this
	 */
	removeIpv6Net(ipv6Net:Ipv6Net) : Router {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(ipv6Net, "saklient.cloud.resources.Ipv6Net");
		this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/ipv6net/" + ipv6Net._id());
		this.reload();
		return this;
	}
	
	/**
	 * このルータ＋スイッチにスタティックルートを追加します。
	 * 
	 * @method addStaticRoute
	 * @public
	 * @param {number} maskLen
	 * @param {string} nextHop
	 * @return {Ipv4Net} 追加されたスタティックルート
	 */
	addStaticRoute(maskLen:number, nextHop:string) : Ipv4Net {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(maskLen, "number");
		Util.validateType(nextHop, "string");
		var q:any = {};
		Util.setByPath(q, "NetworkMaskLen", maskLen);
		Util.setByPath(q, "NextHop", nextHop);
		var result:any = this._client.request("POST", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/subnet", q);
		this.reload();
		return new Ipv4Net(this._client, result["Subnet"]);
	}
	
	/**
	 * このルータ＋スイッチからスタティックルートを削除します。
	 * 
	 * @method removeStaticRoute
	 * @chainable
	 * @public
	 * @param {Ipv4Net} ipv4Net
	 * @return {Router} this
	 */
	removeStaticRoute(ipv4Net:Ipv4Net) : Router {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(ipv4Net, "saklient.cloud.resources.Ipv4Net");
		this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/subnet/" + ipv4Net._id());
		this.reload();
		return this;
	}
	
	/**
	 * このルータ＋スイッチの帯域プランを変更します。
	 * 
	 * 成功時はリソースIDが変わることにご注意ください。
	 * 
	 * @method changePlan
	 * @chainable
	 * @public
	 * @param {number} bandWidthMbps
	 * @return {Router} this
	 */
	changePlan(bandWidthMbps:number) : Router {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(bandWidthMbps, "number");
		var path:string = this._apiPath() + "/" + Util.urlEncode(this._id()) + "/bandwidth";
		var q:any = {};
		Util.setByPath(q, "Internet.BandWidthMbps", bandWidthMbps);
		var result:any = this._client.request("PUT", path, q);
		this.apiDeserialize(result, true);
		return this;
	}
	
	/**
	 * @member saklient.cloud.resources.Router#n_id
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
	 * @member saklient.cloud.resources.Router#n_name
	 * @default false
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
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_name
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	private set_name(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		this.m_name = v;
		this.n_name = true;
		return this.m_name;
	}
	
	/**
	 * 名前
	 * 
	 * @property name
	 * @type string
	 * @public
	 */
	get name() : string { return this.get_name(); }
	set name(v:string) { this.set_name(v); }
	
	
	/**
	 * @member saklient.cloud.resources.Router#n_description
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_description : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_description
	 * @private
	 * @return {string}
	 */
	private get_description() : string {
		return this.m_description;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_description
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	private set_description(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		this.m_description = v;
		this.n_description = true;
		return this.m_description;
	}
	
	/**
	 * 説明
	 * 
	 * @property description
	 * @type string
	 * @public
	 */
	get description() : string { return this.get_description(); }
	set description(v:string) { this.set_description(v); }
	
	
	/**
	 * @member saklient.cloud.resources.Router#n_networkMaskLen
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_networkMaskLen : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_networkMaskLen
	 * @private
	 * @return {number}
	 */
	private get_networkMaskLen() : number {
		return this.m_networkMaskLen;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_networkMaskLen
	 * @private
	 * @param {number} v
	 * @return {number}
	 */
	private set_networkMaskLen(v:number) : number {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "number");
		if (!this.isNew) {
			throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.Router#networkMaskLen");
		};
		this.m_networkMaskLen = v;
		this.n_networkMaskLen = true;
		return this.m_networkMaskLen;
	}
	
	/**
	 * ネットワークのマスク長
	 * 
	 * @property networkMaskLen
	 * @type number
	 * @public
	 */
	get networkMaskLen() : number { return this.get_networkMaskLen(); }
	set networkMaskLen(v:number) { this.set_networkMaskLen(v); }
	
	
	/**
	 * @member saklient.cloud.resources.Router#n_bandWidthMbps
	 * @default false
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
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_bandWidthMbps
	 * @private
	 * @param {number} v
	 * @return {number}
	 */
	private set_bandWidthMbps(v:number) : number {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "number");
		if (!this.isNew) {
			throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.Router#bandWidthMbps");
		};
		this.m_bandWidthMbps = v;
		this.n_bandWidthMbps = true;
		return this.m_bandWidthMbps;
	}
	
	/**
	 * 帯域幅
	 * 
	 * @property bandWidthMbps
	 * @type number
	 * @public
	 */
	get bandWidthMbps() : number { return this.get_bandWidthMbps(); }
	set bandWidthMbps(v:number) { this.set_bandWidthMbps(v); }
	
	
	/**
	 * @member saklient.cloud.resources.Router#n_swytchId
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_swytchId : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_swytchId
	 * @private
	 * @return {string}
	 */
	private get_swytchId() : string {
		return this.m_swytchId;
	}
	
	/**
	 * スイッチ
	 * 
	 * @property swytchId
	 * @type string
	 * @readOnly
	 * @public
	 */
	get swytchId() : string { return this.get_swytchId(); }
	
	
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
		if (Util.existsPath(r, "Description")) {
			this.m_description = Util.getByPath(r, "Description") == null ? null : "" + Util.getByPath(r, "Description");
		}
		else {
			this.m_description = null;
			this.isIncomplete = true;
		};
		this.n_description = false;
		if (Util.existsPath(r, "NetworkMaskLen")) {
			this.m_networkMaskLen = Util.getByPath(r, "NetworkMaskLen") == null ? null : parseInt("" + Util.getByPath(r, "NetworkMaskLen"), 10);
		}
		else {
			this.m_networkMaskLen = null;
			this.isIncomplete = true;
		};
		this.n_networkMaskLen = false;
		if (Util.existsPath(r, "BandWidthMbps")) {
			this.m_bandWidthMbps = Util.getByPath(r, "BandWidthMbps") == null ? null : parseInt("" + Util.getByPath(r, "BandWidthMbps"), 10);
		}
		else {
			this.m_bandWidthMbps = null;
			this.isIncomplete = true;
		};
		this.n_bandWidthMbps = false;
		if (Util.existsPath(r, "Switch.ID")) {
			this.m_swytchId = Util.getByPath(r, "Switch.ID") == null ? null : "" + Util.getByPath(r, "Switch.ID");
		}
		else {
			this.m_swytchId = null;
			this.isIncomplete = true;
		};
		this.n_swytchId = false;
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
		if (withClean || this.n_name) {
			Util.setByPath(ret, "Name", this.m_name);
		}
		else {
			if (this.isNew) {
				missing.push("name");
			};
		};
		if (withClean || this.n_description) {
			Util.setByPath(ret, "Description", this.m_description);
		};
		if (withClean || this.n_networkMaskLen) {
			Util.setByPath(ret, "NetworkMaskLen", this.m_networkMaskLen);
		}
		else {
			if (this.isNew) {
				missing.push("networkMaskLen");
			};
		};
		if (withClean || this.n_bandWidthMbps) {
			Util.setByPath(ret, "BandWidthMbps", this.m_bandWidthMbps);
		}
		else {
			if (this.isNew) {
				missing.push("bandWidthMbps");
			};
		};
		if (withClean || this.n_swytchId) {
			Util.setByPath(ret, "Switch.ID", this.m_swytchId);
		};
		if (missing.length > 0) {
			throw new SaklientException("required_field", "Required fields must be set before the Router creation: " + missing.join(", "));
		};
		return ret;
	}
	
}


/// <reference path="../../../node.d.ts" />

export = Swytch;

import Util = require('../../Util');
import SaklientException = require('../../errors/SaklientException');
import Client = require('../Client');
import Resource = require('./Resource');
import Icon = require('./Icon');
import Router = require('./Router');
import Ipv4Net = require('./Ipv4Net');
import Ipv6Net = require('./Ipv6Net');

'use strict';

/**
 * スイッチの実体1つに対応し、属性の取得や操作を行うためのクラス。
 * 
 * @module saklient.cloud.resources.Swytch
 * @class Swytch
 * @constructor
 * @extends Resource
 */
class Swytch extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saklient.cloud.resources.Swytch#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * 名前
	 * 
	 * @member saklient.cloud.resources.Swytch#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * 説明
	 * 
	 * @member saklient.cloud.resources.Swytch#m_description
	 * @type string
	 * @protected
	 */
	m_description : string;
	
	/**
	 * タグ文字列の配列
	 * 
	 * @member saklient.cloud.resources.Swytch#m_tags
	 * @type string[]
	 * @protected
	 */
	m_tags : string[];
	
	/**
	 * アイコン
	 * 
	 * @member saklient.cloud.resources.Swytch#m_icon
	 * @type Icon
	 * @protected
	 */
	m_icon : Icon;
	
	/**
	 * ユーザ設定IPv4ネットワークのゲートウェイ
	 * 
	 * @member saklient.cloud.resources.Swytch#m_userDefaultRoute
	 * @type string
	 * @protected
	 */
	m_userDefaultRoute : string;
	
	/**
	 * ユーザ設定IPv4ネットワークのマスク長
	 * 
	 * @member saklient.cloud.resources.Swytch#m_userMaskLen
	 * @type number
	 * @protected
	 */
	m_userMaskLen : number;
	
	/**
	 * 接続されているルータ
	 * 
	 * @member saklient.cloud.resources.Swytch#m_router
	 * @type Router
	 * @protected
	 */
	m_router : Router;
	
	/**
	 * IPv4ネットワーク（ルータによる自動割当） {{#crossLink "Ipv4Net"}}{{/crossLink}} の配列
	 * 
	 * @member saklient.cloud.resources.Swytch#m_ipv4Nets
	 * @type Ipv4Net[]
	 * @protected
	 */
	m_ipv4Nets : Ipv4Net[];
	
	/**
	 * IPv6ネットワーク（ルータによる自動割当） {{#crossLink "Ipv6Net"}}{{/crossLink}} の配列
	 * 
	 * @member saklient.cloud.resources.Swytch#m_ipv6Nets
	 * @type Ipv6Net[]
	 * @protected
	 */
	m_ipv6Nets : Ipv6Net[];
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/switch";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Switch";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Switches";
	}
	
	/**
	 * @private
	 * @method _className
	 * @return {string}
	 */
	_className() : string {
		return "Swytch";
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
	 * @return {Swytch} this
	 */
	save() : Swytch {
		return (<Swytch><any>(this._save()));
	}
	
	/**
	 * 最新のリソース情報を再取得します。
	 * 
	 * @method reload
	 * @chainable
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
	 * このルータ＋スイッチでIPv6アドレスを有効にします。
	 * 
	 * @method addIpv6Net
	 * @public
	 * @return {Ipv6Net} 有効化されたIPv6ネットワーク
	 */
	addIpv6Net() : Ipv6Net {
		var ret:Ipv6Net = this.get_router().addIpv6Net();
		this.reload();
		return ret;
	}
	
	/**
	 * このルータ＋スイッチでIPv6アドレスを無効にします。
	 * 
	 * @method removeIpv6Net
	 * @chainable
	 * @public
	 * @return {Swytch} this
	 */
	removeIpv6Net() : Swytch {
		var nets:Ipv6Net[] = this.get_ipv6Nets();
		this.get_router().removeIpv6Net(nets[0]);
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
	 * @return {Ipv4Net} 追加されたIPv4ネットワーク
	 */
	addStaticRoute(maskLen:number, nextHop:string) : Ipv4Net {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(maskLen, "number");
		Util.validateType(nextHop, "string");
		var ret:Ipv4Net = this.get_router().addStaticRoute(maskLen, nextHop);
		this.reload();
		return ret;
	}
	
	/**
	 * このルータ＋スイッチからスタティックルートを削除します。
	 * 
	 * @method removeStaticRoute
	 * @chainable
	 * @public
	 * @param {Ipv4Net} ipv4Net
	 * @return {Swytch} this
	 */
	removeStaticRoute(ipv4Net:Ipv4Net) : Swytch {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(ipv4Net, "saklient.cloud.resources.Ipv4Net");
		this.get_router().removeStaticRoute(ipv4Net);
		this.reload();
		return this;
	}
	
	/**
	 * このルータ＋スイッチの帯域プランを変更します。
	 * 
	 * @method changePlan
	 * @chainable
	 * @public
	 * @param {number} bandWidthMbps
	 * @return {Swytch} this
	 */
	changePlan(bandWidthMbps:number) : Swytch {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(bandWidthMbps, "number");
		this.get_router().changePlan(bandWidthMbps);
		this.reload();
		return this;
	}
	
	/**
	 * @member saklient.cloud.resources.Swytch#n_id
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
	 * @member saklient.cloud.resources.Swytch#n_name
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
	 * @member saklient.cloud.resources.Swytch#n_description
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
	 * @member saklient.cloud.resources.Swytch#n_tags
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_tags : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_tags
	 * @private
	 * @return {string[]}
	 */
	private get_tags() : string[] {
		this.n_tags = true;
		return this.m_tags;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_tags
	 * @private
	 * @param {string[]} v
	 * @return {string[]}
	 */
	private set_tags(v:string[]) : string[] {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "Array");
		this.m_tags = v;
		this.n_tags = true;
		return this.m_tags;
	}
	
	/**
	 * タグ文字列の配列
	 * 
	 * @property tags
	 * @type string[]
	 * @public
	 */
	get tags() : string[] { return this.get_tags(); }
	set tags(v:string[]) { this.set_tags(v); }
	
	
	/**
	 * @member saklient.cloud.resources.Swytch#n_icon
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_icon : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_icon
	 * @private
	 * @return {Icon}
	 */
	private get_icon() : Icon {
		return this.m_icon;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_icon
	 * @private
	 * @param {Icon} v
	 * @return {Icon}
	 */
	private set_icon(v:Icon) : Icon {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "saklient.cloud.resources.Icon");
		this.m_icon = v;
		this.n_icon = true;
		return this.m_icon;
	}
	
	/**
	 * アイコン
	 * 
	 * @property icon
	 * @type Icon
	 * @public
	 */
	get icon() : Icon { return this.get_icon(); }
	set icon(v:Icon) { this.set_icon(v); }
	
	
	/**
	 * @member saklient.cloud.resources.Swytch#n_userDefaultRoute
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_userDefaultRoute : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_userDefaultRoute
	 * @private
	 * @return {string}
	 */
	private get_userDefaultRoute() : string {
		return this.m_userDefaultRoute;
	}
	
	/**
	 * ユーザ設定IPv4ネットワークのゲートウェイ
	 * 
	 * @property userDefaultRoute
	 * @type string
	 * @readOnly
	 * @public
	 */
	get userDefaultRoute() : string { return this.get_userDefaultRoute(); }
	
	
	/**
	 * @member saklient.cloud.resources.Swytch#n_userMaskLen
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_userMaskLen : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_userMaskLen
	 * @private
	 * @return {number}
	 */
	private get_userMaskLen() : number {
		return this.m_userMaskLen;
	}
	
	/**
	 * ユーザ設定IPv4ネットワークのマスク長
	 * 
	 * @property userMaskLen
	 * @type number
	 * @readOnly
	 * @public
	 */
	get userMaskLen() : number { return this.get_userMaskLen(); }
	
	
	/**
	 * @member saklient.cloud.resources.Swytch#n_router
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_router : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_router
	 * @private
	 * @return {Router}
	 */
	private get_router() : Router {
		return this.m_router;
	}
	
	/**
	 * 接続されているルータ
	 * 
	 * @property router
	 * @type Router
	 * @readOnly
	 * @public
	 */
	get router() : Router { return this.get_router(); }
	
	
	/**
	 * @member saklient.cloud.resources.Swytch#n_ipv4Nets
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_ipv4Nets : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_ipv4Nets
	 * @private
	 * @return {Ipv4Net[]}
	 */
	private get_ipv4Nets() : Ipv4Net[] {
		return this.m_ipv4Nets;
	}
	
	/**
	 * IPv4ネットワーク（ルータによる自動割当） {{#crossLink "Ipv4Net"}}{{/crossLink}} の配列
	 * 
	 * @property ipv4Nets
	 * @type Ipv4Net[]
	 * @readOnly
	 * @public
	 */
	get ipv4Nets() : Ipv4Net[] { return this.get_ipv4Nets(); }
	
	
	/**
	 * @member saklient.cloud.resources.Swytch#n_ipv6Nets
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_ipv6Nets : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_ipv6Nets
	 * @private
	 * @return {Ipv6Net[]}
	 */
	private get_ipv6Nets() : Ipv6Net[] {
		return this.m_ipv6Nets;
	}
	
	/**
	 * IPv6ネットワーク（ルータによる自動割当） {{#crossLink "Ipv6Net"}}{{/crossLink}} の配列
	 * 
	 * @property ipv6Nets
	 * @type Ipv6Net[]
	 * @readOnly
	 * @public
	 */
	get ipv6Nets() : Ipv6Net[] { return this.get_ipv6Nets(); }
	
	
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
		if (Util.existsPath(r, "Tags")) {
			if (Util.getByPath(r, "Tags") == null) {
				this.m_tags = [];
			}
			else {
				this.m_tags = [];
				for (var __it1:number=0; __it1<(<any[]><any>(Util.getByPath(r, "Tags"))).length; __it1++) {
					var t = (<any[]><any>(Util.getByPath(r, "Tags")))[__it1];
					var v1:string = null;
					v1 = t == null ? null : "" + t;
					this.m_tags.push(v1);
				};
			};
		}
		else {
			this.m_tags = null;
			this.isIncomplete = true;
		};
		this.n_tags = false;
		if (Util.existsPath(r, "Icon")) {
			this.m_icon = Util.getByPath(r, "Icon") == null ? null : new Icon(this._client, Util.getByPath(r, "Icon"));
		}
		else {
			this.m_icon = null;
			this.isIncomplete = true;
		};
		this.n_icon = false;
		if (Util.existsPath(r, "UserSubnet.DefaultRoute")) {
			this.m_userDefaultRoute = Util.getByPath(r, "UserSubnet.DefaultRoute") == null ? null : "" + Util.getByPath(r, "UserSubnet.DefaultRoute");
		}
		else {
			this.m_userDefaultRoute = null;
			this.isIncomplete = true;
		};
		this.n_userDefaultRoute = false;
		if (Util.existsPath(r, "UserSubnet.NetworkMaskLen")) {
			this.m_userMaskLen = Util.getByPath(r, "UserSubnet.NetworkMaskLen") == null ? null : parseInt("" + Util.getByPath(r, "UserSubnet.NetworkMaskLen"), 10);
		}
		else {
			this.m_userMaskLen = null;
			this.isIncomplete = true;
		};
		this.n_userMaskLen = false;
		if (Util.existsPath(r, "Internet")) {
			this.m_router = Util.getByPath(r, "Internet") == null ? null : new Router(this._client, Util.getByPath(r, "Internet"));
		}
		else {
			this.m_router = null;
			this.isIncomplete = true;
		};
		this.n_router = false;
		if (Util.existsPath(r, "Subnets")) {
			if (Util.getByPath(r, "Subnets") == null) {
				this.m_ipv4Nets = [];
			}
			else {
				this.m_ipv4Nets = [];
				for (var __it2:number=0; __it2<(<any[]><any>(Util.getByPath(r, "Subnets"))).length; __it2++) {
					var t = (<any[]><any>(Util.getByPath(r, "Subnets")))[__it2];
					var v2:Ipv4Net = null;
					v2 = t == null ? null : new Ipv4Net(this._client, t);
					this.m_ipv4Nets.push(v2);
				};
			};
		}
		else {
			this.m_ipv4Nets = null;
			this.isIncomplete = true;
		};
		this.n_ipv4Nets = false;
		if (Util.existsPath(r, "IPv6Nets")) {
			if (Util.getByPath(r, "IPv6Nets") == null) {
				this.m_ipv6Nets = [];
			}
			else {
				this.m_ipv6Nets = [];
				for (var __it3:number=0; __it3<(<any[]><any>(Util.getByPath(r, "IPv6Nets"))).length; __it3++) {
					var t = (<any[]><any>(Util.getByPath(r, "IPv6Nets")))[__it3];
					var v3:Ipv6Net = null;
					v3 = t == null ? null : new Ipv6Net(this._client, t);
					this.m_ipv6Nets.push(v3);
				};
			};
		}
		else {
			this.m_ipv6Nets = null;
			this.isIncomplete = true;
		};
		this.n_ipv6Nets = false;
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
		if (withClean || this.n_tags) {
			Util.setByPath(ret, "Tags", []);
			for (var __it1:number=0; __it1<this.m_tags.length; __it1++) {
				var r1 = this.m_tags[__it1];
				var v:any = null;
				v = r1;
				ret["Tags"].push(v);
			};
		};
		if (withClean || this.n_icon) {
			Util.setByPath(ret, "Icon", withClean ? (this.m_icon == null ? null : this.m_icon.apiSerialize(withClean)) : (this.m_icon == null ? { ID: "0" } : this.m_icon.apiSerializeID()));
		};
		if (withClean || this.n_userDefaultRoute) {
			Util.setByPath(ret, "UserSubnet.DefaultRoute", this.m_userDefaultRoute);
		};
		if (withClean || this.n_userMaskLen) {
			Util.setByPath(ret, "UserSubnet.NetworkMaskLen", this.m_userMaskLen);
		};
		if (withClean || this.n_router) {
			Util.setByPath(ret, "Internet", withClean ? (this.m_router == null ? null : this.m_router.apiSerialize(withClean)) : (this.m_router == null ? { ID: "0" } : this.m_router.apiSerializeID()));
		};
		if (withClean || this.n_ipv4Nets) {
			Util.setByPath(ret, "Subnets", []);
			for (var __it2:number=0; __it2<this.m_ipv4Nets.length; __it2++) {
				var r2 = this.m_ipv4Nets[__it2];
				var v:any = null;
				v = withClean ? (r2 == null ? null : r2.apiSerialize(withClean)) : (r2 == null ? { ID: "0" } : r2.apiSerializeID());
				ret["Subnets"].push(v);
			};
		};
		if (withClean || this.n_ipv6Nets) {
			Util.setByPath(ret, "IPv6Nets", []);
			for (var __it3:number=0; __it3<this.m_ipv6Nets.length; __it3++) {
				var r3 = this.m_ipv6Nets[__it3];
				var v:any = null;
				v = withClean ? (r3 == null ? null : r3.apiSerialize(withClean)) : (r3 == null ? { ID: "0" } : r3.apiSerializeID());
				ret["IPv6Nets"].push(v);
			};
		};
		if (missing.length > 0) {
			throw new SaklientException("required_field", "Required fields must be set before the Swytch creation: " + missing.join(", "));
		};
		return ret;
	}
	
}


/// <reference path="../../../node.d.ts" />

export = Appliance;

import Util = require('../../Util');
import SaklientException = require('../../errors/SaklientException');
import Client = require('../Client');
import Resource = require('./Resource');
import Icon = require('./Icon');
import Iface = require('./Iface');
import EApplianceClass = require('../enums/EApplianceClass');

'use strict';

/**
 * アプライアンスの実体1つに対応し、属性の取得や操作を行うためのクラス。
 * 
 * @module saklient.cloud.resources.Appliance
 * @class Appliance
 * @constructor
 * @extends Resource
 */
class Appliance extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saklient.cloud.resources.Appliance#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * クラス {{#crossLink "EApplianceClass"}}{{/crossLink}}
	 * 
	 * @member saklient.cloud.resources.Appliance#m_clazz
	 * @type string
	 * @protected
	 */
	m_clazz : string;
	
	/**
	 * 名前
	 * 
	 * @member saklient.cloud.resources.Appliance#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * 説明
	 * 
	 * @member saklient.cloud.resources.Appliance#m_description
	 * @type string
	 * @protected
	 */
	m_description : string;
	
	/**
	 * タグ
	 * 
	 * @member saklient.cloud.resources.Appliance#m_tags
	 * @type string[]
	 * @protected
	 */
	m_tags : string[];
	
	/**
	 * アイコン
	 * 
	 * @member saklient.cloud.resources.Appliance#m_icon
	 * @type Icon
	 * @protected
	 */
	m_icon : Icon;
	
	/**
	 * プラン
	 * 
	 * @member saklient.cloud.resources.Appliance#m_ifaces
	 * @type Iface[]
	 * @protected
	 */
	m_ifaces : Iface[];
	
	/**
	 * 注釈
	 * 
	 * @member saklient.cloud.resources.Appliance#m_annotation
	 * @type any
	 * @protected
	 */
	m_annotation : any;
	
	/**
	 * 設定の生データ
	 * 
	 * @member saklient.cloud.resources.Appliance#m_rawSettings
	 * @type any
	 * @protected
	 */
	m_rawSettings : any;
	
	/**
	 * @private
	 * @member saklient.cloud.resources.Appliance#m_rawSettingsHash
	 * @type string
	 * @protected
	 */
	m_rawSettingsHash : string;
	
	/**
	 * サービスクラス
	 * 
	 * @member saklient.cloud.resources.Appliance#m_serviceClass
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
		return "/appliance";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Appliance";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Appliances";
	}
	
	/**
	 * @private
	 * @method _className
	 * @return {string}
	 */
	_className() : string {
		return "Appliance";
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
	 * @return {Appliance} this
	 */
	save() : Appliance {
		return (<Appliance><any>(this._save()));
	}
	
	/**
	 * 最新のリソース情報を再取得します。
	 * 
	 * @method reload
	 * @chainable
	 * @public
	 * @return {Appliance} this
	 */
	reload() : Appliance {
		return (<Appliance><any>(this._reload()));
	}
	
	/**
	 * @private
	 * @method trueClassName
	 * @return {string}
	 */
	trueClassName() : string {
		switch (this.get_clazz()) {
			case "loadbalancer": {
				return "LoadBalancer";
			}
			case "vpcrouter": {
				return "VpcRouter";
			}
		}
		;
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
	 * @private
	 * @method _onBeforeSave
	 * @protected
	 * @param {any} query
	 * @return {void}
	 */
	_onBeforeSave(query:any) : void {
		Util.validateArgCount(arguments.length, 1);
		Util.setByPath(query, "OriginalSettingsHash", this.get_rawSettingsHash());
	}
	
	/**
	 * アプライアンスを起動します。
	 * 
	 * @method boot
	 * @chainable
	 * @public
	 * @return {Appliance} this
	 */
	boot() : Appliance {
		this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power");
		return this;
	}
	
	/**
	 * アプライアンスをシャットダウンします。
	 * 
	 * @method shutdown
	 * @chainable
	 * @public
	 * @return {Appliance} this
	 */
	shutdown() : Appliance {
		this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power");
		return this;
	}
	
	/**
	 * アプライアンスを強制停止します。
	 * 
	 * @method stop
	 * @chainable
	 * @public
	 * @return {Appliance} this
	 */
	stop() : Appliance {
		this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power", { Force: true });
		return this;
	}
	
	/**
	 * アプライアンスを強制再起動します。
	 * 
	 * @method reboot
	 * @chainable
	 * @public
	 * @return {Appliance} this
	 */
	reboot() : Appliance {
		this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/reset");
		return this;
	}
	
	/**
	 * @member saklient.cloud.resources.Appliance#n_id
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
	 * @member saklient.cloud.resources.Appliance#n_clazz
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_clazz : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_clazz
	 * @private
	 * @return {string}
	 */
	private get_clazz() : string {
		return this.m_clazz;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_clazz
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	private set_clazz(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		if (!this.isNew) {
			throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.Appliance#clazz");
		};
		this.m_clazz = v;
		this.n_clazz = true;
		return this.m_clazz;
	}
	
	/**
	 * クラス {{#crossLink "EApplianceClass"}}{{/crossLink}}
	 * 
	 * @property clazz
	 * @type string
	 * @public
	 */
	get clazz() : string { return this.get_clazz(); }
	set clazz(v:string) { this.set_clazz(v); }
	
	
	/**
	 * @member saklient.cloud.resources.Appliance#n_name
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
	 * @member saklient.cloud.resources.Appliance#n_description
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
	 * @member saklient.cloud.resources.Appliance#n_tags
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
	 * タグ
	 * 
	 * @property tags
	 * @type string[]
	 * @public
	 */
	get tags() : string[] { return this.get_tags(); }
	set tags(v:string[]) { this.set_tags(v); }
	
	
	/**
	 * @member saklient.cloud.resources.Appliance#n_icon
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
	 * @member saklient.cloud.resources.Appliance#n_ifaces
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_ifaces : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_ifaces
	 * @private
	 * @return {Iface[]}
	 */
	private get_ifaces() : Iface[] {
		return this.m_ifaces;
	}
	
	/**
	 * プラン
	 * 
	 * @property ifaces
	 * @type Iface[]
	 * @readOnly
	 * @public
	 */
	get ifaces() : Iface[] { return this.get_ifaces(); }
	
	
	/**
	 * @member saklient.cloud.resources.Appliance#n_annotation
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_annotation : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_annotation
	 * @private
	 * @return {any}
	 */
	private get_annotation() : any {
		return this.m_annotation;
	}
	
	/**
	 * 注釈
	 * 
	 * @property annotation
	 * @type any
	 * @readOnly
	 * @public
	 */
	get annotation() : any { return this.get_annotation(); }
	
	
	/**
	 * @member saklient.cloud.resources.Appliance#n_rawSettings
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_rawSettings : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_rawSettings
	 * @private
	 * @return {any}
	 */
	private get_rawSettings() : any {
		this.n_rawSettings = true;
		return this.m_rawSettings;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_rawSettings
	 * @private
	 * @param {any} v
	 * @return {any}
	 */
	private set_rawSettings(v:any) : any {
		Util.validateArgCount(arguments.length, 1);
		this.m_rawSettings = v;
		this.n_rawSettings = true;
		return this.m_rawSettings;
	}
	
	/**
	 * 設定の生データ
	 * 
	 * @property rawSettings
	 * @type any
	 * @public
	 */
	get rawSettings() : any { return this.get_rawSettings(); }
	set rawSettings(v:any) { this.set_rawSettings(v); }
	
	
	/**
	 * @member saklient.cloud.resources.Appliance#n_rawSettingsHash
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_rawSettingsHash : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_rawSettingsHash
	 * @private
	 * @return {string}
	 */
	private get_rawSettingsHash() : string {
		return this.m_rawSettingsHash;
	}
	
	/**
	 * @private
	 * @property rawSettingsHash
	 * @type string
	 * @readOnly
	 */
	get rawSettingsHash() : string { return this.get_rawSettingsHash(); }
	
	
	/**
	 * @member saklient.cloud.resources.Appliance#n_serviceClass
	 * @default false
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
	 * サービスクラス
	 * 
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
		if (Util.existsPath(r, "Class")) {
			this.m_clazz = Util.getByPath(r, "Class") == null ? null : "" + Util.getByPath(r, "Class");
		}
		else {
			this.m_clazz = null;
			this.isIncomplete = true;
		};
		this.n_clazz = false;
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
		if (Util.existsPath(r, "Interfaces")) {
			if (Util.getByPath(r, "Interfaces") == null) {
				this.m_ifaces = [];
			}
			else {
				this.m_ifaces = [];
				for (var __it2:number=0; __it2<(<any[]><any>(Util.getByPath(r, "Interfaces"))).length; __it2++) {
					var t = (<any[]><any>(Util.getByPath(r, "Interfaces")))[__it2];
					var v2:Iface = null;
					v2 = t == null ? null : new Iface(this._client, t);
					this.m_ifaces.push(v2);
				};
			};
		}
		else {
			this.m_ifaces = null;
			this.isIncomplete = true;
		};
		this.n_ifaces = false;
		if (Util.existsPath(r, "Remark")) {
			this.m_annotation = Util.getByPath(r, "Remark");
		}
		else {
			this.m_annotation = null;
			this.isIncomplete = true;
		};
		this.n_annotation = false;
		if (Util.existsPath(r, "Settings")) {
			this.m_rawSettings = Util.getByPath(r, "Settings");
		}
		else {
			this.m_rawSettings = null;
			this.isIncomplete = true;
		};
		this.n_rawSettings = false;
		if (Util.existsPath(r, "SettingsHash")) {
			this.m_rawSettingsHash = Util.getByPath(r, "SettingsHash") == null ? null : "" + Util.getByPath(r, "SettingsHash");
		}
		else {
			this.m_rawSettingsHash = null;
			this.isIncomplete = true;
		};
		this.n_rawSettingsHash = false;
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
		if (withClean || this.n_clazz) {
			Util.setByPath(ret, "Class", this.m_clazz);
		}
		else {
			if (this.isNew) {
				missing.push("clazz");
			};
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
		if (withClean || this.n_ifaces) {
			Util.setByPath(ret, "Interfaces", []);
			for (var __it2:number=0; __it2<this.m_ifaces.length; __it2++) {
				var r2 = this.m_ifaces[__it2];
				var v:any = null;
				v = withClean ? (r2 == null ? null : r2.apiSerialize(withClean)) : (r2 == null ? { ID: "0" } : r2.apiSerializeID());
				ret["Interfaces"].push(v);
			};
		};
		if (withClean || this.n_annotation) {
			Util.setByPath(ret, "Remark", this.m_annotation);
		};
		if (withClean || this.n_rawSettings) {
			Util.setByPath(ret, "Settings", this.m_rawSettings);
		};
		if (withClean || this.n_rawSettingsHash) {
			Util.setByPath(ret, "SettingsHash", this.m_rawSettingsHash);
		};
		if (withClean || this.n_serviceClass) {
			Util.setByPath(ret, "ServiceClass", this.m_serviceClass);
		};
		if (missing.length > 0) {
			throw new SaklientException("required_field", "Required fields must be set before the Appliance creation: " + missing.join(", "));
		};
		return ret;
	}
	
}


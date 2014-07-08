/// <reference path="../../../node.d.ts" />

export = Appliance;

import Util = require('../Util');
import Client = require('../Client');
import Resource = require('./Resource');
import Icon = require('./Icon');
import Iface = require('./Iface');

/**
 * アプライアンスのリソース情報へのアクセス機能や操作機能を備えたクラス。
 * 
 * @class Appliance
 * @constructor
 * @extends Resource
 */
class Appliance extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saclient.cloud.resource.Appliance#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * クラス
	 * 
	 * @member saclient.cloud.resource.Appliance#m_clazz
	 * @type string
	 * @protected
	 */
	m_clazz : string;
	
	/**
	 * 名前
	 * 
	 * @member saclient.cloud.resource.Appliance#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * 説明
	 * 
	 * @member saclient.cloud.resource.Appliance#m_description
	 * @type string
	 * @protected
	 */
	m_description : string;
	
	/**
	 * タグ
	 * 
	 * @member saclient.cloud.resource.Appliance#m_tags
	 * @type string[]
	 * @protected
	 */
	m_tags : string[];
	
	/**
	 * アイコン
	 * 
	 * @member saclient.cloud.resource.Appliance#m_icon
	 * @type Icon
	 * @protected
	 */
	m_icon : Icon;
	
	/**
	 * プラン
	 * 
	 * @member saclient.cloud.resource.Appliance#m_ifaces
	 * @type Iface[]
	 * @protected
	 */
	m_ifaces : Iface[];
	
	/**
	 * サービスクラス
	 * 
	 * @member saclient.cloud.resource.Appliance#m_serviceClass
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
	 * アプライアンスを起動します。
	 * 
	 * @method boot
	 * @chainable
	 * @public
	 * @return {Appliance}
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
	 * @return {Appliance}
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
	 * @return {Appliance}
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
	 * @return {Appliance}
	 */
	reboot() : Appliance {
		this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/reset");
		return this;
	}
	
	/**
	 * @member saclient.cloud.resource.Appliance#n_id
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
	 * @member saclient.cloud.resource.Appliance#n_clazz
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
		this.m_clazz = v;
		this.n_clazz = true;
		return this.m_clazz;
	}
	
	/**
	 * クラス
	 * 
	 * @property clazz
	 * @type string
	 * @public
	 */
	get clazz() : string { return this.get_clazz(); }
	set clazz(v:string) { this.set_clazz(v); }
	
	
	/**
	 * @member saclient.cloud.resource.Appliance#n_name
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
	 * @member saclient.cloud.resource.Appliance#n_description
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
	 * @member saclient.cloud.resource.Appliance#n_tags
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
	 * @member saclient.cloud.resource.Appliance#n_icon
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
	 * @member saclient.cloud.resource.Appliance#n_ifaces
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
	 * @member saclient.cloud.resource.Appliance#n_serviceClass
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
	 * @method apiDeserialize
	 * @public
	 * @param {any} r
	 */
	apiDeserialize(r:any) {
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
		if (("Class" in r)) {
			this.m_clazz = r["Class"] == null ? null : "" + r["Class"];
		}
		else {
			this.m_clazz = null;
			this.isIncomplete = true;
		};
		this.n_clazz = false;
		if (("Name" in r)) {
			this.m_name = r["Name"] == null ? null : "" + r["Name"];
		}
		else {
			this.m_name = null;
			this.isIncomplete = true;
		};
		this.n_name = false;
		if (("Description" in r)) {
			this.m_description = r["Description"] == null ? null : "" + r["Description"];
		}
		else {
			this.m_description = null;
			this.isIncomplete = true;
		};
		this.n_description = false;
		if (("Tags" in r)) {
			if (r["Tags"] == null) {
				this.m_tags = [];
			}
			else {
				this.m_tags = [];
				(<any[]><any>(r["Tags"])).forEach((t)=>{
					{
						var v:string = null;
						v = t == null ? null : "" + t;
						this.m_tags.push(v);
					}
				});
			};
		}
		else {
			this.m_tags = null;
			this.isIncomplete = true;
		};
		this.n_tags = false;
		if (("Icon" in r)) {
			this.m_icon = r["Icon"] == null ? null : new Icon(this._client, r["Icon"]);
		}
		else {
			this.m_icon = null;
			this.isIncomplete = true;
		};
		this.n_icon = false;
		if (("Interfaces" in r)) {
			if (r["Interfaces"] == null) {
				this.m_ifaces = [];
			}
			else {
				this.m_ifaces = [];
				(<any[]><any>(r["Interfaces"])).forEach((t)=>{
					{
						var v:Iface = null;
						v = t == null ? null : new Iface(this._client, t);
						this.m_ifaces.push(v);
					}
				});
			};
		}
		else {
			this.m_ifaces = null;
			this.isIncomplete = true;
		};
		this.n_ifaces = false;
		if (("ServiceClass" in r)) {
			this.m_serviceClass = r["ServiceClass"] == null ? null : "" + r["ServiceClass"];
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
	 * @method apiSerialize
	 * @public
	 * @param {boolean} withClean=false
	 * @return {any}
	 */
	apiSerialize(withClean:boolean=false) : any {
		var ret:any = {  };
		if (withClean || this.n_id) {
			ret["ID"] = this.m_id;
		};
		if (withClean || this.n_clazz) {
			ret["Class"] = this.m_clazz;
		};
		if (withClean || this.n_name) {
			ret["Name"] = this.m_name;
		};
		if (withClean || this.n_description) {
			ret["Description"] = this.m_description;
		};
		if (withClean || this.n_tags) {
			ret["Tags"] = [];
			this.m_tags.forEach((r)=>{
				{
					var v:any = null;
					v = r;
					ret["Tags"].push(v);
				}
			});
		};
		if (withClean || this.n_icon) {
			ret["Icon"] = withClean ? (this.m_icon == null ? null : this.m_icon.apiSerialize(withClean)) : (this.m_icon == null ? { ID: "0" } : this.m_icon.apiSerializeID());
		};
		if (withClean || this.n_ifaces) {
			ret["Interfaces"] = [];
			this.m_ifaces.forEach((r)=>{
				{
					var v:any = null;
					v = withClean ? (r == null ? null : r.apiSerialize(withClean)) : (r == null ? { ID: "0" } : r.apiSerializeID());
					ret["Interfaces"].push(v);
				}
			});
		};
		if (withClean || this.n_serviceClass) {
			ret["ServiceClass"] = this.m_serviceClass;
		};
		return ret;
	}
	
}


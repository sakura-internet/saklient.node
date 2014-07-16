/// <reference path="../../../node.d.ts" />

export = Server;

import Util = require('../Util');
import Client = require('../Client');
import Resource = require('./Resource');
import Icon = require('./Icon');
import Disk = require('./Disk');
import Iface = require('./Iface');
import ServerPlan = require('./ServerPlan');
import ServerInstance = require('./ServerInstance');
import EServerInstanceStatus = require('../enums/EServerInstanceStatus');

/**
 * サーバのリソース情報へのアクセス機能や操作機能を備えたクラス。
 * 
 * @class Server
 * @constructor
 * @extends Resource
 */
class Server extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saclient.cloud.resource.Server#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * 名前
	 * 
	 * @member saclient.cloud.resource.Server#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * 説明
	 * 
	 * @member saclient.cloud.resource.Server#m_description
	 * @type string
	 * @protected
	 */
	m_description : string;
	
	/**
	 * タグ
	 * 
	 * @member saclient.cloud.resource.Server#m_tags
	 * @type string[]
	 * @protected
	 */
	m_tags : string[];
	
	/**
	 * アイコン
	 * 
	 * @member saclient.cloud.resource.Server#m_icon
	 * @type Icon
	 * @protected
	 */
	m_icon : Icon;
	
	/**
	 * プラン
	 * 
	 * @member saclient.cloud.resource.Server#m_plan
	 * @type ServerPlan
	 * @protected
	 */
	m_plan : ServerPlan;
	
	/**
	 * インタフェース
	 * 
	 * @member saclient.cloud.resource.Server#m_ifaces
	 * @type Iface[]
	 * @protected
	 */
	m_ifaces : Iface[];
	
	/**
	 * インスタンス情報
	 * 
	 * @member saclient.cloud.resource.Server#m_instance
	 * @type ServerInstance
	 * @protected
	 */
	m_instance : ServerInstance;
	
	/**
	 * 有効状態
	 * 
	 * @member saclient.cloud.resource.Server#m_availability
	 * @type string
	 * @protected
	 */
	m_availability : string;
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/server";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Server";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Servers";
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
	 * @return {Server} this
	 */
	save() : Server {
		return (<Server><any>(this._save()));
	}
	
	/**
	 * 最新のリソース情報を再取得します。
	 * 
	 * @method reload
	 * @chainable
	 * @public
	 * @return {Server} this
	 */
	reload() : Server {
		return (<Server><any>(this._reload()));
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
	 * サーバが起動しているときtrueを返します。
	 * 
	 * @method isUp
	 * @public
	 * @return {boolean}
	 */
	isUp() : boolean {
		return this.get_instance().isUp();
	}
	
	/**
	 * サーバが停止しているときtrueを返します。
	 * 
	 * @method isDown
	 * @public
	 * @return {boolean}
	 */
	isDown() : boolean {
		return this.get_instance().isDown();
	}
	
	/**
	 * サーバを起動します。
	 * 
	 * @method boot
	 * @chainable
	 * @public
	 * @return {Server}
	 */
	boot() : Server {
		this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power");
		return this.reload();
	}
	
	/**
	 * サーバをシャットダウンします。
	 * 
	 * @method shutdown
	 * @chainable
	 * @public
	 * @return {Server}
	 */
	shutdown() : Server {
		this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power");
		return this.reload();
	}
	
	/**
	 * サーバを強制停止します。
	 * 
	 * @method stop
	 * @chainable
	 * @public
	 * @return {Server}
	 */
	stop() : Server {
		this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power", { Force: true });
		return this.reload();
	}
	
	/**
	 * サーバを強制再起動します。
	 * 
	 * @method reboot
	 * @chainable
	 * @public
	 * @return {Server}
	 */
	reboot() : Server {
		this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/reset");
		return this.reload();
	}
	
	/**
	 * サーバが停止するまで待機します。
	 * 
	 * @method afterDown
	 * @public
	 * @param {number} timeoutSec
	 * @param {(Server, boolean) => void} callback
	 * @return {void}
	 */
	afterDown(timeoutSec:number, callback:(Server, boolean) => void) : void {
		this.afterStatus(EServerInstanceStatus.down, timeoutSec, callback);
	}
	
	/**
	 * サーバが指定のステータスに遷移するまで待機します。
	 * 
	 * @ignore
	 * @method afterStatus
	 * @private
	 * @param {number} timeoutSec
	 * @param {string} status
	 * @param {(Server, boolean) => void} callback
	 * @return {void}
	 */
	private afterStatus(status:string, timeoutSec:number, callback:(Server, boolean) => void) : void {
		var ret = this.sleepUntil(status, timeoutSec);
		callback(this, ret);
	}
	
	/**
	 * サーバが停止するまで待機します。
	 * 
	 * @method sleepUntilDown
	 * @public
	 * @param {number} timeoutSec=180
	 * @return {boolean}
	 */
	sleepUntilDown(timeoutSec:number=180) : boolean {
		return this.sleepUntil(EServerInstanceStatus.down, timeoutSec);
	}
	
	/**
	 * サーバが指定のステータスに遷移するまで待機します。
	 * 
	 * @ignore
	 * @method sleepUntil
	 * @private
	 * @param {string} status
	 * @param {number} timeoutSec=180
	 * @return {boolean}
	 */
	private sleepUntil(status:string, timeoutSec:number=180) : boolean {
		var step = 3;
		while (0 < timeoutSec) {
			this.reload();
			var s:string = this.get_instance()["status"];
			if (s == null) s = EServerInstanceStatus.down;
			if (s == status) return true;
			;
			timeoutSec -= step;
			if (0 < timeoutSec) Util.sleep(step);
		};
		return false;
	}
	
	/**
	 * サーバのプランを変更します。
	 * 
	 * @method changePlan
	 * @chainable
	 * @public
	 * @param {ServerPlan} planTo
	 * @return {Server}
	 */
	changePlan(planTo:ServerPlan) : Server {
		var path:string = this._apiPath() + "/" + Util.urlEncode(this._id()) + "/to/plan/" + Util.urlEncode(planTo._id());
		var result:any = this._client.request("PUT", path);
		this.apiDeserialize(result[this._rootKey()]);
		return this;
	}
	
	/**
	 * サーバに接続されているディスクのリストを取得します。
	 * 
	 * @method findDisks
	 * @public
	 * @return {Disk[]}
	 */
	findDisks() : Disk[] {
		var model:any = Util.createClassInstance("saclient.cloud.model.Model_Disk", [this._client]);
		return model.withServerId(this._id()).find();
	}
	
	/**
	 * @member saclient.cloud.resource.Server#n_id
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
	 * @member saclient.cloud.resource.Server#n_name
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
	 * @member saclient.cloud.resource.Server#n_description
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
	 * @member saclient.cloud.resource.Server#n_tags
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
	 * @member saclient.cloud.resource.Server#n_icon
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
	 * @member saclient.cloud.resource.Server#n_plan
	 * @type boolean
	 * @private
	 */
	private n_plan : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_plan
	 * @private
	 * @return {ServerPlan}
	 */
	private get_plan() : ServerPlan {
		return this.m_plan;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_plan
	 * @private
	 * @param {ServerPlan} v
	 * @return {ServerPlan}
	 */
	private set_plan(v:ServerPlan) : ServerPlan {
		this.m_plan = v;
		this.n_plan = true;
		return this.m_plan;
	}
	
	/**
	 * プラン
	 * 
	 * @property plan
	 * @type ServerPlan
	 * @public
	 */
	get plan() : ServerPlan { return this.get_plan(); }
	set plan(v:ServerPlan) { this.set_plan(v); }
	
	
	/**
	 * @member saclient.cloud.resource.Server#n_ifaces
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
	 * インタフェース
	 * 
	 * @property ifaces
	 * @type Iface[]
	 * @readOnly
	 * @public
	 */
	get ifaces() : Iface[] { return this.get_ifaces(); }
	
	
	/**
	 * @member saclient.cloud.resource.Server#n_instance
	 * @type boolean
	 * @private
	 */
	private n_instance : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_instance
	 * @private
	 * @return {ServerInstance}
	 */
	private get_instance() : ServerInstance {
		return this.m_instance;
	}
	
	/**
	 * インスタンス情報
	 * 
	 * @property instance
	 * @type ServerInstance
	 * @readOnly
	 * @public
	 */
	get instance() : ServerInstance { return this.get_instance(); }
	
	
	/**
	 * @member saclient.cloud.resource.Server#n_availability
	 * @type boolean
	 * @private
	 */
	private n_availability : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_availability
	 * @private
	 * @return {string}
	 */
	private get_availability() : string {
		return this.m_availability;
	}
	
	/**
	 * 有効状態
	 * 
	 * @property availability
	 * @type string
	 * @readOnly
	 * @public
	 */
	get availability() : string { return this.get_availability(); }
	
	
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
		if (("ServerPlan" in r)) {
			this.m_plan = r["ServerPlan"] == null ? null : new ServerPlan(this._client, r["ServerPlan"]);
		}
		else {
			this.m_plan = null;
			this.isIncomplete = true;
		};
		this.n_plan = false;
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
		if (("Instance" in r)) {
			this.m_instance = r["Instance"] == null ? null : new ServerInstance(this._client, r["Instance"]);
		}
		else {
			this.m_instance = null;
			this.isIncomplete = true;
		};
		this.n_instance = false;
		if (("Availability" in r)) {
			this.m_availability = r["Availability"] == null ? null : "" + r["Availability"];
		}
		else {
			this.m_availability = null;
			this.isIncomplete = true;
		};
		this.n_availability = false;
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
		if (withClean || this.n_plan) {
			ret["ServerPlan"] = withClean ? (this.m_plan == null ? null : this.m_plan.apiSerialize(withClean)) : (this.m_plan == null ? { ID: "0" } : this.m_plan.apiSerializeID());
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
		if (withClean || this.n_instance) {
			ret["Instance"] = withClean ? (this.m_instance == null ? null : this.m_instance.apiSerialize(withClean)) : (this.m_instance == null ? { ID: "0" } : this.m_instance.apiSerializeID());
		};
		if (withClean || this.n_availability) {
			ret["Availability"] = this.m_availability;
		};
		return ret;
	}
	
}


/// <reference path="../../../node.d.ts" />

export = Disk;

import Util = require('../../Util');
import SaklientException = require('../../errors/SaklientException');
import Client = require('../Client');
import Resource = require('./Resource');
import Icon = require('./Icon');
import DiskPlan = require('./DiskPlan');
import Server = require('./Server');
import DiskConfig = require('./DiskConfig');
import EAvailability = require('../enums/EAvailability');
import EDiskConnection = require('../enums/EDiskConnection');
import EStorageClass = require('../enums/EStorageClass');

'use strict';

/**
 * ディスクの実体1つに対応し、属性の取得や操作を行うためのクラス。
 * 
 * @module saklient.cloud.resource.Disk
 * @class Disk
 * @constructor
 * @extends Resource
 */
class Disk extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saklient.cloud.resource.Disk#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * 名前
	 * 
	 * @member saklient.cloud.resource.Disk#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * 説明
	 * 
	 * @member saklient.cloud.resource.Disk#m_description
	 * @type string
	 * @protected
	 */
	m_description : string;
	
	/**
	 * タグ
	 * 
	 * @member saklient.cloud.resource.Disk#m_tags
	 * @type string[]
	 * @protected
	 */
	m_tags : string[];
	
	/**
	 * アイコン
	 * 
	 * @member saklient.cloud.resource.Disk#m_icon
	 * @type Icon
	 * @protected
	 */
	m_icon : Icon;
	
	/**
	 * サイズ[MiB]
	 * 
	 * @member saklient.cloud.resource.Disk#m_sizeMib
	 * @type number
	 * @protected
	 */
	m_sizeMib : number;
	
	/**
	 * サービスクラス
	 * 
	 * @member saklient.cloud.resource.Disk#m_serviceClass
	 * @type string
	 * @protected
	 */
	m_serviceClass : string;
	
	/**
	 * プラン
	 * 
	 * @member saklient.cloud.resource.Disk#m_plan
	 * @type DiskPlan
	 * @protected
	 */
	m_plan : DiskPlan;
	
	/**
	 * 接続先のサーバ
	 * 
	 * @member saklient.cloud.resource.Disk#m_server
	 * @type Server
	 * @protected
	 */
	m_server : Server;
	
	/**
	 * 有効状態 {{#crossLink "EAvailability"}}{{/crossLink}}
	 * 
	 * @member saklient.cloud.resource.Disk#m_availability
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
		return "/disk";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Disk";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Disks";
	}
	
	/**
	 * @private
	 * @method _className
	 * @return {string}
	 */
	_className() : string {
		return "Disk";
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
	 * @return {Disk} this
	 */
	save() : Disk {
		return (<Disk><any>(this._save()));
	}
	
	/**
	 * 最新のリソース情報を再取得します。
	 * 
	 * @method reload
	 * @chainable
	 * @public
	 * @return {Disk} this
	 */
	reload() : Disk {
		return (<Disk><any>(this._reload()));
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
	 * @method get_isAvailable
	 * @protected
	 * @private
	 * @return {boolean}
	 */
	get_isAvailable() : boolean {
		return this.get_availability() == EAvailability.available;
	}
	
	/**
	 * ディスクが利用可能なときtrueを返します。
	 * 
	 * @property isAvailable
	 * @type boolean
	 * @readOnly
	 * @public
	 */
	get isAvailable() : boolean { return this.get_isAvailable(); }
	
	
	/**
	 * @method get_sizeGib
	 * @protected
	 * @private
	 * @return {number}
	 */
	get_sizeGib() : number {
		return this.get_sizeMib() >> 10;
	}
	
	/**
	 * @method set_sizeGib
	 * @protected
	 * @private
	 * @param {number} sizeGib
	 * @return {number}
	 */
	set_sizeGib(sizeGib:number) : number {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(sizeGib, "number");
		this.set_sizeMib(sizeGib * 1024);
		return sizeGib;
	}
	
	/**
	 * サイズ[GiB]
	 * 
	 * @property sizeGib
	 * @type number
	 * @public
	 */
	get sizeGib() : number { return this.get_sizeGib(); }
	set sizeGib(v:number) { this.set_sizeGib(v); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resource.Disk#_source
	 * @type Resource
	 */
	private _source : Resource;
	
	/**
	 * @method get_source
	 * @private
	 * @return {Resource}
	 */
	get_source() : Resource {
		return this._source;
	}
	
	/**
	 * @method set_source
	 * @private
	 * @param {Resource} source
	 * @return {Resource}
	 */
	set_source(source:Resource) : Resource {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(source, "saklient.cloud.resource.Resource");
		this._source = source;
		return source;
	}
	
	/**
	 * ディスクのコピー元
	 * 
	 * @property source
	 * @type Resource
	 * @public
	 */
	get source() : Resource { return this.get_source(); }
	set source(v:Resource) { this.set_source(v); }
	
	
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
			if (("SourceDisk" in r)) {
				var s:any = r["SourceDisk"];
				if (s != null) {
					var id:any = s["ID"];
					if (id != null) {
						this._source = new Disk(this._client, s);
					};
				};
			};
			if (("SourceArchive" in r)) {
				var s:any = r["SourceArchive"];
				if (s != null) {
					var id:any = s["ID"];
					if (id != null) {
						var obj:any = Util.createClassInstance("saklient.cloud.resource.Archive", [this._client, s]);
						this._source = (<Resource><any>(obj));
					};
				};
			};
		};
	}
	
	/**
	 * @private
	 * @method _onAfterApiSerialize
	 * @protected
	 * @param {any} r
	 * @param {boolean} withClean
	 * @return {void}
	 */
	_onAfterApiSerialize(r:any, withClean:boolean) : void {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(withClean, "boolean");
		if (r == null) {
			return;
		};
		if (this._source != null) {
			if (this._source._className() == "Disk") {
				var s:any = withClean ? this._source.apiSerialize(true) : { ID: this._source._id() };
				r["SourceDisk"] = s;
			}
			else {
				if (this._source._className() == "Archive") {
					var s:any = withClean ? this._source.apiSerialize(true) : { ID: this._source._id() };
					r["SourceArchive"] = s;
				}
				else {
					this._source = null;
					Util.validateType(this._source, "Disk or Archive", true);
				};
			};
		};
	}
	
	/**
	 * ディスクをサーバに取り付けます。
	 * 
	 * @method connectTo
	 * @chainable
	 * @public
	 * @param {Server} server
	 * @return {Disk} this
	 */
	connectTo(server:Server) : Disk {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(server, "saklient.cloud.resource.Server");
		this._client.request("PUT", "/disk/" + this._id() + "/to/server/" + server._id());
		return this;
	}
	
	/**
	 * ディスクをサーバから取り外します。
	 * 
	 * @method disconnect
	 * @chainable
	 * @public
	 * @return {Disk} this
	 */
	disconnect() : Disk {
		this._client.request("DELETE", "/disk/" + this._id() + "/to/server");
		return this;
	}
	
	/**
	 * ディスク修正を行うためのオブジェクトを用意します。
	 * 
	 * 返り値のオブジェクトにパラメータを設定し、write() を呼ぶことで修正を行います。
	 * 
	 * @method createConfig
	 * @public
	 * @return {DiskConfig}
	 */
	createConfig() : DiskConfig {
		return new DiskConfig(this._client, this._id());
	}
	
	/**
	 * コピー中のディスクが利用可能になるまで待機します。
	 * 
	 * @private
	 * @method afterCopy
	 * @param {number} timeoutSec
	 * @param {(Disk, boolean) => void} callback
	 * @return {void}
	 */
	afterCopy(timeoutSec:number, callback:(Disk, boolean) => void) : void {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(timeoutSec, "number");
		Util.validateType(callback, "function");
		var ret = this.sleepWhileCopying(timeoutSec);
		callback(this, ret);
	}
	
	/**
	 * コピー中のディスクが利用可能になるまで待機します。
	 * 
	 * @method sleepWhileCopying
	 * @public
	 * @param {number} timeoutSec=3600
	 * @return {boolean} 成功時はtrue、タイムアウトやエラーによる失敗時はfalseを返します。
	 */
	sleepWhileCopying(timeoutSec:number=3600) : boolean {
		Util.validateType(timeoutSec, "number");
		var step:number = 3;
		while (0 < timeoutSec) {
			this.reload();
			var a:string = this.get_availability();
			if (a == EAvailability.available) {
				return true;
			};
			if (a != EAvailability.migrating) {
				timeoutSec = 0;
			};
			timeoutSec -= step;
			if (0 < timeoutSec) {
				Util.sleep(step);
			};
		};
		return false;
	}
	
	/**
	 * @member saklient.cloud.resource.Disk#n_id
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
	 * @member saklient.cloud.resource.Disk#n_name
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
	 * @member saklient.cloud.resource.Disk#n_description
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
	 * @member saklient.cloud.resource.Disk#n_tags
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
	 * @member saklient.cloud.resource.Disk#n_icon
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
		Util.validateType(v, "saklient.cloud.resource.Icon");
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
	 * @member saklient.cloud.resource.Disk#n_sizeMib
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_sizeMib : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_sizeMib
	 * @private
	 * @return {number}
	 */
	private get_sizeMib() : number {
		return this.m_sizeMib;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_sizeMib
	 * @private
	 * @param {number} v
	 * @return {number}
	 */
	private set_sizeMib(v:number) : number {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "number");
		if (!this.isNew) {
			throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resource.Disk#sizeMib");
		};
		this.m_sizeMib = v;
		this.n_sizeMib = true;
		return this.m_sizeMib;
	}
	
	/**
	 * サイズ[MiB]
	 * 
	 * @property sizeMib
	 * @type number
	 * @public
	 */
	get sizeMib() : number { return this.get_sizeMib(); }
	set sizeMib(v:number) { this.set_sizeMib(v); }
	
	
	/**
	 * @member saklient.cloud.resource.Disk#n_serviceClass
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
	 * @member saklient.cloud.resource.Disk#n_plan
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_plan : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_plan
	 * @private
	 * @return {DiskPlan}
	 */
	private get_plan() : DiskPlan {
		return this.m_plan;
	}
	
	/**
	 * プラン
	 * 
	 * @property plan
	 * @type DiskPlan
	 * @readOnly
	 * @public
	 */
	get plan() : DiskPlan { return this.get_plan(); }
	
	
	/**
	 * @member saklient.cloud.resource.Disk#n_server
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_server : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_server
	 * @private
	 * @return {Server}
	 */
	private get_server() : Server {
		return this.m_server;
	}
	
	/**
	 * 接続先のサーバ
	 * 
	 * @property server
	 * @type Server
	 * @readOnly
	 * @public
	 */
	get server() : Server { return this.get_server(); }
	
	
	/**
	 * @member saklient.cloud.resource.Disk#n_availability
	 * @default false
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
	 * 有効状態 {{#crossLink "EAvailability"}}{{/crossLink}}
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
		if (Util.existsPath(r, "SizeMB")) {
			this.m_sizeMib = Util.getByPath(r, "SizeMB") == null ? null : parseInt("" + Util.getByPath(r, "SizeMB"), 10);
		}
		else {
			this.m_sizeMib = null;
			this.isIncomplete = true;
		};
		this.n_sizeMib = false;
		if (Util.existsPath(r, "ServiceClass")) {
			this.m_serviceClass = Util.getByPath(r, "ServiceClass") == null ? null : "" + Util.getByPath(r, "ServiceClass");
		}
		else {
			this.m_serviceClass = null;
			this.isIncomplete = true;
		};
		this.n_serviceClass = false;
		if (Util.existsPath(r, "Plan")) {
			this.m_plan = Util.getByPath(r, "Plan") == null ? null : new DiskPlan(this._client, Util.getByPath(r, "Plan"));
		}
		else {
			this.m_plan = null;
			this.isIncomplete = true;
		};
		this.n_plan = false;
		if (Util.existsPath(r, "Server")) {
			this.m_server = Util.getByPath(r, "Server") == null ? null : new Server(this._client, Util.getByPath(r, "Server"));
		}
		else {
			this.m_server = null;
			this.isIncomplete = true;
		};
		this.n_server = false;
		if (Util.existsPath(r, "Availability")) {
			this.m_availability = Util.getByPath(r, "Availability") == null ? null : "" + Util.getByPath(r, "Availability");
		}
		else {
			this.m_availability = null;
			this.isIncomplete = true;
		};
		this.n_availability = false;
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
		if (withClean || this.n_sizeMib) {
			Util.setByPath(ret, "SizeMB", this.m_sizeMib);
		};
		if (withClean || this.n_serviceClass) {
			Util.setByPath(ret, "ServiceClass", this.m_serviceClass);
		};
		if (withClean || this.n_plan) {
			Util.setByPath(ret, "Plan", withClean ? (this.m_plan == null ? null : this.m_plan.apiSerialize(withClean)) : (this.m_plan == null ? { ID: "0" } : this.m_plan.apiSerializeID()));
		};
		if (withClean || this.n_server) {
			Util.setByPath(ret, "Server", withClean ? (this.m_server == null ? null : this.m_server.apiSerialize(withClean)) : (this.m_server == null ? { ID: "0" } : this.m_server.apiSerializeID()));
		};
		if (withClean || this.n_availability) {
			Util.setByPath(ret, "Availability", this.m_availability);
		};
		if (missing.length > 0) {
			throw new SaklientException("required_field", "Required fields must be set before the Disk creation: " + missing.join(", "));
		};
		return ret;
	}
	
}


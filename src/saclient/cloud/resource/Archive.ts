/// <reference path="../Client.ts" />
/// <reference path="Resource.ts" />
/// <reference path="DiskPlan.ts" />
/// <reference path="Server.ts" />

/**
 * @module saclient.cloud.resource
 */
module saclient.cloud.resource {

	import Client = saclient.cloud.Client;
	import Resource = saclient.cloud.resource.Resource;
	import DiskPlan = saclient.cloud.resource.DiskPlan;
	import Server = saclient.cloud.resource.Server;
	
	/**
	 * アーカイブのリソース情報へのアクセス機能や操作機能を備えたクラス。
	 * 
	 * @class Archive
	 * @constructor
	 * @extends Resource
	 */
	export class Archive extends saclient.cloud.resource.Resource {
		
		/**
		 * ID
		 * 
		 * @member saclient.cloud.resource.Archive#m_id
		 * @type string
		 * @protected
		 */
		m_id : string;
		
		/**
		 * スコープ
		 * 
		 * @member saclient.cloud.resource.Archive#m_scope
		 * @type string
		 * @protected
		 */
		m_scope : string;
		
		/**
		 * 名前
		 * 
		 * @member saclient.cloud.resource.Archive#m_name
		 * @type string
		 * @protected
		 */
		m_name : string;
		
		/**
		 * 説明
		 * 
		 * @member saclient.cloud.resource.Archive#m_description
		 * @type string
		 * @protected
		 */
		m_description : string;
		
		/**
		 * タグ
		 * 
		 * @member saclient.cloud.resource.Archive#m_tags
		 * @type string[]
		 * @protected
		 */
		m_tags : string[];
		
		/**
		 * アイコン
		 * 
		 * @member saclient.cloud.resource.Archive#m_icon
		 * @type Icon
		 * @protected
		 */
		m_icon : Icon;
		
		/**
		 * サイズ[MiB]
		 * 
		 * @member saclient.cloud.resource.Archive#m_sizeMib
		 * @type number
		 * @protected
		 */
		m_sizeMib : number;
		
		/**
		 * サービスクラス
		 * 
		 * @member saclient.cloud.resource.Archive#m_serviceClass
		 * @type string
		 * @protected
		 */
		m_serviceClass : string;
		
		/**
		 * プラン
		 * 
		 * @member saclient.cloud.resource.Archive#m_plan
		 * @type DiskPlan
		 * @protected
		 */
		m_plan : DiskPlan;
		
		/**
		 * @private
		 * @method _apiPath
		 * @protected
		 * @return {string}
		 */
		_apiPath() : string {
			return "/archive";
		}
		
		/**
		 * @private
		 * @method _rootKey
		 * @protected
		 * @return {string}
		 */
		_rootKey() : string {
			return "Archive";
		}
		
		/**
		 * @private
		 * @method _rootKeyM
		 * @protected
		 * @return {string}
		 */
		_rootKeyM() : string {
			return "Archives";
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
		 * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
		 * 
		 * @method create
		 * @chainable
		 * @public
		 * @return {Archive} this
		 */
		create() : Archive {
			return (<Archive><any>(this._create()));
		}
		
		/**
		 * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
		 * 
		 * @method save
		 * @chainable
		 * @public
		 * @return {Archive} this
		 */
		save() : Archive {
			return (<Archive><any>(this._save()));
		}
		
		/**
		 * 最新のリソース情報を再取得します。
		 * 
		 * @method reload
		 * @chainable
		 * @public
		 * @return {Archive} this
		 */
		reload() : Archive {
			return (<Archive><any>(this._reload()));
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
		 * @method get_sizeGib
		 * @protected
		 * @return {number}
		 */
		get_sizeGib() : number {
			return this.get_sizeMib() >> 10;
		}
		
		/**
		 * サイズ[GiB]
		 * 
		 * @property sizeGib
		 * @type number
		 * @readOnly
		 * @public
		 */
		get sizeGib() : number { return this.get_sizeGib(); }
		
		
		/**
		 * @member saclient.cloud.resource.Archive#n_id
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
		 * @member saclient.cloud.resource.Archive#n_scope
		 * @type boolean
		 * @private
		 */
		private n_scope : boolean = false;
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method get_scope
		 * @private
		 * @return {string}
		 */
		private get_scope() : string {
			return this.m_scope;
		}
		
		/**
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method set_scope
		 * @private
		 * @param {string} v
		 * @return {string}
		 */
		private set_scope(v:string) : string {
			this.m_scope = v;
			this.n_scope = true;
			return this.m_scope;
		}
		
		/**
		 * スコープ
		 * 
		 * @property scope
		 * @type string
		 * @public
		 */
		get scope() : string { return this.get_scope(); }
		set scope(v:string) { this.set_scope(v); }
		
		
		/**
		 * @member saclient.cloud.resource.Archive#n_name
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
		 * @member saclient.cloud.resource.Archive#n_description
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
		 * @member saclient.cloud.resource.Archive#n_tags
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
		 * @member saclient.cloud.resource.Archive#n_icon
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
		 * @member saclient.cloud.resource.Archive#n_sizeMib
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
		 * サイズ[MiB]
		 * 
		 * @property sizeMib
		 * @type number
		 * @readOnly
		 * @public
		 */
		get sizeMib() : number { return this.get_sizeMib(); }
		
		
		/**
		 * @member saclient.cloud.resource.Archive#n_serviceClass
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
		 * @member saclient.cloud.resource.Archive#n_plan
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
		 * (This method is generated in Translator_default#buildImpl)
		 * 
		 * @method apiDeserialize
		 * @public
		 * @param {any} r
		 */
		apiDeserialize(r:any) {
			this.isIncomplete = true;
			if (("ID" in r)) {
				this.m_id = r["ID"] == null ? null : "" + r["ID"];
				this.n_id = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("Scope" in r)) {
				this.m_scope = r["Scope"] == null ? null : "" + r["Scope"];
				this.n_scope = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("Name" in r)) {
				this.m_name = r["Name"] == null ? null : "" + r["Name"];
				this.n_name = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("Description" in r)) {
				this.m_description = r["Description"] == null ? null : "" + r["Description"];
				this.n_description = false;
			}
			else {
				this.isIncomplete = false;
			};
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
				this.n_tags = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("Icon" in r)) {
				this.m_icon = r["Icon"] == null ? null : new Icon(this._client, r["Icon"]);
				this.n_icon = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("SizeMB" in r)) {
				this.m_sizeMib = r["SizeMB"] == null ? null : parseInt("" + r["SizeMB"], 10);
				this.n_sizeMib = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("ServiceClass" in r)) {
				this.m_serviceClass = r["ServiceClass"] == null ? null : "" + r["ServiceClass"];
				this.n_serviceClass = false;
			}
			else {
				this.isIncomplete = false;
			};
			if (("Plan" in r)) {
				this.m_plan = r["Plan"] == null ? null : new DiskPlan(this._client, r["Plan"]);
				this.n_plan = false;
			}
			else {
				this.isIncomplete = false;
			};
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
			if (withClean || this.n_scope) {
				ret["Scope"] = this.m_scope;
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
			if (withClean || this.n_sizeMib) {
				ret["SizeMB"] = this.m_sizeMib;
			};
			if (withClean || this.n_serviceClass) {
				ret["ServiceClass"] = this.m_serviceClass;
			};
			if (withClean || this.n_plan) {
				ret["Plan"] = withClean ? (this.m_plan == null ? null : this.m_plan.apiSerialize(withClean)) : (this.m_plan == null ? { ID: "0" } : this.m_plan.apiSerializeID());
			};
			return ret;
		}
		
	}
	
}

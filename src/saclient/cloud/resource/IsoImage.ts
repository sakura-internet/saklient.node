'use strict';

/// <reference path="../../../node.d.ts" />

export = IsoImage;

import Util = require('../../Util');
import Client = require('../Client');
import Resource = require('./Resource');
import Icon = require('./Icon');
import EScope = require('../enums/EScope');

/**
 * ISOイメージのリソース情報へのアクセス機能や操作機能を備えたクラス。
 * 
 * @class IsoImage
 * @constructor
 * @extends Resource
 */
class IsoImage extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saclient.cloud.resource.IsoImage#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * スコープ
	 * 
	 * @member saclient.cloud.resource.IsoImage#m_scope
	 * @type string
	 * @protected
	 */
	m_scope : string;
	
	/**
	 * 名前
	 * 
	 * @member saclient.cloud.resource.IsoImage#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * 説明
	 * 
	 * @member saclient.cloud.resource.IsoImage#m_description
	 * @type string
	 * @protected
	 */
	m_description : string;
	
	/**
	 * タグ
	 * 
	 * @member saclient.cloud.resource.IsoImage#m_tags
	 * @type string[]
	 * @protected
	 */
	m_tags : string[];
	
	/**
	 * アイコン
	 * 
	 * @member saclient.cloud.resource.IsoImage#m_icon
	 * @type Icon
	 * @protected
	 */
	m_icon : Icon;
	
	/**
	 * サイズ[MiB]
	 * 
	 * @member saclient.cloud.resource.IsoImage#m_sizeMib
	 * @type number
	 * @protected
	 */
	m_sizeMib : number;
	
	/**
	 * サービスクラス
	 * 
	 * @member saclient.cloud.resource.IsoImage#m_serviceClass
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
		return "/cdrom";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "CDROM";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "CDROMs";
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
	 * @return {IsoImage} this
	 */
	save() : IsoImage {
		return (<IsoImage><any>(this._save()));
	}
	
	/**
	 * 最新のリソース情報を再取得します。
	 * 
	 * @method reload
	 * @chainable
	 * @public
	 * @return {IsoImage} this
	 */
	reload() : IsoImage {
		return (<IsoImage><any>(this._reload()));
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
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(client, "saclient.cloud.Client");
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
	 * @member saclient.cloud.resource.IsoImage#n_id
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
	 * @member saclient.cloud.resource.IsoImage#n_scope
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
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
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
	 * @member saclient.cloud.resource.IsoImage#n_name
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
	 * @member saclient.cloud.resource.IsoImage#n_description
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
	 * @member saclient.cloud.resource.IsoImage#n_tags
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
	 * @member saclient.cloud.resource.IsoImage#n_icon
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
		Util.validateType(v, "saclient.cloud.resource.Icon");
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
	 * @member saclient.cloud.resource.IsoImage#n_sizeMib
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
	 * @member saclient.cloud.resource.IsoImage#n_serviceClass
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
		if (Util.existsPath(r, "Scope")) {
			this.m_scope = Util.getByPath(r, "Scope") == null ? null : "" + Util.getByPath(r, "Scope");
		}
		else {
			this.m_scope = null;
			this.isIncomplete = true;
		};
		this.n_scope = false;
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
		Util.validateType(withClean, "boolean");
		var ret:any = {  };
		if (withClean || this.n_id) {
			Util.setByPath(ret, "ID", this.m_id);
		};
		if (withClean || this.n_scope) {
			Util.setByPath(ret, "Scope", this.m_scope);
		};
		if (withClean || this.n_name) {
			Util.setByPath(ret, "Name", this.m_name);
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
		return ret;
	}
	
}


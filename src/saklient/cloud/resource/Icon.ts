/// <reference path="../../../node.d.ts" />

export = Icon;

import Util = require('../../Util');
import SaklientException = require('../../errors/SaklientException');
import Client = require('../Client');
import Resource = require('./Resource');
import EScope = require('../enums/EScope');

'use strict';

/**
 * アイコンの実体1つに対応し、属性の取得や操作を行うためのクラス。
 * 
 * @module saklient.cloud.resource.Icon
 * @class Icon
 * @constructor
 * @extends Resource
 */
class Icon extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saklient.cloud.resource.Icon#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * スコープ {{#crossLink "EScope"}}{{/crossLink}}
	 * 
	 * @member saklient.cloud.resource.Icon#m_scope
	 * @type string
	 * @protected
	 */
	m_scope : string;
	
	/**
	 * 名前
	 * 
	 * @member saklient.cloud.resource.Icon#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * URL
	 * 
	 * @member saklient.cloud.resource.Icon#m_url
	 * @type string
	 * @protected
	 */
	m_url : string;
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/icon";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "Icon";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Icons";
	}
	
	/**
	 * @private
	 * @method _className
	 * @return {string}
	 */
	_className() : string {
		return "Icon";
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
	 * @return {Icon} this
	 */
	save() : Icon {
		return (<Icon><any>(this._save()));
	}
	
	/**
	 * 最新のリソース情報を再取得します。
	 * 
	 * @method reload
	 * @chainable
	 * @public
	 * @return {Icon} this
	 */
	reload() : Icon {
		return (<Icon><any>(this._reload()));
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
	 * @member saklient.cloud.resource.Icon#n_id
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
	 * @member saklient.cloud.resource.Icon#n_scope
	 * @default false
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
	 * スコープ {{#crossLink "EScope"}}{{/crossLink}}
	 * 
	 * @property scope
	 * @type string
	 * @readOnly
	 * @public
	 */
	get scope() : string { return this.get_scope(); }
	
	
	/**
	 * @member saklient.cloud.resource.Icon#n_name
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
	 * @member saklient.cloud.resource.Icon#n_url
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_url : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_url
	 * @private
	 * @return {string}
	 */
	private get_url() : string {
		return this.m_url;
	}
	
	/**
	 * URL
	 * 
	 * @property url
	 * @type string
	 * @readOnly
	 * @public
	 */
	get url() : string { return this.get_url(); }
	
	
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
		if (Util.existsPath(r, "URL")) {
			this.m_url = Util.getByPath(r, "URL") == null ? null : "" + Util.getByPath(r, "URL");
		}
		else {
			this.m_url = null;
			this.isIncomplete = true;
		};
		this.n_url = false;
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
		if (withClean || this.n_scope) {
			Util.setByPath(ret, "Scope", this.m_scope);
		};
		if (withClean || this.n_name) {
			Util.setByPath(ret, "Name", this.m_name);
		}
		else {
			if (this.isNew) {
				missing.push("name");
			};
		};
		if (withClean || this.n_url) {
			Util.setByPath(ret, "URL", this.m_url);
		};
		if (missing.length > 0) {
			throw new SaklientException("required_field", "Required fields must be set before the Icon creation: " + missing.join(", "));
		};
		return ret;
	}
	
}


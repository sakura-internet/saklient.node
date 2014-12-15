/// <reference path="../../../node.d.ts" />

export = License;

import Util = require('../../Util');
import SaklientException = require('../../errors/SaklientException');
import Client = require('../Client');
import Resource = require('./Resource');
import LicenseInfo = require('./LicenseInfo');

'use strict';

/**
 * ライセンスの実体1つに対応し、属性の取得や操作を行うためのクラス。
 * 
 * @module saklient.cloud.resources.License
 * @class License
 * @constructor
 * @extends Resource
 */
class License extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saklient.cloud.resources.License#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * 名前
	 * 
	 * @member saklient.cloud.resources.License#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * ライセンス種別情報
	 * 
	 * @member saklient.cloud.resources.License#m_info
	 * @type LicenseInfo
	 * @protected
	 */
	m_info : LicenseInfo;
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/license";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "License";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "Licenses";
	}
	
	/**
	 * @private
	 * @method _className
	 * @return {string}
	 */
	_className() : string {
		return "License";
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
	 * @return {License} this
	 */
	save() : License {
		return (<License><any>(this._save()));
	}
	
	/**
	 * 最新のリソース情報を再取得します。
	 * 
	 * @method reload
	 * @chainable
	 * @public
	 * @return {License} this
	 */
	reload() : License {
		return (<License><any>(this._reload()));
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
	 * @member saklient.cloud.resources.License#n_id
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
	 * @member saklient.cloud.resources.License#n_name
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
	 * @member saklient.cloud.resources.License#n_info
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_info : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_info
	 * @private
	 * @return {LicenseInfo}
	 */
	private get_info() : LicenseInfo {
		return this.m_info;
	}
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method set_info
	 * @private
	 * @param {LicenseInfo} v
	 * @return {LicenseInfo}
	 */
	private set_info(v:LicenseInfo) : LicenseInfo {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "saklient.cloud.resources.LicenseInfo");
		if (!this.isNew) {
			throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.License#info");
		};
		this.m_info = v;
		this.n_info = true;
		return this.m_info;
	}
	
	/**
	 * ライセンス種別情報
	 * 
	 * @property info
	 * @type LicenseInfo
	 * @public
	 */
	get info() : LicenseInfo { return this.get_info(); }
	set info(v:LicenseInfo) { this.set_info(v); }
	
	
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
		if (Util.existsPath(r, "LicenseInfo")) {
			this.m_info = Util.getByPath(r, "LicenseInfo") == null ? null : new LicenseInfo(this._client, Util.getByPath(r, "LicenseInfo"));
		}
		else {
			this.m_info = null;
			this.isIncomplete = true;
		};
		this.n_info = false;
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
		if (withClean || this.n_info) {
			Util.setByPath(ret, "LicenseInfo", withClean ? (this.m_info == null ? null : this.m_info.apiSerialize(withClean)) : (this.m_info == null ? { ID: "0" } : this.m_info.apiSerializeID()));
		}
		else {
			if (this.isNew) {
				missing.push("info");
			};
		};
		if (missing.length > 0) {
			throw new SaklientException("required_field", "Required fields must be set before the License creation: " + missing.join(", "));
		};
		return ret;
	}
	
}


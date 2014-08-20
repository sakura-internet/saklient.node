/// <reference path="../../../node.d.ts" />

export = DiskPlan;

import Util = require('../../Util');
import Client = require('../Client');
import Resource = require('./Resource');
import EStorageClass = require('../enums/EStorageClass');

'use strict';

/**
 * ディスクプラン情報の1レコードに対応するクラス。
 * 
 * @class DiskPlan
 * @constructor
 * @extends Resource
 */
class DiskPlan extends Resource {
	
	/**
	 * ID
	 * 
	 * @member saklient.cloud.resource.DiskPlan#m_id
	 * @type string
	 * @protected
	 */
	m_id : string;
	
	/**
	 * 名前
	 * 
	 * @member saklient.cloud.resource.DiskPlan#m_name
	 * @type string
	 * @protected
	 */
	m_name : string;
	
	/**
	 * ストレージクラス {{#crossLink "EStorageClass"}}{{/crossLink}}
	 * 
	 * @member saklient.cloud.resource.DiskPlan#m_storageClass
	 * @type string
	 * @protected
	 */
	m_storageClass : string;
	
	/**
	 * @private
	 * @method _apiPath
	 * @protected
	 * @return {string}
	 */
	_apiPath() : string {
		return "/product/disk";
	}
	
	/**
	 * @private
	 * @method _rootKey
	 * @protected
	 * @return {string}
	 */
	_rootKey() : string {
		return "DiskPlan";
	}
	
	/**
	 * @private
	 * @method _rootKeyM
	 * @protected
	 * @return {string}
	 */
	_rootKeyM() : string {
		return "DiskPlans";
	}
	
	/**
	 * @private
	 * @method _className
	 * @return {string}
	 */
	_className() : string {
		return "DiskPlan";
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
	 * @member saklient.cloud.resource.DiskPlan#n_id
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
	 * @member saklient.cloud.resource.DiskPlan#n_name
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
	 * 名前
	 * 
	 * @property name
	 * @type string
	 * @readOnly
	 * @public
	 */
	get name() : string { return this.get_name(); }
	
	
	/**
	 * @member saklient.cloud.resource.DiskPlan#n_storageClass
	 * @type boolean
	 * @private
	 */
	private n_storageClass : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_storageClass
	 * @private
	 * @return {string}
	 */
	private get_storageClass() : string {
		return this.m_storageClass;
	}
	
	/**
	 * ストレージクラス {{#crossLink "EStorageClass"}}{{/crossLink}}
	 * 
	 * @property storageClass
	 * @type string
	 * @readOnly
	 * @public
	 */
	get storageClass() : string { return this.get_storageClass(); }
	
	
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
		if (Util.existsPath(r, "StorageClass")) {
			this.m_storageClass = Util.getByPath(r, "StorageClass") == null ? null : "" + Util.getByPath(r, "StorageClass");
		}
		else {
			this.m_storageClass = null;
			this.isIncomplete = true;
		};
		this.n_storageClass = false;
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
		var ret:any = {  };
		if (withClean || this.n_id) {
			Util.setByPath(ret, "ID", this.m_id);
		};
		if (withClean || this.n_name) {
			Util.setByPath(ret, "Name", this.m_name);
		};
		if (withClean || this.n_storageClass) {
			Util.setByPath(ret, "StorageClass", this.m_storageClass);
		};
		return ret;
	}
	
}


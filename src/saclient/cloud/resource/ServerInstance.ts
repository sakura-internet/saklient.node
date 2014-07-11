/// <reference path="../../../node.d.ts" />

export = ServerInstance;

import Util = require('../Util');
import Client = require('../Client');
import Resource = require('./Resource');
import EServerInstanceStatus = require('../enums/EServerInstanceStatus');

/**
 * サーバインスタンスのリソース情報へのアクセス機能や操作機能を備えたクラス。
 * 
 * @class ServerInstance
 * @constructor
 * @extends Resource
 */
class ServerInstance extends Resource {
	
	/**
	 * @member saclient.cloud.resource.ServerInstance#m_status
	 * @type string
	 * @protected
	 */
	m_status : string;
	
	/**
	 * @member saclient.cloud.resource.ServerInstance#m_beforeStatus
	 * @type string
	 * @protected
	 */
	m_beforeStatus : string;
	
	/**
	 * @member saclient.cloud.resource.ServerInstance#m_statusChangedAt
	 * @type Date
	 * @protected
	 */
	m_statusChangedAt : Date;
	
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
		return this.get_status() != null && EServerInstanceStatus.compare(this.get_status(), EServerInstanceStatus.up) == 0;
	}
	
	/**
	 * サーバが停止しているときtrueを返します。
	 * 
	 * @method isDown
	 * @public
	 * @return {boolean}
	 */
	isDown() : boolean {
		return this.get_status() == null || EServerInstanceStatus.compare(this.get_status(), EServerInstanceStatus.down) == 0;
	}
	
	/**
	 * @member saclient.cloud.resource.ServerInstance#n_status
	 * @type boolean
	 * @private
	 */
	private n_status : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_status
	 * @private
	 * @return {string}
	 */
	private get_status() : string {
		return this.m_status;
	}
	
	/**
	 * @property status
	 * @type string
	 * @readOnly
	 * @public
	 */
	get status() : string { return this.get_status(); }
	
	
	/**
	 * @member saclient.cloud.resource.ServerInstance#n_beforeStatus
	 * @type boolean
	 * @private
	 */
	private n_beforeStatus : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_beforeStatus
	 * @private
	 * @return {string}
	 */
	private get_beforeStatus() : string {
		return this.m_beforeStatus;
	}
	
	/**
	 * @property beforeStatus
	 * @type string
	 * @readOnly
	 * @public
	 */
	get beforeStatus() : string { return this.get_beforeStatus(); }
	
	
	/**
	 * @member saclient.cloud.resource.ServerInstance#n_statusChangedAt
	 * @type boolean
	 * @private
	 */
	private n_statusChangedAt : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_statusChangedAt
	 * @private
	 * @return {Date}
	 */
	private get_statusChangedAt() : Date {
		return this.m_statusChangedAt;
	}
	
	/**
	 * @property statusChangedAt
	 * @type Date
	 * @readOnly
	 * @public
	 */
	get statusChangedAt() : Date { return this.get_statusChangedAt(); }
	
	
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
		if (("Status" in r)) {
			this.m_status = r["Status"] == null ? null : "" + r["Status"];
		}
		else {
			this.m_status = null;
			this.isIncomplete = true;
		};
		this.n_status = false;
		if (("BeforeStatus" in r)) {
			this.m_beforeStatus = r["BeforeStatus"] == null ? null : "" + r["BeforeStatus"];
		}
		else {
			this.m_beforeStatus = null;
			this.isIncomplete = true;
		};
		this.n_beforeStatus = false;
		if (("StatusChangedAt" in r)) {
			this.m_statusChangedAt = r["StatusChangedAt"] == null ? null : Util.str2date("" + r["StatusChangedAt"]);
		}
		else {
			this.m_statusChangedAt = null;
			this.isIncomplete = true;
		};
		this.n_statusChangedAt = false;
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
		if (withClean || this.n_status) {
			ret["Status"] = this.m_status;
		};
		if (withClean || this.n_beforeStatus) {
			ret["BeforeStatus"] = this.m_beforeStatus;
		};
		if (withClean || this.n_statusChangedAt) {
			ret["StatusChangedAt"] = this.m_statusChangedAt == null ? null : Util.date2str(this.m_statusChangedAt);
		};
		return ret;
	}
	
}


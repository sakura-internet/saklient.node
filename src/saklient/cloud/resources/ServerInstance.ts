/// <reference path="../../../node.d.ts" />

export = ServerInstance;

import Util = require('../../Util');
import Client = require('../Client');
import Resource = require('./Resource');
import IsoImage = require('./IsoImage');
import EServerInstanceStatus = require('../enums/EServerInstanceStatus');

'use strict';

/**
 * サーバインスタンスの実体1つに対応し、属性の取得や操作を行うためのクラス。
 * 
 * @module saklient.cloud.resources.ServerInstance
 * @class ServerInstance
 * @constructor
 * @extends Resource
 */
class ServerInstance extends Resource {
	
	/**
	 * 起動状態 {{#crossLink "EServerInstanceStatus"}}{{/crossLink}}
	 * 
	 * @member saklient.cloud.resources.ServerInstance#m_status
	 * @type string
	 * @protected
	 */
	m_status : string;
	
	/**
	 * 前回の起動状態 {{#crossLink "EServerInstanceStatus"}}{{/crossLink}}
	 * 
	 * @member saklient.cloud.resources.ServerInstance#m_beforeStatus
	 * @type string
	 * @protected
	 */
	m_beforeStatus : string;
	
	/**
	 * 現在の起動状態に変化した日時
	 * 
	 * @member saklient.cloud.resources.ServerInstance#m_statusChangedAt
	 * @type Date
	 * @protected
	 */
	m_statusChangedAt : Date;
	
	/**
	 * 挿入されているISOイメージ
	 * 
	 * @member saklient.cloud.resources.ServerInstance#m_isoImage
	 * @type IsoImage
	 * @protected
	 */
	m_isoImage : IsoImage;
	
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
	 * @member saklient.cloud.resources.ServerInstance#n_status
	 * @default false
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
	 * 起動状態 {{#crossLink "EServerInstanceStatus"}}{{/crossLink}}
	 * 
	 * @property status
	 * @type string
	 * @readOnly
	 * @public
	 */
	get status() : string { return this.get_status(); }
	
	
	/**
	 * @member saklient.cloud.resources.ServerInstance#n_beforeStatus
	 * @default false
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
	 * 前回の起動状態 {{#crossLink "EServerInstanceStatus"}}{{/crossLink}}
	 * 
	 * @property beforeStatus
	 * @type string
	 * @readOnly
	 * @public
	 */
	get beforeStatus() : string { return this.get_beforeStatus(); }
	
	
	/**
	 * @member saklient.cloud.resources.ServerInstance#n_statusChangedAt
	 * @default false
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
	 * 現在の起動状態に変化した日時
	 * 
	 * @property statusChangedAt
	 * @type Date
	 * @readOnly
	 * @public
	 */
	get statusChangedAt() : Date { return this.get_statusChangedAt(); }
	
	
	/**
	 * @member saklient.cloud.resources.ServerInstance#n_isoImage
	 * @default false
	 * @type boolean
	 * @private
	 */
	private n_isoImage : boolean = false;
	
	/**
	 * (This method is generated in Translator_default#buildImpl)
	 * 
	 * @method get_isoImage
	 * @private
	 * @return {IsoImage}
	 */
	private get_isoImage() : IsoImage {
		return this.m_isoImage;
	}
	
	/**
	 * 挿入されているISOイメージ
	 * 
	 * @property isoImage
	 * @type IsoImage
	 * @readOnly
	 * @public
	 */
	get isoImage() : IsoImage { return this.get_isoImage(); }
	
	
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
		if (Util.existsPath(r, "Status")) {
			this.m_status = Util.getByPath(r, "Status") == null ? null : "" + Util.getByPath(r, "Status");
		}
		else {
			this.m_status = null;
			this.isIncomplete = true;
		};
		this.n_status = false;
		if (Util.existsPath(r, "BeforeStatus")) {
			this.m_beforeStatus = Util.getByPath(r, "BeforeStatus") == null ? null : "" + Util.getByPath(r, "BeforeStatus");
		}
		else {
			this.m_beforeStatus = null;
			this.isIncomplete = true;
		};
		this.n_beforeStatus = false;
		if (Util.existsPath(r, "StatusChangedAt")) {
			this.m_statusChangedAt = Util.getByPath(r, "StatusChangedAt") == null ? null : Util.str2date("" + Util.getByPath(r, "StatusChangedAt"));
		}
		else {
			this.m_statusChangedAt = null;
			this.isIncomplete = true;
		};
		this.n_statusChangedAt = false;
		if (Util.existsPath(r, "CDROM")) {
			this.m_isoImage = Util.getByPath(r, "CDROM") == null ? null : new IsoImage(this._client, Util.getByPath(r, "CDROM"));
		}
		else {
			this.m_isoImage = null;
			this.isIncomplete = true;
		};
		this.n_isoImage = false;
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
		if (withClean || this.n_status) {
			Util.setByPath(ret, "Status", this.m_status);
		};
		if (withClean || this.n_beforeStatus) {
			Util.setByPath(ret, "BeforeStatus", this.m_beforeStatus);
		};
		if (withClean || this.n_statusChangedAt) {
			Util.setByPath(ret, "StatusChangedAt", this.m_statusChangedAt == null ? null : Util.date2str(this.m_statusChangedAt));
		};
		if (withClean || this.n_isoImage) {
			Util.setByPath(ret, "CDROM", withClean ? (this.m_isoImage == null ? null : this.m_isoImage.apiSerialize(withClean)) : (this.m_isoImage == null ? { ID: "0" } : this.m_isoImage.apiSerializeID()));
		};
		return ret;
	}
	
}


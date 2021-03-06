/// <reference path="../../../node.d.ts" />

export = DiskConfig;

import Util = require('../../Util');
import Client = require('../Client');
import Script = require('./Script');

'use strict';

/**
 * ディスク修正のパラメータ。
 * 
 * @module saklient.cloud.resources.DiskConfig
 * @class DiskConfig
 * @constructor
 */
class DiskConfig {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskConfig#_client
	 * @type Client
	 * @protected
	 */
	_client : Client;
	
	/**
	 * @method get_client
	 * @protected
	 * @private
	 * @return {Client}
	 */
	get_client() : Client {
		return this._client;
	}
	
	/**
	 * @private
	 * @property client
	 * @type Client
	 * @readOnly
	 */
	get client() : Client { return this.get_client(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskConfig#_diskId
	 * @type string
	 * @protected
	 */
	_diskId : string;
	
	/**
	 * @method get_diskId
	 * @protected
	 * @private
	 * @return {string}
	 */
	get_diskId() : string {
		return this._diskId;
	}
	
	/**
	 * @private
	 * @property diskId
	 * @type string
	 * @readOnly
	 */
	get diskId() : string { return this.get_diskId(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskConfig#_hostName
	 * @type string
	 * @protected
	 */
	_hostName : string;
	
	/**
	 * @method get_hostName
	 * @protected
	 * @private
	 * @return {string}
	 */
	get_hostName() : string {
		return this._hostName;
	}
	
	/**
	 * @method set_hostName
	 * @protected
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	set_hostName(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		this._hostName = v;
		return v;
	}
	
	/**
	 * ホスト名
	 * 
	 * @property hostName
	 * @type string
	 * @public
	 */
	get hostName() : string { return this.get_hostName(); }
	set hostName(v:string) { this.set_hostName(v); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskConfig#_password
	 * @type string
	 * @protected
	 */
	_password : string;
	
	/**
	 * @method get_password
	 * @protected
	 * @private
	 * @return {string}
	 */
	get_password() : string {
		return this._password;
	}
	
	/**
	 * @method set_password
	 * @protected
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	set_password(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		this._password = v;
		return v;
	}
	
	/**
	 * ログインパスワード
	 * 
	 * @property password
	 * @type string
	 * @public
	 */
	get password() : string { return this.get_password(); }
	set password(v:string) { this.set_password(v); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskConfig#_sshKeys
	 * @type string[]
	 * @protected
	 */
	_sshKeys : string[];
	
	/**
	 * @method get_sshKeys
	 * @protected
	 * @private
	 * @return {string[]}
	 */
	get_sshKeys() : string[] {
		return this._sshKeys;
	}
	
	/**
	 * @method get_sshKey
	 * @protected
	 * @private
	 * @return {string}
	 */
	get_sshKey() : string {
		if (this._sshKeys.length < 1) {
			return null;
		};
		return this._sshKeys[0];
	}
	
	/**
	 * @method set_sshKey
	 * @protected
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	set_sshKey(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		if (this._sshKeys.length < 1) {
			this._sshKeys.push(v);
		}
		else {
			this._sshKeys[0] = v;
		};
		return v;
	}
	
	/**
	 * SSHキー
	 * 
	 * @property sshKey
	 * @type string
	 * @public
	 */
	get sshKey() : string { return this.get_sshKey(); }
	set sshKey(v:string) { this.set_sshKey(v); }
	
	
	/**
	 * SSHキー
	 * 
	 * @property sshKeys
	 * @type string[]
	 * @readOnly
	 * @public
	 */
	get sshKeys() : string[] { return this.get_sshKeys(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskConfig#_ipAddress
	 * @type string
	 * @protected
	 */
	_ipAddress : string;
	
	/**
	 * @method get_ipAddress
	 * @protected
	 * @private
	 * @return {string}
	 */
	get_ipAddress() : string {
		return this._ipAddress;
	}
	
	/**
	 * @method set_ipAddress
	 * @protected
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	set_ipAddress(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		this._ipAddress = v;
		return v;
	}
	
	/**
	 * IPアドレス
	 * 
	 * @property ipAddress
	 * @type string
	 * @public
	 */
	get ipAddress() : string { return this.get_ipAddress(); }
	set ipAddress(v:string) { this.set_ipAddress(v); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskConfig#_defaultRoute
	 * @type string
	 * @protected
	 */
	_defaultRoute : string;
	
	/**
	 * @method get_defaultRoute
	 * @protected
	 * @private
	 * @return {string}
	 */
	get_defaultRoute() : string {
		return this._defaultRoute;
	}
	
	/**
	 * @method set_defaultRoute
	 * @protected
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	set_defaultRoute(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		this._defaultRoute = v;
		return v;
	}
	
	/**
	 * デフォルトルート
	 * 
	 * @property defaultRoute
	 * @type string
	 * @public
	 */
	get defaultRoute() : string { return this.get_defaultRoute(); }
	set defaultRoute(v:string) { this.set_defaultRoute(v); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskConfig#_networkMaskLen
	 * @type number
	 * @protected
	 */
	_networkMaskLen : number;
	
	/**
	 * @method get_networkMaskLen
	 * @protected
	 * @private
	 * @return {number}
	 */
	get_networkMaskLen() : number {
		return this._networkMaskLen;
	}
	
	/**
	 * @method set_networkMaskLen
	 * @protected
	 * @private
	 * @param {number} v
	 * @return {number}
	 */
	set_networkMaskLen(v:number) : number {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "number");
		this._networkMaskLen = v;
		return v;
	}
	
	/**
	 * ネットワークマスク長
	 * 
	 * @property networkMaskLen
	 * @type number
	 * @public
	 */
	get networkMaskLen() : number { return this.get_networkMaskLen(); }
	set networkMaskLen(v:number) { this.set_networkMaskLen(v); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.DiskConfig#_scripts
	 * @type Script[]
	 * @protected
	 */
	_scripts : Script[];
	
	/**
	 * @method get_scripts
	 * @protected
	 * @private
	 * @return {Script[]}
	 */
	get_scripts() : Script[] {
		return this._scripts;
	}
	
	/**
	 * スタートアップスクリプト {{#crossLink "Script"}}{{/crossLink}} の配列（pushによりスクリプトを追加できます）
	 * 
	 * @property scripts
	 * @type Script[]
	 * @readOnly
	 * @public
	 */
	get scripts() : Script[] { return this.get_scripts(); }
	
	
	/**
	 * @private
	 * @constructor
	 * @param {Client} client
	 * @param {string} diskId
	 */
	constructor(client:Client, diskId:string) {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(client, "saklient.cloud.Client");
		Util.validateType(diskId, "string");
		this._client = client;
		this._diskId = diskId;
		this._hostName = null;
		this._password = null;
		this._sshKeys = [];
		this._ipAddress = null;
		this._defaultRoute = null;
		this._networkMaskLen = null;
		this._scripts = [];
	}
	
	/**
	 * スタートアップスクリプトを追加します。
	 * 
	 * diskConfig.addScript(script) と diskConfig.scripts.push(script) の効果は同等です。
	 * 
	 * @method addScript
	 * @chainable
	 * @public
	 * @param {Script} script
	 * @return {DiskConfig} this
	 */
	addScript(script:Script) : DiskConfig {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(script, "saklient.cloud.resources.Script");
		this._scripts.push(script);
		return this;
	}
	
	/**
	 * 修正内容を実際のディスクに書き込みます。
	 * 
	 * @method write
	 * @chainable
	 * @public
	 * @return {DiskConfig} this
	 */
	write() : DiskConfig {
		var q:any = {};
		if (this._hostName != null) {
			Util.setByPath(q, "HostName", this._hostName);
		};
		if (this._password != null) {
			Util.setByPath(q, "Password", this._password);
		};
		if (this._sshKeys.length > 0) {
			Util.setByPath(q, "SSHKey.PublicKey", this._sshKeys.join("\n"));
		};
		if (this._ipAddress != null) {
			Util.setByPath(q, "UserIPAddress", this._ipAddress);
		};
		if (this._defaultRoute != null) {
			Util.setByPath(q, "UserSubnet.DefaultRoute", this._defaultRoute);
		};
		if (this._networkMaskLen != null) {
			Util.setByPath(q, "UserSubnet.NetworkMaskLen", this._networkMaskLen);
		};
		if (0 < this._scripts.length) {
			var notes:any[] = [];
			for (var __it1:number=0; __it1<this._scripts.length; __it1++) {
				var script = this._scripts[__it1];
				notes.push({ ID: script._id() });
			};
			Util.setByPath(q, "Notes", notes);
		};
		var path:string = "/disk/" + this._diskId + "/config";
		this._client.request("PUT", path, q);
		return this;
	}
	
}


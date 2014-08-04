/// <reference path="../../../node.d.ts" />

export = DiskConfig;

import Util = require('../../Util');
import Client = require('../Client');

/**
 * ディスク修正のパラメータ
 * 
 * @class DiskConfig
 * @constructor
 */
class DiskConfig {
	
	/**
	 * @private
	 * @member saclient.cloud.resource.DiskConfig#_client
	 * @type Client
	 * @protected
	 */
	_client : Client;
	
	/**
	 * @method get_client
	 * @protected
	 * @return {Client}
	 */
	get_client() : Client {
		return this._client;
	}
	
	/**
	 * @property client
	 * @type Client
	 * @readOnly
	 * @public
	 */
	get client() : Client { return this.get_client(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.resource.DiskConfig#_diskId
	 * @type string
	 * @protected
	 */
	_diskId : string;
	
	/**
	 * @method get_diskId
	 * @protected
	 * @return {string}
	 */
	get_diskId() : string {
		return this._diskId;
	}
	
	/**
	 * @property diskId
	 * @type string
	 * @readOnly
	 * @public
	 */
	get diskId() : string { return this.get_diskId(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.resource.DiskConfig#_hostName
	 * @type string
	 * @protected
	 */
	_hostName : string;
	
	/**
	 * @method get_hostName
	 * @protected
	 * @return {string}
	 */
	get_hostName() : string {
		return this._hostName;
	}
	
	/**
	 * @method set_hostName
	 * @protected
	 * @param {string} v
	 * @return {string}
	 */
	set_hostName(v:string) : string {
		this._hostName = v;
		return v;
	}
	
	/**
	 * @property hostName
	 * @type string
	 * @public
	 */
	get hostName() : string { return this.get_hostName(); }
	set hostName(v:string) { this.set_hostName(v); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.resource.DiskConfig#_password
	 * @type string
	 * @protected
	 */
	_password : string;
	
	/**
	 * @method get_password
	 * @protected
	 * @return {string}
	 */
	get_password() : string {
		return this._password;
	}
	
	/**
	 * @method set_password
	 * @protected
	 * @param {string} v
	 * @return {string}
	 */
	set_password(v:string) : string {
		this._password = v;
		return v;
	}
	
	/**
	 * @property password
	 * @type string
	 * @public
	 */
	get password() : string { return this.get_password(); }
	set password(v:string) { this.set_password(v); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.resource.DiskConfig#_sshKey
	 * @type string
	 * @protected
	 */
	_sshKey : string;
	
	/**
	 * @method get_sshKey
	 * @protected
	 * @return {string}
	 */
	get_sshKey() : string {
		return this._sshKey;
	}
	
	/**
	 * @method set_sshKey
	 * @protected
	 * @param {string} v
	 * @return {string}
	 */
	set_sshKey(v:string) : string {
		this._sshKey = v;
		return v;
	}
	
	/**
	 * @property sshKey
	 * @type string
	 * @public
	 */
	get sshKey() : string { return this.get_sshKey(); }
	set sshKey(v:string) { this.set_sshKey(v); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.resource.DiskConfig#_ipAddress
	 * @type string
	 * @protected
	 */
	_ipAddress : string;
	
	/**
	 * @method get_ipAddress
	 * @protected
	 * @return {string}
	 */
	get_ipAddress() : string {
		return this._ipAddress;
	}
	
	/**
	 * @method set_ipAddress
	 * @protected
	 * @param {string} v
	 * @return {string}
	 */
	set_ipAddress(v:string) : string {
		this._ipAddress = v;
		return v;
	}
	
	/**
	 * @property ipAddress
	 * @type string
	 * @public
	 */
	get ipAddress() : string { return this.get_ipAddress(); }
	set ipAddress(v:string) { this.set_ipAddress(v); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.resource.DiskConfig#_defaultRoute
	 * @type string
	 * @protected
	 */
	_defaultRoute : string;
	
	/**
	 * @method get_defaultRoute
	 * @protected
	 * @return {string}
	 */
	get_defaultRoute() : string {
		return this._defaultRoute;
	}
	
	/**
	 * @method set_defaultRoute
	 * @protected
	 * @param {string} v
	 * @return {string}
	 */
	set_defaultRoute(v:string) : string {
		this._defaultRoute = v;
		return v;
	}
	
	/**
	 * @property defaultRoute
	 * @type string
	 * @public
	 */
	get defaultRoute() : string { return this.get_defaultRoute(); }
	set defaultRoute(v:string) { this.set_defaultRoute(v); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.resource.DiskConfig#_networkMaskLen
	 * @type number
	 * @protected
	 */
	_networkMaskLen : number;
	
	/**
	 * @method get_networkMaskLen
	 * @protected
	 * @return {number}
	 */
	get_networkMaskLen() : number {
		return this._networkMaskLen;
	}
	
	/**
	 * @method set_networkMaskLen
	 * @protected
	 * @param {number} v
	 * @return {number}
	 */
	set_networkMaskLen(v:number) : number {
		this._networkMaskLen = v;
		return v;
	}
	
	/**
	 * @property networkMaskLen
	 * @type number
	 * @public
	 */
	get networkMaskLen() : number { return this.get_networkMaskLen(); }
	set networkMaskLen(v:number) { this.set_networkMaskLen(v); }
	
	
	/**
	 * @private
	 * @constructor
	 * @public
	 * @param {string} diskId
	 * @param {Client} client
	 */
	constructor(client:Client, diskId:string) {
		this._client = client;
		this._diskId = diskId;
		this._hostName = null;
		this._password = null;
		this._sshKey = null;
		this._ipAddress = null;
		this._defaultRoute = null;
		this._networkMaskLen = null;
	}
	
	/**
	 * *
	 * 
	 * @method write
	 * @chainable
	 * @public
	 * @return {DiskConfig}
	 */
	write() : DiskConfig {
		var q:any = {};
		if (this._hostName != null) {
			Util.setByPath(q, "HostName", this._hostName);
		};
		if (this._password != null) {
			Util.setByPath(q, "Password", this._password);
		};
		if (this._sshKey != null) {
			Util.setByPath(q, "SSHKey.PublicKey", this._sshKey);
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
		var path:string = "/disk/" + this._diskId + "/config";
		var result:any = this._client.request("PUT", path, q);
		return this;
	}
	
}


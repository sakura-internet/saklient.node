/// <reference path="../../../node.d.ts" />

export = LbVirtualIp;

import Util = require('../../Util');
import LbServer = require('./LbServer');

'use strict';

/**
 * ロードバランサの仮想IPアドレス。
 * 
 * @module saklient.cloud.resources.LbVirtualIp
 * @class LbVirtualIp
 * @constructor
 */
class LbVirtualIp {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.LbVirtualIp#_virtualIpAddress
	 * @type string
	 * @protected
	 */
	_virtualIpAddress : string;
	
	/**
	 * @method get_virtualIpAddress
	 * @private
	 * @return {string}
	 */
	get_virtualIpAddress() : string {
		return this._virtualIpAddress;
	}
	
	/**
	 * VIPアドレス
	 * 
	 * @property virtualIpAddress
	 * @type string
	 * @readOnly
	 * @public
	 */
	get virtualIpAddress() : string { return this.get_virtualIpAddress(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.LbVirtualIp#_port
	 * @type number
	 * @protected
	 */
	_port : number;
	
	/**
	 * @method get_port
	 * @private
	 * @return {number}
	 */
	get_port() : number {
		return this._port;
	}
	
	/**
	 * ポート番号
	 * 
	 * @property port
	 * @type number
	 * @readOnly
	 * @public
	 */
	get port() : number { return this.get_port(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.LbVirtualIp#_delayLoop
	 * @type number
	 * @protected
	 */
	_delayLoop : number;
	
	/**
	 * @method get_delayLoop
	 * @private
	 * @return {number}
	 */
	get_delayLoop() : number {
		return this._delayLoop;
	}
	
	/**
	 * チェック間隔 [秒]
	 * 
	 * @property delayLoop
	 * @type number
	 * @readOnly
	 * @public
	 */
	get delayLoop() : number { return this.get_delayLoop(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.LbVirtualIp#_servers
	 * @type LbServer[]
	 * @protected
	 */
	_servers : LbServer[];
	
	/**
	 * @method get_servers
	 * @private
	 * @return {LbServer[]}
	 */
	get_servers() : LbServer[] {
		return this._servers;
	}
	
	/**
	 * 実サーバ
	 * 
	 * @property servers
	 * @type LbServer[]
	 * @readOnly
	 * @public
	 */
	get servers() : LbServer[] { return this.get_servers(); }
	
	
	/**
	 * @private
	 * @constructor
	 * @param {any} obj
	 */
	constructor(obj:any) {
		Util.validateArgCount(arguments.length, 1);
		var vip:any = Util.getByPathAny([obj], ["VirtualIPAddress", "virtualIpAddress", "virtual_ip_address", "vip"]);
		this._virtualIpAddress = (<string><any>(vip));
		var port:any = Util.getByPathAny([obj], ["Port", "port"]);
		this._port = port == null ? null : parseInt((<string><any>(port)), 10);
		if (this._port == 0) {
			this._port = null;
		};
		var delayLoop:any = Util.getByPathAny([obj], ["DelayLoop", "delayLoop", "delay_loop", "delay"]);
		this._delayLoop = delayLoop == null ? null : parseInt((<string><any>(delayLoop)), 10);
		if (this._delayLoop == 0) {
			this._delayLoop = null;
		};
		this._servers = [];
		var serversDyn:any = Util.getByPathAny([obj], ["Servers", "servers"]);
		if (serversDyn != null) {
			var servers:any[] = (<any[]><any>(serversDyn));
			for (var __it1:number=0; __it1<servers.length; __it1++) {
				var server = servers[__it1];
				this._servers.push(new LbServer(server));
			};
		};
	}
	
	/**
	 * @method addServer
	 * @chainable
	 * @public
	 * @param {any} settings
	 * @return {LbVirtualIp}
	 */
	addServer(settings:any) : LbVirtualIp {
		Util.validateArgCount(arguments.length, 1);
		this._servers.push(new LbServer(settings));
		return this;
	}
	
	/**
	 * @method toRawSettings
	 * @public
	 * @return {any}
	 */
	toRawSettings() : any {
		var servers:any[] = [];
		for (var __it1:number=0; __it1<this._servers.length; __it1++) {
			var server = this._servers[__it1];
			servers.push(server.toRawSettings());
		};
		return {
			VirtualIPAddress: this._virtualIpAddress,
			Port: this._port,
			DelayLoop: this._delayLoop,
			Servers: servers
		};
	}
	
}


/// <reference path="../../../node.d.ts" />

export = LbVirtualIp;

import Util = require('../../Util');
import LbServer = require('./LbServer');

'use strict';

/**
 * ロードバランサの仮想IPアドレス設定。
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
	 * @method set_virtualIpAddress
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	set_virtualIpAddress(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		this._virtualIpAddress = v;
		return this._virtualIpAddress;
	}
	
	/**
	 * VIPアドレス
	 * 
	 * @property virtualIpAddress
	 * @type string
	 * @public
	 */
	get virtualIpAddress() : string { return this.get_virtualIpAddress(); }
	set virtualIpAddress(v:string) { this.set_virtualIpAddress(v); }
	
	
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
	 * @method set_port
	 * @private
	 * @param {number} v
	 * @return {number}
	 */
	set_port(v:number) : number {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "number");
		this._port = v;
		return this._port;
	}
	
	/**
	 * ポート番号
	 * 
	 * @property port
	 * @type number
	 * @public
	 */
	get port() : number { return this.get_port(); }
	set port(v:number) { this.set_port(v); }
	
	
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
	 * @method set_delayLoop
	 * @private
	 * @param {number} v
	 * @return {number}
	 */
	set_delayLoop(v:number) : number {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "number");
		this._delayLoop = v;
		return this._delayLoop;
	}
	
	/**
	 * チェック間隔 [秒]
	 * 
	 * @property delayLoop
	 * @type number
	 * @public
	 */
	get delayLoop() : number { return this.get_delayLoop(); }
	set delayLoop(v:number) { this.set_delayLoop(v); }
	
	
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
	 * 実サーバ {{#crossLink "LbServer"}}{{/crossLink}} の配列
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
	 * @param {any} obj=null
	 */
	constructor(obj:any=null) {
		if (obj == null) {
			obj = {};
		};
		var vip:any = Util.getByPathAny([obj], ["VirtualIPAddress", "virtualIpAddress", "virtual_ip_address", "vip"]);
		this._virtualIpAddress = (<string><any>(vip));
		var port:any = Util.getByPathAny([obj], ["Port", "port"]);
		this._port = null;
		if (port != null) {
			this._port = parseInt(port, 10);
		};
		if (this._port == 0) {
			this._port = null;
		};
		var delayLoop:any = Util.getByPathAny([obj], ["DelayLoop", "delayLoop", "delay_loop", "delay"]);
		this._delayLoop = null;
		if (delayLoop != null) {
			this._delayLoop = parseInt(delayLoop, 10);
		};
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
	 * 監視対象サーバ設定を追加します。
	 * 
	 * @method addServer
	 * @public
	 * @param {any} settings=null 設定オブジェクト
	 * @return {LbServer}
	 */
	addServer(settings:any=null) : LbServer {
		var ret:LbServer = new LbServer(settings);
		this._servers.push(ret);
		return ret;
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
	
	/**
	 * 指定したIPアドレスにマッチする監視対象サーバ設定のうち、最初にマッチしたものを取得します。
	 * 
	 * @method getServerByAddress
	 * @public
	 * @param {string} address 検索するIPアドレス
	 * @return {LbServer} 監視対象サーバ設定（見つからなかった場合はnull）
	 */
	getServerByAddress(address:string) : LbServer {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(address, "string");
		for (var __it1:number=0; __it1<this._servers.length; __it1++) {
			var srv = this._servers[__it1];
			if (srv["ipAddress"] == address) {
				return srv;
			};
		};
		return null;
	}
	
	/**
	 * 指定したIPアドレスにマッチする監視対象サーバ設定をすべて削除します。
	 * 
	 * @method removeServerByAddress
	 * @chainable
	 * @public
	 * @param {string} address
	 * @return {LbVirtualIp}
	 */
	removeServerByAddress(address:string) : LbVirtualIp {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(address, "string");
		var servers:LbServer[] = [];
		for (var __it1:number=0; __it1<this._servers.length; __it1++) {
			var srv = this._servers[__it1];
			if (srv["ipAddress"] != address) {
				servers.push(srv);
			};
		};
		this._servers = servers;
		return this;
	}
	
	/**
	 * @private
	 * @method updateStatus
	 * @chainable
	 * @param {Array} srvs
	 * @return {LbVirtualIp}
	 */
	updateStatus(srvs:any[]) : LbVirtualIp {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(srvs, "Array");
		for (var __it1:number=0; __it1<srvs.length; __it1++) {
			var srvDyn = srvs[__it1];
			var ip:string = (<string><any>(srvDyn["IPAddress"]));
			var srv:LbServer = this.getServerByAddress(ip);
			if (srv == null) {
				continue;
			};
			srv.updateStatus(srvDyn);
		};
		return this;
	}
	
}


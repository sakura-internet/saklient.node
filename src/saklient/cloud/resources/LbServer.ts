/// <reference path="../../../node.d.ts" />

export = LbServer;

import Util = require('../../Util');

'use strict';

/**
 * ロードバランサの監視対象サーバ。
 * 
 * @module saklient.cloud.resources.LbServer
 * @class LbServer
 * @constructor
 */
class LbServer {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.LbServer#_ipAddress
	 * @type string
	 * @protected
	 */
	_ipAddress : string;
	
	/**
	 * @method get_ipAddress
	 * @private
	 * @return {string}
	 */
	get_ipAddress() : string {
		return this._ipAddress;
	}
	
	/**
	 * @method set_ipAddress
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	set_ipAddress(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		this._ipAddress = v;
		return this._ipAddress;
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
	 * @member saklient.cloud.resources.LbServer#_port
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
	 * @member saklient.cloud.resources.LbServer#_protocol
	 * @type string
	 * @protected
	 */
	_protocol : string;
	
	/**
	 * @method get_protocol
	 * @private
	 * @return {string}
	 */
	get_protocol() : string {
		return this._protocol;
	}
	
	/**
	 * @method set_protocol
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	set_protocol(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		this._protocol = v;
		return this._protocol;
	}
	
	/**
	 * 監視方法
	 * 
	 * @property protocol
	 * @type string
	 * @public
	 */
	get protocol() : string { return this.get_protocol(); }
	set protocol(v:string) { this.set_protocol(v); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.LbServer#_pathToCheck
	 * @type string
	 * @protected
	 */
	_pathToCheck : string;
	
	/**
	 * @method get_pathToCheck
	 * @private
	 * @return {string}
	 */
	get_pathToCheck() : string {
		return this._pathToCheck;
	}
	
	/**
	 * @method set_pathToCheck
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	set_pathToCheck(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		this._pathToCheck = v;
		return this._pathToCheck;
	}
	
	/**
	 * 監視対象パス
	 * 
	 * @property pathToCheck
	 * @type string
	 * @public
	 */
	get pathToCheck() : string { return this.get_pathToCheck(); }
	set pathToCheck(v:string) { this.set_pathToCheck(v); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.LbServer#_responseExpected
	 * @type number
	 * @protected
	 */
	_responseExpected : number;
	
	/**
	 * @method get_responseExpected
	 * @private
	 * @return {number}
	 */
	get_responseExpected() : number {
		return this._responseExpected;
	}
	
	/**
	 * @method set_responseExpected
	 * @private
	 * @param {number} v
	 * @return {number}
	 */
	set_responseExpected(v:number) : number {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "number");
		this._responseExpected = v;
		return this._responseExpected;
	}
	
	/**
	 * 監視時に期待されるレスポンスコード
	 * 
	 * @property responseExpected
	 * @type number
	 * @public
	 */
	get responseExpected() : number { return this.get_responseExpected(); }
	set responseExpected(v:number) { this.set_responseExpected(v); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.LbServer#_activeConnections
	 * @type number
	 * @protected
	 */
	_activeConnections : number;
	
	/**
	 * @method get_activeConnections
	 * @private
	 * @return {number}
	 */
	get_activeConnections() : number {
		return this._activeConnections;
	}
	
	/**
	 * 現在の接続数
	 * 
	 * @property activeConnections
	 * @type number
	 * @readOnly
	 * @public
	 */
	get activeConnections() : number { return this.get_activeConnections(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.LbServer#_status
	 * @type string
	 * @protected
	 */
	_status : string;
	
	/**
	 * @method get_status
	 * @private
	 * @return {string}
	 */
	get_status() : string {
		return this._status;
	}
	
	/**
	 * 現在の状態
	 * 
	 * @property status
	 * @type string
	 * @readOnly
	 * @public
	 */
	get status() : string { return this.get_status(); }
	
	
	/**
	 * @private
	 * @constructor
	 * @param {any} obj=null
	 */
	constructor(obj:any=null) {
		if (obj == null) {
			obj = {};
		};
		var health:any = Util.getByPathAny([obj], ["HealthCheck", "healthCheck", "health_check", "health"]);
		this._ipAddress = (<string><any>(Util.getByPathAny([obj], ["IPAddress", "ipAddress", "ip_address", "ip"])));
		this._protocol = (<string><any>(Util.getByPathAny([health, obj], ["Protocol", "protocol"])));
		this._pathToCheck = (<string><any>(Util.getByPathAny([health, obj], ["Path", "path", "pathToCheck", "path_to_check"])));
		var port:any = Util.getByPathAny([obj], ["Port", "port"]);
		this._port = null;
		if (port != null) {
			this._port = parseInt(port, 10);
		};
		if (this._port == 0) {
			this._port = null;
		};
		var responseExpected:any = Util.getByPathAny([health, obj], ["Status", "status", "responseExpected", "response_expected"]);
		this._responseExpected = null;
		if (responseExpected != null) {
			this._responseExpected = parseInt(responseExpected, 10);
		};
		if (this._responseExpected == 0) {
			this._responseExpected = null;
		};
	}
	
	/**
	 * @method toRawSettings
	 * @public
	 * @return {any}
	 */
	toRawSettings() : any {
		return {
			IPAddress: this._ipAddress,
			Port: this._port,
			HealthCheck: {
				Protocol: this._protocol,
				Path: this._pathToCheck,
				Status: this._responseExpected
			}
		};
	}
	
	/**
	 * @method updateStatus
	 * @chainable
	 * @public
	 * @param {any} obj
	 * @return {LbServer}
	 */
	updateStatus(obj:any) : LbServer {
		Util.validateArgCount(arguments.length, 1);
		var connStr:string = (<string><any>(obj["ActiveConn"]));
		this._activeConnections = 0;
		if (connStr != null) {
			this._activeConnections = parseInt(connStr, 10);
		};
		var status:string = (<string><any>(obj["Status"]));
		this._status = status == null ? null : status.toLowerCase();
		return this;
	}
	
}


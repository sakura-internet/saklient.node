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
	 * IPアドレス
	 * 
	 * @property ipAddress
	 * @type string
	 * @readOnly
	 * @public
	 */
	get ipAddress() : string { return this.get_ipAddress(); }
	
	
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
	 * 監視方法
	 * 
	 * @property protocol
	 * @type string
	 * @readOnly
	 * @public
	 */
	get protocol() : string { return this.get_protocol(); }
	
	
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
	 * パス
	 * 
	 * @property pathToCheck
	 * @type string
	 * @readOnly
	 * @public
	 */
	get pathToCheck() : string { return this.get_pathToCheck(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.resources.LbServer#_expectedStatus
	 * @type number
	 * @protected
	 */
	_expectedStatus : number;
	
	/**
	 * @method get_expectedStatus
	 * @private
	 * @return {number}
	 */
	get_expectedStatus() : number {
		return this._expectedStatus;
	}
	
	/**
	 * レスポンスコード
	 * 
	 * @property expectedStatus
	 * @type number
	 * @readOnly
	 * @public
	 */
	get expectedStatus() : number { return this.get_expectedStatus(); }
	
	
	/**
	 * @private
	 * @constructor
	 * @param {any} obj
	 */
	constructor(obj:any) {
		Util.validateArgCount(arguments.length, 1);
		var health:any = Util.getByPathAny([obj], ["HealthCheck", "healthCheck", "health_check", "health"]);
		this._ipAddress = (<string><any>(Util.getByPathAny([obj], ["IPAddress", "ipAddress", "ip_address", "ip"])));
		this._protocol = (<string><any>(Util.getByPathAny([health, obj], ["Protocol", "protocol"])));
		this._pathToCheck = (<string><any>(Util.getByPathAny([health, obj], ["Path", "path"])));
		var port:any = Util.getByPathAny([obj], ["Port", "port"]);
		this._port = port == null ? null : parseInt((<string><any>(port)), 10);
		if (this._port == 0) {
			this._port = null;
		};
		var status:any = Util.getByPathAny([health, obj], ["Status", "status"]);
		this._expectedStatus = status == null ? null : parseInt((<string><any>(status)), 10);
		if (this._expectedStatus == 0) {
			this._expectedStatus = null;
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
				Status: this._expectedStatus
			}
		};
	}
	
}


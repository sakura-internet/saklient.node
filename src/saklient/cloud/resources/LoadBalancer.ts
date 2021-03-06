/// <reference path="../../../node.d.ts" />

export = LoadBalancer;

import Util = require('../../Util');
import SaklientException = require('../../errors/SaklientException');
import Client = require('../Client');
import Appliance = require('./Appliance');
import LbVirtualIp = require('./LbVirtualIp');
import Swytch = require('./Swytch');
import Ipv4Net = require('./Ipv4Net');
import EApplianceClass = require('../enums/EApplianceClass');

'use strict';

/**
 * ロードバランサの実体1つに対応し、属性の取得や操作を行うためのクラス。
 * 
 * @module saklient.cloud.resources.LoadBalancer
 * @class LoadBalancer
 * @constructor
 * @extends Appliance
 */
class LoadBalancer extends Appliance {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.LoadBalancer#_virtualIps
	 * @type LbVirtualIp[]
	 * @protected
	 */
	_virtualIps : LbVirtualIp[];
	
	/**
	 * @method get_virtualIps
	 * @private
	 * @return {LbVirtualIp[]}
	 */
	get_virtualIps() : LbVirtualIp[] {
		return this._virtualIps;
	}
	
	/**
	 * 仮想IPアドレス {{#crossLink "LbVirtualIp"}}{{/crossLink}} の配列
	 * 
	 * @property virtualIps
	 * @type LbVirtualIp[]
	 * @readOnly
	 * @public
	 */
	get virtualIps() : LbVirtualIp[] { return this.get_virtualIps(); }
	
	
	/**
	 * @method get_defaultRoute
	 * @private
	 * @return {string}
	 */
	get_defaultRoute() : string {
		return (<string><any>(Util.getByPath(this.rawAnnotation, "Network.DefaultRoute")));
	}
	
	/**
	 * @method set_defaultRoute
	 * @private
	 * @param {string} v
	 * @return {string}
	 */
	set_defaultRoute(v:string) : string {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "string");
		Util.setByPath(this.rawAnnotation, "Network.DefaultRoute", v);
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
	 * @method get_maskLen
	 * @private
	 * @return {number}
	 */
	get_maskLen() : number {
		var maskLen:string = (<string><any>(Util.getByPath(this.rawAnnotation, "Network.NetworkMaskLen")));
		if (maskLen == null) {
			throw new SaklientException("invalid_data", "Data of the resource is invalid");
		};
		return parseInt(maskLen, 10);
	}
	
	/**
	 * @method set_maskLen
	 * @private
	 * @param {number} v
	 * @return {number}
	 */
	set_maskLen(v:number) : number {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "number");
		Util.setByPath(this.rawAnnotation, "Network.NetworkMaskLen", v);
		return v;
	}
	
	/**
	 * マスク長
	 * 
	 * @property maskLen
	 * @type number
	 * @public
	 */
	get maskLen() : number { return this.get_maskLen(); }
	set maskLen(v:number) { this.set_maskLen(v); }
	
	
	/**
	 * @method get_vrid
	 * @private
	 * @return {number}
	 */
	get_vrid() : number {
		var vrid:string = (<string><any>(Util.getByPath(this.rawAnnotation, "VRRP.VRID")));
		if (vrid == null) {
			throw new SaklientException("invalid_data", "Data of the resource is invalid");
		};
		return parseInt(vrid, 10);
	}
	
	/**
	 * @method set_vrid
	 * @private
	 * @param {number} v
	 * @return {number}
	 */
	set_vrid(v:number) : number {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(v, "number");
		Util.setByPath(this.rawAnnotation, "VRRP.VRID", v);
		return v;
	}
	
	/**
	 * VRID
	 * 
	 * @property vrid
	 * @type number
	 * @public
	 */
	get vrid() : number { return this.get_vrid(); }
	set vrid(v:number) { this.set_vrid(v); }
	
	
	/**
	 * @private
	 * @constructor
	 * @param {Client} client
	 * @param {any} obj
	 * @param {boolean} wrapped=false
	 */
	constructor(client:Client, obj:any, wrapped:boolean=false) {
		super(client, obj, wrapped);
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(client, "saklient.cloud.Client");
		Util.validateType(wrapped, "boolean");
		if (this.rawAnnotation == null) {
			this.rawAnnotation = {};
		};
	}
	
	/**
	 * @private
	 * @method _onAfterApiDeserialize
	 * @protected
	 * @param {any} r
	 * @param {any} root
	 * @return {void}
	 */
	_onAfterApiDeserialize(r:any, root:any) : void {
		Util.validateArgCount(arguments.length, 2);
		if (this.rawAnnotation == null) {
			this.rawAnnotation = {};
		};
		this._virtualIps = [];
		var settings:any = this.rawSettings;
		if (settings != null) {
			var lb:any = settings["LoadBalancer"];
			if (lb == null) {
				lb = [];
			};
			var vips:any[] = (<any[]><any>(lb));
			for (var __it1:number=0; __it1<vips.length; __it1++) {
				var vip = vips[__it1];
				this._virtualIps.push(new LbVirtualIp(vip));
			};
		};
	}
	
	/**
	 * @private
	 * @method _onBeforeApiSerialize
	 * @protected
	 * @param {boolean} withClean
	 * @return {void}
	 */
	_onBeforeApiSerialize(withClean:boolean) : void {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(withClean, "boolean");
		var lb:any[] = [];
		for (var __it1:number=0; __it1<this._virtualIps.length; __it1++) {
			var vip = this._virtualIps[__it1];
			lb.push(vip.toRawSettings());
		};
		if (this.rawSettings == null) {
			this.rawSettings = {};
		};
		this.rawSettings["LoadBalancer"] = lb;
		if (this.isNew) {
			this.clazz = EApplianceClass.loadbalancer;
		};
	}
	
	/**
	 * @private
	 * @method setInitialParams
	 * @chainable
	 * @param {Swytch} swytch
	 * @param {number} vrid
	 * @param {string[]} realIps
	 * @param {boolean} isHighSpec=false
	 * @return {LoadBalancer}
	 */
	setInitialParams(swytch:Swytch, vrid:number, realIps:string[], isHighSpec:boolean=false) : LoadBalancer {
		Util.validateArgCount(arguments.length, 3);
		Util.validateType(swytch, "saklient.cloud.resources.Swytch");
		Util.validateType(vrid, "number");
		Util.validateType(realIps, "Array");
		Util.validateType(isHighSpec, "boolean");
		var annot:any = this.rawAnnotation;
		this.vrid = vrid;
		Util.setByPath(annot, "Switch.ID", swytch._id());
		if (swytch.ipv4Nets != null && 0 < swytch.ipv4Nets.length) {
			var net:Ipv4Net = swytch.ipv4Nets[0];
			this.defaultRoute = (<string><any>(net["defaultRoute"]));
			this.maskLen = (<number><any>(net["maskLen"]));
		}
		else {
			this.defaultRoute = (<string><any>(swytch["userDefaultRoute"]));
			this.maskLen = (<number><any>(swytch["userMaskLen"]));
		};
		var servers:any[] = [];
		for (var __it1:number=0; __it1<realIps.length; __it1++) {
			var ip = realIps[__it1];
			servers.push({ IPAddress: ip });
		};
		Util.setByPath(annot, "Servers", servers);
		this.planId = isHighSpec ? 2 : 1;
		return this;
	}
	
	/**
	 * @method clearVirtualIps
	 * @chainable
	 * @public
	 * @return {LoadBalancer}
	 */
	clearVirtualIps() : LoadBalancer {
		while (0 < this._virtualIps.length) {
			this._virtualIps.pop();
		};
		return this;
	}
	
	/**
	 * 仮想IPアドレス設定を追加します。
	 * 
	 * @method addVirtualIp
	 * @public
	 * @param {any} settings=null 設定オブジェクト
	 * @return {LbVirtualIp}
	 */
	addVirtualIp(settings:any=null) : LbVirtualIp {
		var ret:LbVirtualIp = new LbVirtualIp(settings);
		this._virtualIps.push(ret);
		return ret;
	}
	
	/**
	 * 指定したIPアドレスにマッチする仮想IPアドレス設定を取得します。
	 * 
	 * @method getVirtualIpByAddress
	 * @public
	 * @param {string} address
	 * @return {LbVirtualIp}
	 */
	getVirtualIpByAddress(address:string) : LbVirtualIp {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(address, "string");
		for (var __it1:number=0; __it1<this._virtualIps.length; __it1++) {
			var vip = this._virtualIps[__it1];
			if (vip["virtualIpAddress"] == address) {
				return vip;
			};
		};
		return null;
	}
	
	/**
	 * 監視対象サーバのステータスを最新の状態に更新します。
	 * 
	 * @method reloadStatus
	 * @chainable
	 * @public
	 * @return {LoadBalancer}
	 */
	reloadStatus() : LoadBalancer {
		var result:any = this.requestRetry("GET", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/status");
		if (result != null && ("LoadBalancer" in result)) {
			var vips:any[] = (<any[]><any>(result["LoadBalancer"]));
			for (var __it1:number=0; __it1<vips.length; __it1++) {
				var vipDyn = vips[__it1];
				var vipStr:string = (<string><any>(vipDyn["VirtualIPAddress"]));
				var vip:LbVirtualIp = this.getVirtualIpByAddress(vipStr);
				if (vip == null) {
					continue;
				};
				vip.updateStatus((<any[]><any>(vipDyn["Servers"])));
			};
		};
		return this;
	}
	
}


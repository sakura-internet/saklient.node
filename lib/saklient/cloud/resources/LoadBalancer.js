var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var SaklientException = require('../../errors/SaklientException');

var Appliance = require('./Appliance');
var LbVirtualIp = require('./LbVirtualIp');

var EApplianceClass = require('../enums/EApplianceClass');

'use strict';

/**
* ロードバランサの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resources.LoadBalancer
* @class LoadBalancer
* @constructor
* @extends Appliance
*/
var LoadBalancer = (function (_super) {
    __extends(LoadBalancer, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function LoadBalancer(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client, obj, wrapped);
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(client, "saklient.cloud.Client");
        Util.validateType(wrapped, "boolean");
        if (this.rawAnnotation == null) {
            this.rawAnnotation = {};
        }
        ;
    }
    /**
    * @method get_virtualIps
    * @private
    * @return {LbVirtualIp[]}
    */
    LoadBalancer.prototype.get_virtualIps = function () {
        return this._virtualIps;
    };

    Object.defineProperty(LoadBalancer.prototype, "virtualIps", {
        /**
        * 仮想IPアドレス {{#crossLink "LbVirtualIp"}}{{/crossLink}} の配列
        *
        * @property virtualIps
        * @type LbVirtualIp[]
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_virtualIps();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_defaultRoute
    * @private
    * @return {string}
    */
    LoadBalancer.prototype.get_defaultRoute = function () {
        return (Util.getByPath(this.rawAnnotation, "Network.DefaultRoute"));
    };

    /**
    * @method set_defaultRoute
    * @private
    * @param {string} v
    * @return {string}
    */
    LoadBalancer.prototype.set_defaultRoute = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        Util.setByPath(this.rawAnnotation, "Network.DefaultRoute", v);
        return v;
    };

    Object.defineProperty(LoadBalancer.prototype, "defaultRoute", {
        /**
        * デフォルトルート
        *
        * @property defaultRoute
        * @type string
        * @public
        */
        get: function () {
            return this.get_defaultRoute();
        },
        set: function (v) {
            this.set_defaultRoute(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_maskLen
    * @private
    * @return {number}
    */
    LoadBalancer.prototype.get_maskLen = function () {
        var maskLen = (Util.getByPath(this.rawAnnotation, "Network.NetworkMaskLen"));
        if (maskLen == null) {
            throw new SaklientException("invalid_data", "Data of the resource is invalid");
        }
        ;
        return parseInt(maskLen, 10);
    };

    /**
    * @method set_maskLen
    * @private
    * @param {number} v
    * @return {number}
    */
    LoadBalancer.prototype.set_maskLen = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        Util.setByPath(this.rawAnnotation, "Network.NetworkMaskLen", v);
        return v;
    };

    Object.defineProperty(LoadBalancer.prototype, "maskLen", {
        /**
        * マスク長
        *
        * @property maskLen
        * @type number
        * @public
        */
        get: function () {
            return this.get_maskLen();
        },
        set: function (v) {
            this.set_maskLen(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_vrid
    * @private
    * @return {number}
    */
    LoadBalancer.prototype.get_vrid = function () {
        var vrid = (Util.getByPath(this.rawAnnotation, "VRRP.VRID"));
        if (vrid == null) {
            throw new SaklientException("invalid_data", "Data of the resource is invalid");
        }
        ;
        return parseInt(vrid, 10);
    };

    /**
    * @method set_vrid
    * @private
    * @param {number} v
    * @return {number}
    */
    LoadBalancer.prototype.set_vrid = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        Util.setByPath(this.rawAnnotation, "VRRP.VRID", v);
        return v;
    };

    Object.defineProperty(LoadBalancer.prototype, "vrid", {
        /**
        * VRID
        *
        * @property vrid
        * @type number
        * @public
        */
        get: function () {
            return this.get_vrid();
        },
        set: function (v) {
            this.set_vrid(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @private
    * @method _onAfterApiDeserialize
    * @protected
    * @param {any} r
    * @param {any} root
    * @return {void}
    */
    LoadBalancer.prototype._onAfterApiDeserialize = function (r, root) {
        Util.validateArgCount(arguments.length, 2);
        if (this.rawAnnotation == null) {
            this.rawAnnotation = {};
        }
        ;
        this._virtualIps = [];
        var settings = this.rawSettings;
        if (settings != null) {
            var lb = settings["LoadBalancer"];
            if (lb == null) {
                lb = [];
            }
            ;
            var vips = (lb);
            for (var __it1 = 0; __it1 < vips.length; __it1++) {
                var vip = vips[__it1];
                this._virtualIps.push(new LbVirtualIp(vip));
            }
            ;
        }
        ;
    };

    /**
    * @private
    * @method _onBeforeApiSerialize
    * @protected
    * @param {boolean} withClean
    * @return {void}
    */
    LoadBalancer.prototype._onBeforeApiSerialize = function (withClean) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(withClean, "boolean");
        var lb = [];
        for (var __it1 = 0; __it1 < this._virtualIps.length; __it1++) {
            var vip = this._virtualIps[__it1];
            lb.push(vip.toRawSettings());
        }
        ;
        if (this.rawSettings == null) {
            this.rawSettings = {};
        }
        ;
        this.rawSettings["LoadBalancer"] = lb;
        if (this.isNew) {
            this.clazz = EApplianceClass.loadbalancer;
        }
        ;
    };

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
    LoadBalancer.prototype.setInitialParams = function (swytch, vrid, realIps, isHighSpec) {
        if (typeof isHighSpec === "undefined") { isHighSpec = false; }
        Util.validateArgCount(arguments.length, 3);
        Util.validateType(swytch, "saklient.cloud.resources.Swytch");
        Util.validateType(vrid, "number");
        Util.validateType(realIps, "Array");
        Util.validateType(isHighSpec, "boolean");
        var annot = this.rawAnnotation;
        this.vrid = vrid;
        Util.setByPath(annot, "Switch.ID", swytch._id());
        if (swytch.ipv4Nets != null && 0 < swytch.ipv4Nets.length) {
            var net = swytch.ipv4Nets[0];
            this.defaultRoute = (net["defaultRoute"]);
            this.maskLen = (net["maskLen"]);
        } else {
            this.defaultRoute = (swytch["userDefaultRoute"]);
            this.maskLen = (swytch["userMaskLen"]);
        }
        ;
        var servers = [];
        for (var __it1 = 0; __it1 < realIps.length; __it1++) {
            var ip = realIps[__it1];
            servers.push({ IPAddress: ip });
        }
        ;
        Util.setByPath(annot, "Servers", servers);
        this.planId = isHighSpec ? 2 : 1;
        return this;
    };

    /**
    * @method clearVirtualIps
    * @chainable
    * @public
    * @return {LoadBalancer}
    */
    LoadBalancer.prototype.clearVirtualIps = function () {
        while (0 < this._virtualIps.length) {
            this._virtualIps.pop();
        }
        ;
        return this;
    };

    /**
    * 仮想IPアドレス設定を追加します。
    *
    * @method addVirtualIp
    * @public
    * @param {any} settings=null 設定オブジェクト
    * @return {LbVirtualIp}
    */
    LoadBalancer.prototype.addVirtualIp = function (settings) {
        if (typeof settings === "undefined") { settings = null; }
        var ret = new LbVirtualIp(settings);
        this._virtualIps.push(ret);
        return ret;
    };

    /**
    * 指定したIPアドレスにマッチする仮想IPアドレス設定を取得します。
    *
    * @method getVirtualIpByAddress
    * @public
    * @param {string} address
    * @return {LbVirtualIp}
    */
    LoadBalancer.prototype.getVirtualIpByAddress = function (address) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(address, "string");
        for (var __it1 = 0; __it1 < this._virtualIps.length; __it1++) {
            var vip = this._virtualIps[__it1];
            if (vip["virtualIpAddress"] == address) {
                return vip;
            }
            ;
        }
        ;
        return null;
    };

    /**
    * 監視対象サーバのステータスを最新の状態に更新します。
    *
    * @method reloadStatus
    * @chainable
    * @public
    * @return {LoadBalancer}
    */
    LoadBalancer.prototype.reloadStatus = function () {
        var result = this.requestRetry("GET", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/status");
        if (result != null && ("LoadBalancer" in result)) {
            var vips = (result["LoadBalancer"]);
            for (var __it1 = 0; __it1 < vips.length; __it1++) {
                var vipDyn = vips[__it1];
                var vipStr = (vipDyn["VirtualIPAddress"]);
                var vip = this.getVirtualIpByAddress(vipStr);
                if (vip == null) {
                    continue;
                }
                ;
                vip.updateStatus((vipDyn["Servers"]));
            }
            ;
        }
        ;
        return this;
    };
    return LoadBalancer;
})(Appliance);
module.exports = LoadBalancer;

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var SaklientException = require('../../errors/SaklientException');

var Resource = require('./Resource');

var Router = require('./Router');
var Ipv4Net = require('./Ipv4Net');
var Ipv6Net = require('./Ipv6Net');

'use strict';

/**
* スイッチの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resources.Swytch
* @class Swytch
* @constructor
* @extends Resource
*/
var Swytch = (function (_super) {
    __extends(Swytch, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function Swytch(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resources.Swytch#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resources.Swytch#n_name
        * @default false
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saklient.cloud.resources.Swytch#n_description
        * @default false
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saklient.cloud.resources.Swytch#n_userDefaultRoute
        * @default false
        * @type boolean
        * @private
        */
        this.n_userDefaultRoute = false;
        /**
        * @member saklient.cloud.resources.Swytch#n_userMaskLen
        * @default false
        * @type boolean
        * @private
        */
        this.n_userMaskLen = false;
        /**
        * @member saklient.cloud.resources.Swytch#n_router
        * @default false
        * @type boolean
        * @private
        */
        this.n_router = false;
        /**
        * @member saklient.cloud.resources.Swytch#n_ipv4Nets
        * @default false
        * @type boolean
        * @private
        */
        this.n_ipv4Nets = false;
        /**
        * @member saklient.cloud.resources.Swytch#n_ipv6Nets
        * @default false
        * @type boolean
        * @private
        */
        this.n_ipv6Nets = false;
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(client, "saklient.cloud.Client");
        Util.validateType(wrapped, "boolean");
        this.apiDeserialize(obj, wrapped);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Swytch.prototype._apiPath = function () {
        return "/switch";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Swytch.prototype._rootKey = function () {
        return "Switch";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Swytch.prototype._rootKeyM = function () {
        return "Switches";
    };

    /**
    * @private
    * @method _className
    * @return {string}
    */
    Swytch.prototype._className = function () {
        return "Swytch";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    Swytch.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {Swytch} this
    */
    Swytch.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {Swytch} this
    */
    Swytch.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * このルータ＋スイッチでIPv6アドレスを有効にします。
    *
    * @method addIpv6Net
    * @public
    * @return {Ipv6Net} 有効化されたIPv6ネットワーク
    */
    Swytch.prototype.addIpv6Net = function () {
        var ret = this.get_router().addIpv6Net();
        this.reload();
        return ret;
    };

    /**
    * このルータ＋スイッチでIPv6アドレスを無効にします。
    *
    * @method removeIpv6Net
    * @chainable
    * @public
    * @return {Swytch} this
    */
    Swytch.prototype.removeIpv6Net = function () {
        var nets = this.get_ipv6Nets();
        this.get_router().removeIpv6Net(nets[0]);
        this.reload();
        return this;
    };

    /**
    * このルータ＋スイッチにスタティックルートを追加します。
    *
    * @method addStaticRoute
    * @public
    * @param {number} maskLen
    * @param {string} nextHop
    * @return {Ipv4Net} 追加されたIPv4ネットワーク
    */
    Swytch.prototype.addStaticRoute = function (maskLen, nextHop) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(maskLen, "number");
        Util.validateType(nextHop, "string");
        var ret = this.get_router().addStaticRoute(maskLen, nextHop);
        this.reload();
        return ret;
    };

    /**
    * このルータ＋スイッチからスタティックルートを削除します。
    *
    * @method removeStaticRoute
    * @chainable
    * @public
    * @param {Ipv4Net} ipv4Net
    * @return {Swytch} this
    */
    Swytch.prototype.removeStaticRoute = function (ipv4Net) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(ipv4Net, "saklient.cloud.resources.Ipv4Net");
        this.get_router().removeStaticRoute(ipv4Net);
        this.reload();
        return this;
    };

    /**
    * このルータ＋スイッチの帯域プランを変更します。
    *
    * @method changePlan
    * @chainable
    * @public
    * @param {number} bandWidthMbps
    * @return {Swytch} this
    */
    Swytch.prototype.changePlan = function (bandWidthMbps) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(bandWidthMbps, "number");
        this.get_router().changePlan(bandWidthMbps);
        this.reload();
        return this;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    Swytch.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(Swytch.prototype, "id", {
        /**
        * ID
        *
        * @property id
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_id();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_name
    * @private
    * @return {string}
    */
    Swytch.prototype.get_name = function () {
        return this.m_name;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_name
    * @private
    * @param {string} v
    * @return {string}
    */
    Swytch.prototype.set_name = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_name = v;
        this.n_name = true;
        return this.m_name;
    };

    Object.defineProperty(Swytch.prototype, "name", {
        /**
        * 名前
        *
        * @property name
        * @type string
        * @public
        */
        get: function () {
            return this.get_name();
        },
        set: function (v) {
            this.set_name(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_description
    * @private
    * @return {string}
    */
    Swytch.prototype.get_description = function () {
        return this.m_description;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_description
    * @private
    * @param {string} v
    * @return {string}
    */
    Swytch.prototype.set_description = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_description = v;
        this.n_description = true;
        return this.m_description;
    };

    Object.defineProperty(Swytch.prototype, "description", {
        /**
        * 説明
        *
        * @property description
        * @type string
        * @public
        */
        get: function () {
            return this.get_description();
        },
        set: function (v) {
            this.set_description(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_userDefaultRoute
    * @private
    * @return {string}
    */
    Swytch.prototype.get_userDefaultRoute = function () {
        return this.m_userDefaultRoute;
    };

    Object.defineProperty(Swytch.prototype, "userDefaultRoute", {
        /**
        * ユーザ設定IPv4ネットワークのゲートウェイ
        *
        * @property userDefaultRoute
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_userDefaultRoute();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_userMaskLen
    * @private
    * @return {number}
    */
    Swytch.prototype.get_userMaskLen = function () {
        return this.m_userMaskLen;
    };

    Object.defineProperty(Swytch.prototype, "userMaskLen", {
        /**
        * ユーザ設定IPv4ネットワークのマスク長
        *
        * @property userMaskLen
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_userMaskLen();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_router
    * @private
    * @return {Router}
    */
    Swytch.prototype.get_router = function () {
        return this.m_router;
    };

    Object.defineProperty(Swytch.prototype, "router", {
        /**
        * 接続されているルータ
        *
        * @property router
        * @type Router
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_router();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_ipv4Nets
    * @private
    * @return {Ipv4Net[]}
    */
    Swytch.prototype.get_ipv4Nets = function () {
        return this.m_ipv4Nets;
    };

    Object.defineProperty(Swytch.prototype, "ipv4Nets", {
        /**
        * IPv4ネットワーク（ルータによる自動割当）
        *
        * @property ipv4Nets
        * @type Ipv4Net[]
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ipv4Nets();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_ipv6Nets
    * @private
    * @return {Ipv6Net[]}
    */
    Swytch.prototype.get_ipv6Nets = function () {
        return this.m_ipv6Nets;
    };

    Object.defineProperty(Swytch.prototype, "ipv6Nets", {
        /**
        * IPv6ネットワーク（ルータによる自動割当）
        *
        * @property ipv6Nets
        * @type Ipv6Net[]
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ipv6Nets();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiDeserializeImpl
    * @protected
    * @param {any} r
    */
    Swytch.prototype.apiDeserializeImpl = function (r) {
        Util.validateArgCount(arguments.length, 1);
        this.isNew = r == null;
        if (this.isNew) {
            r = {};
        }
        ;
        this.isIncomplete = false;
        if (Util.existsPath(r, "ID")) {
            this.m_id = Util.getByPath(r, "ID") == null ? null : "" + Util.getByPath(r, "ID");
        } else {
            this.m_id = null;
            this.isIncomplete = true;
        }
        ;
        this.n_id = false;
        if (Util.existsPath(r, "Name")) {
            this.m_name = Util.getByPath(r, "Name") == null ? null : "" + Util.getByPath(r, "Name");
        } else {
            this.m_name = null;
            this.isIncomplete = true;
        }
        ;
        this.n_name = false;
        if (Util.existsPath(r, "Description")) {
            this.m_description = Util.getByPath(r, "Description") == null ? null : "" + Util.getByPath(r, "Description");
        } else {
            this.m_description = null;
            this.isIncomplete = true;
        }
        ;
        this.n_description = false;
        if (Util.existsPath(r, "UserSubnet.DefaultRoute")) {
            this.m_userDefaultRoute = Util.getByPath(r, "UserSubnet.DefaultRoute") == null ? null : "" + Util.getByPath(r, "UserSubnet.DefaultRoute");
        } else {
            this.m_userDefaultRoute = null;
            this.isIncomplete = true;
        }
        ;
        this.n_userDefaultRoute = false;
        if (Util.existsPath(r, "UserSubnet.NetworkMaskLen")) {
            this.m_userMaskLen = Util.getByPath(r, "UserSubnet.NetworkMaskLen") == null ? null : parseInt("" + Util.getByPath(r, "UserSubnet.NetworkMaskLen"), 10);
        } else {
            this.m_userMaskLen = null;
            this.isIncomplete = true;
        }
        ;
        this.n_userMaskLen = false;
        if (Util.existsPath(r, "Internet")) {
            this.m_router = Util.getByPath(r, "Internet") == null ? null : new Router(this._client, Util.getByPath(r, "Internet"));
        } else {
            this.m_router = null;
            this.isIncomplete = true;
        }
        ;
        this.n_router = false;
        if (Util.existsPath(r, "Subnets")) {
            if (Util.getByPath(r, "Subnets") == null) {
                this.m_ipv4Nets = [];
            } else {
                this.m_ipv4Nets = [];
                for (var __it1 = 0; __it1 < (Util.getByPath(r, "Subnets")).length; __it1++) {
                    var t = (Util.getByPath(r, "Subnets"))[__it1];
                    var v1 = null;
                    v1 = t == null ? null : new Ipv4Net(this._client, t);
                    this.m_ipv4Nets.push(v1);
                }
                ;
            }
            ;
        } else {
            this.m_ipv4Nets = null;
            this.isIncomplete = true;
        }
        ;
        this.n_ipv4Nets = false;
        if (Util.existsPath(r, "IPv6Nets")) {
            if (Util.getByPath(r, "IPv6Nets") == null) {
                this.m_ipv6Nets = [];
            } else {
                this.m_ipv6Nets = [];
                for (var __it2 = 0; __it2 < (Util.getByPath(r, "IPv6Nets")).length; __it2++) {
                    var t = (Util.getByPath(r, "IPv6Nets"))[__it2];
                    var v2 = null;
                    v2 = t == null ? null : new Ipv6Net(this._client, t);
                    this.m_ipv6Nets.push(v2);
                }
                ;
            }
            ;
        } else {
            this.m_ipv6Nets = null;
            this.isIncomplete = true;
        }
        ;
        this.n_ipv6Nets = false;
    };

    /**
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Swytch.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        var missing = [];
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_name) {
            Util.setByPath(ret, "Name", this.m_name);
        } else {
            if (this.isNew) {
                missing.push("name");
            }
            ;
        }
        ;
        if (withClean || this.n_description) {
            Util.setByPath(ret, "Description", this.m_description);
        }
        ;
        if (withClean || this.n_userDefaultRoute) {
            Util.setByPath(ret, "UserSubnet.DefaultRoute", this.m_userDefaultRoute);
        }
        ;
        if (withClean || this.n_userMaskLen) {
            Util.setByPath(ret, "UserSubnet.NetworkMaskLen", this.m_userMaskLen);
        }
        ;
        if (withClean || this.n_router) {
            Util.setByPath(ret, "Internet", withClean ? (this.m_router == null ? null : this.m_router.apiSerialize(withClean)) : (this.m_router == null ? { ID: "0" } : this.m_router.apiSerializeID()));
        }
        ;
        if (withClean || this.n_ipv4Nets) {
            Util.setByPath(ret, "Subnets", []);
            for (var __it1 = 0; __it1 < this.m_ipv4Nets.length; __it1++) {
                var r1 = this.m_ipv4Nets[__it1];
                var v = null;
                v = withClean ? (r1 == null ? null : r1.apiSerialize(withClean)) : (r1 == null ? { ID: "0" } : r1.apiSerializeID());
                ret["Subnets"].push(v);
            }
            ;
        }
        ;
        if (withClean || this.n_ipv6Nets) {
            Util.setByPath(ret, "IPv6Nets", []);
            for (var __it2 = 0; __it2 < this.m_ipv6Nets.length; __it2++) {
                var r2 = this.m_ipv6Nets[__it2];
                var v = null;
                v = withClean ? (r2 == null ? null : r2.apiSerialize(withClean)) : (r2 == null ? { ID: "0" } : r2.apiSerializeID());
                ret["IPv6Nets"].push(v);
            }
            ;
        }
        ;
        if (missing.length > 0) {
            throw new SaklientException("required_field", "Required fields must be set before the Swytch creation: " + missing.join(", "));
        }
        ;
        return ret;
    };
    return Swytch;
})(Resource);
module.exports = Swytch;
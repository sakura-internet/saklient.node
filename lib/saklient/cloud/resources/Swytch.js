var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var SaklientException = require('../../errors/SaklientException');

var Resource = require('./Resource');
var Icon = require('./Icon');
var Router = require('./Router');
var Ipv4Net = require('./Ipv4Net');
var Ipv6Net = require('./Ipv6Net');
var Bridge = require('./Bridge');

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
        * @member saklient.cloud.resources.Swytch#n_tags
        * @default false
        * @type boolean
        * @private
        */
        this.n_tags = false;
        /**
        * @member saklient.cloud.resources.Swytch#n_icon
        * @default false
        * @type boolean
        * @private
        */
        this.n_icon = false;
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
        * @member saklient.cloud.resources.Swytch#n_bridge
        * @default false
        * @type boolean
        * @private
        */
        this.n_bridge = false;
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
    * @param {number} bandWidthMbps 帯域幅（api.product.router.find() から取得できる {{#crossLink "RouterPlan"}}{{/crossLink}} の bandWidthMbps を指定）。
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
    * このルータ＋スイッチをブリッジに接続します。
    *
    * @method connectToBridge
    * @chainable
    * @public
    * @param swytch 接続先のブリッジ。
    * @param {Bridge} bridge
    * @return {Swytch} this
    */
    Swytch.prototype.connectToBridge = function (bridge) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(bridge, "saklient.cloud.resources.Bridge");
        var result = this._client.request("PUT", this._apiPath() + "/" + this._id() + "/to/bridge/" + bridge._id());
        this.reload();
        return this;
    };

    /**
    * このルータ＋スイッチをブリッジから切断します。
    *
    * @method disconnectFromBridge
    * @chainable
    * @public
    * @return {Swytch} this
    */
    Swytch.prototype.disconnectFromBridge = function () {
        var result = this._client.request("DELETE", this._apiPath() + "/" + this._id() + "/to/bridge");
        this.reload();
        return this;
    };

    /**
    * @private
    * @method _usedIpv4AddressHash
    * @protected
    * @return {any}
    */
    Swytch.prototype._usedIpv4AddressHash = function () {
        var filter = {};
        filter["Switch" + ".ID"] = this._id();
        var query = {};
        Util.setByPath(query, "Count", 0);
        Util.setByPath(query, "Filter", filter);
        Util.setByPath(query, "Include", ["IPAddress", "UserIPAddress"]);
        var result = this._client.request("GET", "/interface", query);
        if (result == null) {
            return null;
        }
        ;
        result = result["Interfaces"];
        if (result == null) {
            return null;
        }
        ;
        var ifaces = (result);
        if (ifaces == null) {
            return null;
        }
        ;
        var found = {};
        for (var __it1 = 0; __it1 < ifaces.length; __it1++) {
            var iface = ifaces[__it1];
            var ip = (iface["IPAddress"]);
            var userIp = (iface["UserIPAddress"]);
            if (ip == null) {
                ip = userIp;
            }
            ;
            if (ip != null) {
                found[ip] = true;
            }
            ;
        }
        ;
        return found;
    };

    /**
    * このルータ＋スイッチに接続中のインタフェースに割り当てられているIPアドレスを収集します。
    *
    * @method collectUsedIpv4Addresses
    * @public
    * @return {string[]}
    */
    Swytch.prototype.collectUsedIpv4Addresses = function () {
        var found = this._usedIpv4AddressHash();
        return Util.sortArray(Object.keys(found));
    };

    /**
    * このルータ＋スイッチで利用できる未使用のIPアドレスを収集します。
    *
    * @method collectUnusedIpv4Addresses
    * @public
    * @return {string[]}
    */
    Swytch.prototype.collectUnusedIpv4Addresses = function () {
        var nets = this.get_ipv4Nets();
        if (nets.length < 1) {
            return null;
        }
        ;
        var used = this._usedIpv4AddressHash();
        var ret = [];
        for (var __it1 = 0; __it1 < nets[0].get_range().get_asArray().length; __it1++) {
            var ip = nets[0].get_range().get_asArray()[__it1];
            if (!(ip in used)) {
                ret.push(ip);
            }
            ;
        }
        ;
        return Util.sortArray(ret);
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
    * @method get_tags
    * @private
    * @return {string[]}
    */
    Swytch.prototype.get_tags = function () {
        this.n_tags = true;
        return this.m_tags;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_tags
    * @private
    * @param {string[]} v
    * @return {string[]}
    */
    Swytch.prototype.set_tags = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "Array");
        this.m_tags = v;
        this.n_tags = true;
        return this.m_tags;
    };

    Object.defineProperty(Swytch.prototype, "tags", {
        /**
        * タグ文字列の配列
        *
        * @property tags
        * @type string[]
        * @public
        */
        get: function () {
            return this.get_tags();
        },
        set: function (v) {
            this.set_tags(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_icon
    * @private
    * @return {Icon}
    */
    Swytch.prototype.get_icon = function () {
        return this.m_icon;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_icon
    * @private
    * @param {Icon} v
    * @return {Icon}
    */
    Swytch.prototype.set_icon = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "saklient.cloud.resources.Icon");
        this.m_icon = v;
        this.n_icon = true;
        return this.m_icon;
    };

    Object.defineProperty(Swytch.prototype, "icon", {
        /**
        * アイコン
        *
        * @property icon
        * @type Icon
        * @public
        */
        get: function () {
            return this.get_icon();
        },
        set: function (v) {
            this.set_icon(v);
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
    * @method get_bridge
    * @private
    * @return {Bridge}
    */
    Swytch.prototype.get_bridge = function () {
        return this.m_bridge;
    };

    Object.defineProperty(Swytch.prototype, "bridge", {
        /**
        * 接続されているブリッジ
        *
        * @property bridge
        * @type Bridge
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_bridge();
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
        * IPv4ネットワーク（ルータによる自動割当） {{#crossLink "Ipv4Net"}}{{/crossLink}} の配列
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
        * IPv6ネットワーク（ルータによる自動割当） {{#crossLink "Ipv6Net"}}{{/crossLink}} の配列
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
        if (Util.existsPath(r, "Tags")) {
            if (Util.getByPath(r, "Tags") == null) {
                this.m_tags = [];
            } else {
                this.m_tags = [];
                for (var __it1 = 0; __it1 < (Util.getByPath(r, "Tags")).length; __it1++) {
                    var t = (Util.getByPath(r, "Tags"))[__it1];
                    var v1 = null;
                    v1 = t == null ? null : "" + t;
                    this.m_tags.push(v1);
                }
                ;
            }
            ;
        } else {
            this.m_tags = null;
            this.isIncomplete = true;
        }
        ;
        this.n_tags = false;
        if (Util.existsPath(r, "Icon")) {
            this.m_icon = Util.getByPath(r, "Icon") == null ? null : new Icon(this._client, Util.getByPath(r, "Icon"));
        } else {
            this.m_icon = null;
            this.isIncomplete = true;
        }
        ;
        this.n_icon = false;
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
        if (Util.existsPath(r, "Bridge")) {
            this.m_bridge = Util.getByPath(r, "Bridge") == null ? null : new Bridge(this._client, Util.getByPath(r, "Bridge"));
        } else {
            this.m_bridge = null;
            this.isIncomplete = true;
        }
        ;
        this.n_bridge = false;
        if (Util.existsPath(r, "Subnets")) {
            if (Util.getByPath(r, "Subnets") == null) {
                this.m_ipv4Nets = [];
            } else {
                this.m_ipv4Nets = [];
                for (var __it2 = 0; __it2 < (Util.getByPath(r, "Subnets")).length; __it2++) {
                    var t = (Util.getByPath(r, "Subnets"))[__it2];
                    var v2 = null;
                    v2 = t == null ? null : new Ipv4Net(this._client, t);
                    this.m_ipv4Nets.push(v2);
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
                for (var __it3 = 0; __it3 < (Util.getByPath(r, "IPv6Nets")).length; __it3++) {
                    var t = (Util.getByPath(r, "IPv6Nets"))[__it3];
                    var v3 = null;
                    v3 = t == null ? null : new Ipv6Net(this._client, t);
                    this.m_ipv6Nets.push(v3);
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
        if (withClean || this.n_tags) {
            Util.setByPath(ret, "Tags", []);
            for (var __it1 = 0; __it1 < this.m_tags.length; __it1++) {
                var r1 = this.m_tags[__it1];
                var v = null;
                v = r1;
                ret["Tags"].push(v);
            }
            ;
        }
        ;
        if (withClean || this.n_icon) {
            Util.setByPath(ret, "Icon", withClean ? (this.m_icon == null ? null : this.m_icon.apiSerialize(withClean)) : (this.m_icon == null ? { ID: "0" } : this.m_icon.apiSerializeID()));
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
        if (withClean || this.n_bridge) {
            Util.setByPath(ret, "Bridge", withClean ? (this.m_bridge == null ? null : this.m_bridge.apiSerialize(withClean)) : (this.m_bridge == null ? { ID: "0" } : this.m_bridge.apiSerializeID()));
        }
        ;
        if (withClean || this.n_ipv4Nets) {
            Util.setByPath(ret, "Subnets", []);
            for (var __it2 = 0; __it2 < this.m_ipv4Nets.length; __it2++) {
                var r2 = this.m_ipv4Nets[__it2];
                var v = null;
                v = withClean ? (r2 == null ? null : r2.apiSerialize(withClean)) : (r2 == null ? { ID: "0" } : r2.apiSerializeID());
                ret["Subnets"].push(v);
            }
            ;
        }
        ;
        if (withClean || this.n_ipv6Nets) {
            Util.setByPath(ret, "IPv6Nets", []);
            for (var __it3 = 0; __it3 < this.m_ipv6Nets.length; __it3++) {
                var r3 = this.m_ipv6Nets[__it3];
                var v = null;
                v = withClean ? (r3 == null ? null : r3.apiSerialize(withClean)) : (r3 == null ? { ID: "0" } : r3.apiSerializeID());
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

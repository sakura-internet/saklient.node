var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Resource = require('./Resource');

var Ipv4Net = require('./Ipv4Net');
var Ipv6Net = require('./Ipv6Net');

/**
* ルータのリソース情報へのアクセス機能や操作機能を備えたクラス。
*
* @class Router
* @constructor
* @extends Resource
*/
var Router = (function (_super) {
    __extends(Router, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function Router(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.Router#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.Router#n_name
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saclient.cloud.resource.Router#n_description
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saclient.cloud.resource.Router#n_networkMaskLen
        * @type boolean
        * @private
        */
        this.n_networkMaskLen = false;
        /**
        * @member saclient.cloud.resource.Router#n_bandWidthMbps
        * @type boolean
        * @private
        */
        this.n_bandWidthMbps = false;
        /**
        * @member saclient.cloud.resource.Router#n_swytchId
        * @type boolean
        * @private
        */
        this.n_swytchId = false;
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(client, "saclient.cloud.Client");
        this.apiDeserialize(r);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Router.prototype._apiPath = function () {
        return "/internet";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Router.prototype._rootKey = function () {
        return "Internet";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Router.prototype._rootKeyM = function () {
        return "Internet";
    };

    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    Router.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {Router} this
    */
    Router.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {Router} this
    */
    Router.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * 作成中のルータが利用可能になるまで待機します。
    *
    * @method afterCreate
    * @public
    * @param {number} timeoutSec
    * @param {(Router, boolean) => void} callback
    * @return {void}
    */
    Router.prototype.afterCreate = function (timeoutSec, callback) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(timeoutSec, "number");
        Util.validateType(callback, "function");
        var ret = this.sleepWhileCreating(timeoutSec);
        callback(this, ret);
    };

    /**
    * 作成中のルータが利用可能になるまで待機します。
    *
    * @method sleepWhileCreating
    * @public
    * @param {number} timeoutSec=120
    * @return {boolean}
    */
    Router.prototype.sleepWhileCreating = function (timeoutSec) {
        if (typeof timeoutSec === "undefined") { timeoutSec = 120; }
        Util.validateType(timeoutSec, "number");
        var step = 3;
        while (0 < timeoutSec) {
            if (this.exists()) {
                this.reload();
                return true;
            }
            ;
            timeoutSec -= step;
            if (0 < timeoutSec) {
                Util.sleep(step);
            }
            ;
        }
        ;
        return false;
    };

    /**
    * このルータが接続されているスイッチを取得します。
    *
    * @method getSwytch
    * @public
    * @return {Swytch}
    */
    Router.prototype.getSwytch = function () {
        var model = Util.createClassInstance("saclient.cloud.model.Model_Swytch", [this._client]);
        var id = this.get_swytchId();
        return model.getById(id);
    };

    /**
    * このルータ＋スイッチでIPv6アドレスを有効にします。
    *
    * @method addIpv6Net
    * @public
    * @return {Ipv6Net}
    */
    Router.prototype.addIpv6Net = function () {
        var result = this._client.request("POST", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/ipv6net");
        this.reload();
        return new Ipv6Net(this._client, result["IPv6Net"]);
    };

    /**
    * このルータ＋スイッチでIPv6アドレスを無効にします。
    *
    * @method removeIpv6Net
    * @chainable
    * @public
    * @param {Ipv6Net} ipv6Net
    * @return {Router}
    */
    Router.prototype.removeIpv6Net = function (ipv6Net) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(ipv6Net, "saclient.cloud.resource.Ipv6Net");
        this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/ipv6net/" + ipv6Net._id());
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
    * @return {Ipv4Net}
    */
    Router.prototype.addStaticRoute = function (maskLen, nextHop) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(maskLen, "number");
        Util.validateType(nextHop, "string");
        var q = {};
        Util.setByPath(q, "NetworkMaskLen", maskLen);
        Util.setByPath(q, "NextHop", nextHop);
        var result = this._client.request("POST", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/subnet", q);
        this.reload();
        return new Ipv4Net(this._client, result["Subnet"]);
    };

    /**
    * このルータ＋スイッチからスタティックルートを削除します。
    *
    * @method removeStaticRoute
    * @chainable
    * @public
    * @param {Ipv4Net} ipv4Net
    * @return {Router}
    */
    Router.prototype.removeStaticRoute = function (ipv4Net) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(ipv4Net, "saclient.cloud.resource.Ipv4Net");
        this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/subnet/" + ipv4Net._id());
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
    * @return {Router}
    */
    Router.prototype.changePlan = function (bandWidthMbps) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(bandWidthMbps, "number");
        var path = this._apiPath() + "/" + Util.urlEncode(this._id()) + "/bandwidth";
        var q = {};
        Util.setByPath(q, "Internet.BandWidthMbps", bandWidthMbps);
        var result = this._client.request("PUT", path, q);
        this.apiDeserialize(result[this._rootKey()]);
        return this;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    Router.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(Router.prototype, "id", {
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
    Router.prototype.get_name = function () {
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
    Router.prototype.set_name = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_name = v;
        this.n_name = true;
        return this.m_name;
    };

    Object.defineProperty(Router.prototype, "name", {
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
    Router.prototype.get_description = function () {
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
    Router.prototype.set_description = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_description = v;
        this.n_description = true;
        return this.m_description;
    };

    Object.defineProperty(Router.prototype, "description", {
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
    * @method get_networkMaskLen
    * @private
    * @return {number}
    */
    Router.prototype.get_networkMaskLen = function () {
        return this.m_networkMaskLen;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_networkMaskLen
    * @private
    * @param {number} v
    * @return {number}
    */
    Router.prototype.set_networkMaskLen = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        this.m_networkMaskLen = v;
        this.n_networkMaskLen = true;
        return this.m_networkMaskLen;
    };

    Object.defineProperty(Router.prototype, "networkMaskLen", {
        /**
        * ネットワークのマスク長
        *
        * @property networkMaskLen
        * @type number
        * @public
        */
        get: function () {
            return this.get_networkMaskLen();
        },
        set: function (v) {
            this.set_networkMaskLen(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_bandWidthMbps
    * @private
    * @return {number}
    */
    Router.prototype.get_bandWidthMbps = function () {
        return this.m_bandWidthMbps;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_bandWidthMbps
    * @private
    * @param {number} v
    * @return {number}
    */
    Router.prototype.set_bandWidthMbps = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        this.m_bandWidthMbps = v;
        this.n_bandWidthMbps = true;
        return this.m_bandWidthMbps;
    };

    Object.defineProperty(Router.prototype, "bandWidthMbps", {
        /**
        * 帯域幅
        *
        * @property bandWidthMbps
        * @type number
        * @public
        */
        get: function () {
            return this.get_bandWidthMbps();
        },
        set: function (v) {
            this.set_bandWidthMbps(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_swytchId
    * @private
    * @return {string}
    */
    Router.prototype.get_swytchId = function () {
        return this.m_swytchId;
    };

    Object.defineProperty(Router.prototype, "swytchId", {
        /**
        * スイッチ
        *
        * @property swytchId
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_swytchId();
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
    Router.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "NetworkMaskLen")) {
            this.m_networkMaskLen = Util.getByPath(r, "NetworkMaskLen") == null ? null : parseInt("" + Util.getByPath(r, "NetworkMaskLen"), 10);
        } else {
            this.m_networkMaskLen = null;
            this.isIncomplete = true;
        }
        ;
        this.n_networkMaskLen = false;
        if (Util.existsPath(r, "BandWidthMbps")) {
            this.m_bandWidthMbps = Util.getByPath(r, "BandWidthMbps") == null ? null : parseInt("" + Util.getByPath(r, "BandWidthMbps"), 10);
        } else {
            this.m_bandWidthMbps = null;
            this.isIncomplete = true;
        }
        ;
        this.n_bandWidthMbps = false;
        if (Util.existsPath(r, "Switch.ID")) {
            this.m_swytchId = Util.getByPath(r, "Switch.ID") == null ? null : "" + Util.getByPath(r, "Switch.ID");
        } else {
            this.m_swytchId = null;
            this.isIncomplete = true;
        }
        ;
        this.n_swytchId = false;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Router.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_name) {
            Util.setByPath(ret, "Name", this.m_name);
        }
        ;
        if (withClean || this.n_description) {
            Util.setByPath(ret, "Description", this.m_description);
        }
        ;
        if (withClean || this.n_networkMaskLen) {
            Util.setByPath(ret, "NetworkMaskLen", this.m_networkMaskLen);
        }
        ;
        if (withClean || this.n_bandWidthMbps) {
            Util.setByPath(ret, "BandWidthMbps", this.m_bandWidthMbps);
        }
        ;
        if (withClean || this.n_swytchId) {
            Util.setByPath(ret, "Switch.ID", this.m_swytchId);
        }
        ;
        return ret;
    };
    return Router;
})(Resource);
module.exports = Router;

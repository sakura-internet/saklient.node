var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var HttpException = require('../../errors/HttpException');
var SaklientException = require('../../errors/SaklientException');

var Resource = require('./Resource');

var Ipv4Net = require('./Ipv4Net');
var Ipv6Net = require('./Ipv6Net');
var RouterActivity = require('./RouterActivity');

'use strict';

/**
* ルータの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resources.Router
* @class Router
* @constructor
* @extends Resource
*/
var Router = (function (_super) {
    __extends(Router, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function Router(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resources.Router#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resources.Router#n_name
        * @default false
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saklient.cloud.resources.Router#n_description
        * @default false
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saklient.cloud.resources.Router#n_networkMaskLen
        * @default false
        * @type boolean
        * @private
        */
        this.n_networkMaskLen = false;
        /**
        * @member saklient.cloud.resources.Router#n_bandWidthMbps
        * @default false
        * @type boolean
        * @private
        */
        this.n_bandWidthMbps = false;
        /**
        * @member saklient.cloud.resources.Router#n_swytchId
        * @default false
        * @type boolean
        * @private
        */
        this.n_swytchId = false;
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(client, "saklient.cloud.Client");
        Util.validateType(wrapped, "boolean");
        this._activity = new RouterActivity(client);
        this.apiDeserialize(obj, wrapped);
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
    * @method _className
    * @return {string}
    */
    Router.prototype._className = function () {
        return "Router";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    Router.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
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
    * @method get_activity
    * @private
    * @return {RouterActivity}
    */
    Router.prototype.get_activity = function () {
        return this._activity;
    };

    Object.defineProperty(Router.prototype, "activity", {
        /**
        * アクティビティ
        *
        * @property activity
        * @type RouterActivity
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_activity();
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
    Router.prototype._onAfterApiDeserialize = function (r, root) {
        Util.validateArgCount(arguments.length, 2);
        if (r != null) {
            this._activity.setSourceId(this._id());
        }
        ;
    };

    /**
    * 作成中のルータが利用可能になるまで待機します。
    *
    * @private
    * @method afterCreate
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
    * @return {boolean} 成功時はtrue、タイムアウトやエラーによる失敗時はfalseを返します。
    */
    Router.prototype.sleepWhileCreating = function (timeoutSec) {
        if (typeof timeoutSec === "undefined") { timeoutSec = 120; }
        Util.validateType(timeoutSec, "number");
        var step = 3;
        var isOk = false;
        while (0 < timeoutSec) {
            try  {
                if (this.exists()) {
                    this.reload();
                    isOk = true;
                }
                ;
            } catch (__ex) {
                if (__ex instanceof HttpException) {
                    var ex = __ex;
                     {
                    }
                }
            }
            ;
            timeoutSec -= step;
            if (isOk) {
                timeoutSec = 0;
            }
            ;
            if (0 < timeoutSec) {
                Util.sleep(step);
            }
            ;
        }
        ;
        return isOk;
    };

    /**
    * このルータが接続されているスイッチを取得します。
    *
    * @method getSwytch
    * @public
    * @return {Swytch}
    */
    Router.prototype.getSwytch = function () {
        var model = Util.createClassInstance("saklient.cloud.models.Model_Swytch", [this._client]);
        var id = this.get_swytchId();
        return model.getById(id);
    };

    /**
    * このルータ＋スイッチでIPv6アドレスを有効にします。
    *
    * @method addIpv6Net
    * @public
    * @return {Ipv6Net} 有効化されたIPv6ネットワーク
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
    * @return {Router} this
    */
    Router.prototype.removeIpv6Net = function (ipv6Net) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(ipv6Net, "saklient.cloud.resources.Ipv6Net");
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
    * @return {Ipv4Net} 追加されたスタティックルート
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
    * @return {Router} this
    */
    Router.prototype.removeStaticRoute = function (ipv4Net) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(ipv4Net, "saklient.cloud.resources.Ipv4Net");
        this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/subnet/" + ipv4Net._id());
        this.reload();
        return this;
    };

    /**
    * このルータ＋スイッチの帯域プランを変更します。
    *
    * 成功時はリソースIDが変わることにご注意ください。
    *
    * @method changePlan
    * @chainable
    * @public
    * @param {number} bandWidthMbps
    * @return {Router} this
    */
    Router.prototype.changePlan = function (bandWidthMbps) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(bandWidthMbps, "number");
        var path = this._apiPath() + "/" + Util.urlEncode(this._id()) + "/bandwidth";
        var q = {};
        Util.setByPath(q, "Internet.BandWidthMbps", bandWidthMbps);
        var result = this._client.request("PUT", path, q);
        this.apiDeserialize(result, true);
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
        if (!this.isNew) {
            throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.Router#networkMaskLen");
        }
        ;
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
        if (!this.isNew) {
            throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.Router#bandWidthMbps");
        }
        ;
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
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Router.prototype.apiSerializeImpl = function (withClean) {
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
        if (withClean || this.n_networkMaskLen) {
            Util.setByPath(ret, "NetworkMaskLen", this.m_networkMaskLen);
        } else {
            if (this.isNew) {
                missing.push("networkMaskLen");
            }
            ;
        }
        ;
        if (withClean || this.n_bandWidthMbps) {
            Util.setByPath(ret, "BandWidthMbps", this.m_bandWidthMbps);
        } else {
            if (this.isNew) {
                missing.push("bandWidthMbps");
            }
            ;
        }
        ;
        if (withClean || this.n_swytchId) {
            Util.setByPath(ret, "Switch.ID", this.m_swytchId);
        }
        ;
        if (missing.length > 0) {
            throw new SaklientException("required_field", "Required fields must be set before the Router creation: " + missing.join(", "));
        }
        ;
        return ret;
    };
    return Router;
})(Resource);
module.exports = Router;

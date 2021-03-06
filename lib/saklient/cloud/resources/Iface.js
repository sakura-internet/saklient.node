var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var SaklientException = require('../../errors/SaklientException');

var Resource = require('./Resource');

var IfaceActivity = require('./IfaceActivity');

'use strict';

/**
* インタフェースの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resources.Iface
* @class Iface
* @constructor
* @extends Resource
*/
var Iface = (function (_super) {
    __extends(Iface, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function Iface(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resources.Iface#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resources.Iface#n_macAddress
        * @default false
        * @type boolean
        * @private
        */
        this.n_macAddress = false;
        /**
        * @member saklient.cloud.resources.Iface#n_ipAddress
        * @default false
        * @type boolean
        * @private
        */
        this.n_ipAddress = false;
        /**
        * @member saklient.cloud.resources.Iface#n_userIpAddress
        * @default false
        * @type boolean
        * @private
        */
        this.n_userIpAddress = false;
        /**
        * @member saklient.cloud.resources.Iface#n_serverId
        * @default false
        * @type boolean
        * @private
        */
        this.n_serverId = false;
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(client, "saklient.cloud.Client");
        Util.validateType(wrapped, "boolean");
        this._activity = new IfaceActivity(client);
        this.apiDeserialize(obj, wrapped);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Iface.prototype._apiPath = function () {
        return "/interface";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Iface.prototype._rootKey = function () {
        return "Interface";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Iface.prototype._rootKeyM = function () {
        return "Interfaces";
    };

    /**
    * @private
    * @method _className
    * @return {string}
    */
    Iface.prototype._className = function () {
        return "Iface";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    Iface.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {Iface} this
    */
    Iface.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {Iface} this
    */
    Iface.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * @method get_activity
    * @private
    * @return {IfaceActivity}
    */
    Iface.prototype.get_activity = function () {
        return this._activity;
    };

    Object.defineProperty(Iface.prototype, "activity", {
        /**
        * アクティビティ
        *
        * @property activity
        * @type IfaceActivity
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
    Iface.prototype._onAfterApiDeserialize = function (r, root) {
        Util.validateArgCount(arguments.length, 2);
        if (r != null) {
            this._activity.setSourceId(this._id());
        }
        ;
    };

    /**
    * スイッチに接続します。
    *
    * @method connectToSwytch
    * @chainable
    * @public
    * @param {Swytch} swytch 接続先のスイッチ。
    * @return {Iface} this
    */
    Iface.prototype.connectToSwytch = function (swytch) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(swytch, "saklient.cloud.resources.Swytch");
        this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/to/switch/" + Util.urlEncode(swytch._id()));
        return this.reload();
    };

    /**
    * 共有セグメントに接続します。
    *
    * @method connectToSharedSegment
    * @chainable
    * @public
    * @return {Iface} this
    */
    Iface.prototype.connectToSharedSegment = function () {
        this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/to/switch/shared");
        return this.reload();
    };

    /**
    * スイッチから切断します。
    *
    * @method disconnectFromSwytch
    * @chainable
    * @public
    * @return {Iface} this
    */
    Iface.prototype.disconnectFromSwytch = function () {
        this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/to/switch");
        return this.reload();
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    Iface.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(Iface.prototype, "id", {
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
    * @method get_macAddress
    * @private
    * @return {string}
    */
    Iface.prototype.get_macAddress = function () {
        return this.m_macAddress;
    };

    Object.defineProperty(Iface.prototype, "macAddress", {
        /**
        * MACアドレス
        *
        * @property macAddress
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_macAddress();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_ipAddress
    * @private
    * @return {string}
    */
    Iface.prototype.get_ipAddress = function () {
        return this.m_ipAddress;
    };

    Object.defineProperty(Iface.prototype, "ipAddress", {
        /**
        * IPv4アドレス（共有セグメントによる自動割当）
        *
        * @property ipAddress
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ipAddress();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_userIpAddress
    * @private
    * @return {string}
    */
    Iface.prototype.get_userIpAddress = function () {
        return this.m_userIpAddress;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_userIpAddress
    * @private
    * @param {string} v
    * @return {string}
    */
    Iface.prototype.set_userIpAddress = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_userIpAddress = v;
        this.n_userIpAddress = true;
        return this.m_userIpAddress;
    };

    Object.defineProperty(Iface.prototype, "userIpAddress", {
        /**
        * ユーザ設定IPv4アドレス
        *
        * @property userIpAddress
        * @type string
        * @public
        */
        get: function () {
            return this.get_userIpAddress();
        },
        set: function (v) {
            this.set_userIpAddress(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_serverId
    * @private
    * @return {string}
    */
    Iface.prototype.get_serverId = function () {
        return this.m_serverId;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_serverId
    * @private
    * @param {string} v
    * @return {string}
    */
    Iface.prototype.set_serverId = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        if (!this.isNew) {
            throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.Iface#serverId");
        }
        ;
        this.m_serverId = v;
        this.n_serverId = true;
        return this.m_serverId;
    };

    Object.defineProperty(Iface.prototype, "serverId", {
        /**
        * このインタフェースが取り付けられているサーバのID
        *
        * @property serverId
        * @type string
        * @public
        */
        get: function () {
            return this.get_serverId();
        },
        set: function (v) {
            this.set_serverId(v);
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
    Iface.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "MACAddress")) {
            this.m_macAddress = Util.getByPath(r, "MACAddress") == null ? null : "" + Util.getByPath(r, "MACAddress");
        } else {
            this.m_macAddress = null;
            this.isIncomplete = true;
        }
        ;
        this.n_macAddress = false;
        if (Util.existsPath(r, "IPAddress")) {
            this.m_ipAddress = Util.getByPath(r, "IPAddress") == null ? null : "" + Util.getByPath(r, "IPAddress");
        } else {
            this.m_ipAddress = null;
            this.isIncomplete = true;
        }
        ;
        this.n_ipAddress = false;
        if (Util.existsPath(r, "UserIPAddress")) {
            this.m_userIpAddress = Util.getByPath(r, "UserIPAddress") == null ? null : "" + Util.getByPath(r, "UserIPAddress");
        } else {
            this.m_userIpAddress = null;
            this.isIncomplete = true;
        }
        ;
        this.n_userIpAddress = false;
        if (Util.existsPath(r, "Server.ID")) {
            this.m_serverId = Util.getByPath(r, "Server.ID") == null ? null : "" + Util.getByPath(r, "Server.ID");
        } else {
            this.m_serverId = null;
            this.isIncomplete = true;
        }
        ;
        this.n_serverId = false;
    };

    /**
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Iface.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        var missing = [];
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_macAddress) {
            Util.setByPath(ret, "MACAddress", this.m_macAddress);
        }
        ;
        if (withClean || this.n_ipAddress) {
            Util.setByPath(ret, "IPAddress", this.m_ipAddress);
        }
        ;
        if (withClean || this.n_userIpAddress) {
            Util.setByPath(ret, "UserIPAddress", this.m_userIpAddress);
        }
        ;
        if (withClean || this.n_serverId) {
            Util.setByPath(ret, "Server.ID", this.m_serverId);
        } else {
            if (this.isNew) {
                missing.push("serverId");
            }
            ;
        }
        ;
        if (missing.length > 0) {
            throw new SaklientException("required_field", "Required fields must be set before the Iface creation: " + missing.join(", "));
        }
        ;
        return ret;
    };
    return Iface;
})(Resource);
module.exports = Iface;

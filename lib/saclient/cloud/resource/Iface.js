var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var SaclientException = require('../../errors/SaclientException');

var Resource = require('./Resource');

'use strict';

/**
* インタフェースのリソース情報へのアクセス機能や操作機能を備えたクラス。
*
* @class Iface
* @constructor
* @extends Resource
*/
var Iface = (function (_super) {
    __extends(Iface, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function Iface(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.Iface#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.Iface#n_macAddress
        * @type boolean
        * @private
        */
        this.n_macAddress = false;
        /**
        * @member saclient.cloud.resource.Iface#n_ipAddress
        * @type boolean
        * @private
        */
        this.n_ipAddress = false;
        /**
        * @member saclient.cloud.resource.Iface#n_userIpAddress
        * @type boolean
        * @private
        */
        this.n_userIpAddress = false;
        /**
        * @member saclient.cloud.resource.Iface#n_serverId
        * @type boolean
        * @private
        */
        this.n_serverId = false;
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
    * @method _id
    * @public
    * @return {string}
    */
    Iface.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
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
    * 共有セグメントに接続します。
    *
    * @method connectToSharedSegment
    * @chainable
    * @public
    * @return {Iface}
    */
    Iface.prototype.connectToSharedSegment = function () {
        this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/to/switch/shared");
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
            throw new SaclientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saclient.cloud.resource.Iface#serverId");
        }
        ;
        this.m_serverId = v;
        this.n_serverId = true;
        return this.m_serverId;
    };

    Object.defineProperty(Iface.prototype, "serverId", {
        /**
        * サーバ
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
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Iface.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
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
        }
        ;
        return ret;
    };
    return Iface;
})(Resource);
module.exports = Iface;

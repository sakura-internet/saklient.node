var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Resource = require('./Resource');

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
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
    *
    * @method create
    * @chainable
    * @public
    * @return {Iface} this
    */
    Iface.prototype.create = function () {
        return (this._create());
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
    * @method apiDeserialize
    * @public
    * @param {any} r
    */
    Iface.prototype.apiDeserialize = function (r) {
        this.isIncomplete = true;
        if (("ID" in r)) {
            this.m_id = r["ID"] == null ? null : "" + r["ID"];
            this.n_id = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("MACAddress" in r)) {
            this.m_macAddress = r["MACAddress"] == null ? null : "" + r["MACAddress"];
            this.n_macAddress = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("IPAddress" in r)) {
            this.m_ipAddress = r["IPAddress"] == null ? null : "" + r["IPAddress"];
            this.n_ipAddress = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("UserIPAddress" in r)) {
            this.m_userIpAddress = r["UserIPAddress"] == null ? null : "" + r["UserIPAddress"];
            this.n_userIpAddress = false;
        } else {
            this.isIncomplete = false;
        }
        ;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerialize
    * @public
    * @param {boolean} withClean=false
    * @return {any}
    */
    Iface.prototype.apiSerialize = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        var ret = {};
        if (withClean || this.n_id) {
            ret["ID"] = this.m_id;
        }
        ;
        if (withClean || this.n_macAddress) {
            ret["MACAddress"] = this.m_macAddress;
        }
        ;
        if (withClean || this.n_ipAddress) {
            ret["IPAddress"] = this.m_ipAddress;
        }
        ;
        if (withClean || this.n_userIpAddress) {
            ret["UserIPAddress"] = this.m_userIpAddress;
        }
        ;
        return ret;
    };
    return Iface;
})(Resource);
module.exports = Iface;

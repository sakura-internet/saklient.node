var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');

var Resource = require('./Resource');

/**
* サーバインスタンスのリソース情報へのアクセス機能や操作機能を備えたクラス。
*
* @class ServerInstance
* @constructor
* @extends Resource
*/
var ServerInstance = (function (_super) {
    __extends(ServerInstance, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function ServerInstance(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.ServerInstance#n_status
        * @type boolean
        * @private
        */
        this.n_status = false;
        /**
        * @member saclient.cloud.resource.ServerInstance#n_beforeStatus
        * @type boolean
        * @private
        */
        this.n_beforeStatus = false;
        /**
        * @member saclient.cloud.resource.ServerInstance#n_statusChangedAt
        * @type boolean
        * @private
        */
        this.n_statusChangedAt = false;
        this.apiDeserialize(r);
    }
    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_status
    * @private
    * @return {string}
    */
    ServerInstance.prototype.get_status = function () {
        return this.m_status;
    };

    Object.defineProperty(ServerInstance.prototype, "status", {
        /**
        * @property status
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_status();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_beforeStatus
    * @private
    * @return {string}
    */
    ServerInstance.prototype.get_beforeStatus = function () {
        return this.m_beforeStatus;
    };

    Object.defineProperty(ServerInstance.prototype, "beforeStatus", {
        /**
        * @property beforeStatus
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_beforeStatus();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_statusChangedAt
    * @private
    * @return {Date}
    */
    ServerInstance.prototype.get_statusChangedAt = function () {
        return this.m_statusChangedAt;
    };

    Object.defineProperty(ServerInstance.prototype, "statusChangedAt", {
        /**
        * @property statusChangedAt
        * @type Date
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_statusChangedAt();
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
    ServerInstance.prototype.apiDeserialize = function (r) {
        this.isIncomplete = true;
        if (("Status" in r)) {
            this.m_status = r["Status"] == null ? null : "" + r["Status"];
            this.n_status = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("BeforeStatus" in r)) {
            this.m_beforeStatus = r["BeforeStatus"] == null ? null : "" + r["BeforeStatus"];
            this.n_beforeStatus = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("StatusChangedAt" in r)) {
            this.m_statusChangedAt = r["StatusChangedAt"] == null ? null : Util.str2date("" + r["StatusChangedAt"]);
            this.n_statusChangedAt = false;
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
    ServerInstance.prototype.apiSerialize = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        var ret = {};
        if (withClean || this.n_status) {
            ret["Status"] = this.m_status;
        }
        ;
        if (withClean || this.n_beforeStatus) {
            ret["BeforeStatus"] = this.m_beforeStatus;
        }
        ;
        if (withClean || this.n_statusChangedAt) {
            ret["StatusChangedAt"] = this.m_statusChangedAt == null ? null : Util.date2str(this.m_statusChangedAt);
        }
        ;
        return ret;
    };
    return ServerInstance;
})(Resource);
module.exports = ServerInstance;

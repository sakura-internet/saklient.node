var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');

var Resource = require('./Resource');
var EServerInstanceStatus = require('../enums/EServerInstanceStatus');

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
    * サーバが起動しているときtrueを返します。
    *
    * @method isUp
    * @public
    * @return {boolean}
    */
    ServerInstance.prototype.isUp = function () {
        return this.get_status() != null && EServerInstanceStatus.compare(this.get_status(), EServerInstanceStatus.up) == 0;
    };

    /**
    * サーバが停止しているときtrueを返します。
    *
    * @method isDown
    * @public
    * @return {boolean}
    */
    ServerInstance.prototype.isDown = function () {
        return this.get_status() == null || EServerInstanceStatus.compare(this.get_status(), EServerInstanceStatus.down) == 0;
    };

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
    * @method apiDeserializeImpl
    * @protected
    * @param {any} r
    */
    ServerInstance.prototype.apiDeserializeImpl = function (r) {
        this.isNew = r == null;
        if (this.isNew) {
            r = {};
        }
        ;
        this.isIncomplete = false;
        if (Util.existsPath(r, "Status")) {
            this.m_status = Util.getByPath(r, "Status") == null ? null : "" + Util.getByPath(r, "Status");
        } else {
            this.m_status = null;
            this.isIncomplete = true;
        }
        ;
        this.n_status = false;
        if (Util.existsPath(r, "BeforeStatus")) {
            this.m_beforeStatus = Util.getByPath(r, "BeforeStatus") == null ? null : "" + Util.getByPath(r, "BeforeStatus");
        } else {
            this.m_beforeStatus = null;
            this.isIncomplete = true;
        }
        ;
        this.n_beforeStatus = false;
        if (Util.existsPath(r, "StatusChangedAt")) {
            this.m_statusChangedAt = Util.getByPath(r, "StatusChangedAt") == null ? null : Util.str2date("" + Util.getByPath(r, "StatusChangedAt"));
        } else {
            this.m_statusChangedAt = null;
            this.isIncomplete = true;
        }
        ;
        this.n_statusChangedAt = false;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    ServerInstance.prototype.apiSerializeImpl = function (withClean) {
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

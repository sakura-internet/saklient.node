var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Resource = require('./Resource');
var IsoImage = require('./IsoImage');
var EServerInstanceStatus = require('../enums/EServerInstanceStatus');

'use strict';

/**
* サーバインスタンスの実体1つに対応し、属性の取得や操作を行うためのクラス。
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
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function ServerInstance(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resource.ServerInstance#n_status
        * @type boolean
        * @private
        */
        this.n_status = false;
        /**
        * @member saklient.cloud.resource.ServerInstance#n_beforeStatus
        * @type boolean
        * @private
        */
        this.n_beforeStatus = false;
        /**
        * @member saklient.cloud.resource.ServerInstance#n_statusChangedAt
        * @type boolean
        * @private
        */
        this.n_statusChangedAt = false;
        /**
        * @member saklient.cloud.resource.ServerInstance#n_isoImage
        * @type boolean
        * @private
        */
        this.n_isoImage = false;
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(client, "saklient.cloud.Client");
        Util.validateType(wrapped, "boolean");
        this.apiDeserialize(obj, wrapped);
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
        * 起動状態 {{#crossLink "EServerInstanceStatus"}}{{/crossLink}}
        *
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
        * 前回の起動状態 {{#crossLink "EServerInstanceStatus"}}{{/crossLink}}
        *
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
        * 現在の起動状態に変化した日時
        *
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
    * @method get_isoImage
    * @private
    * @return {IsoImage}
    */
    ServerInstance.prototype.get_isoImage = function () {
        return this.m_isoImage;
    };

    Object.defineProperty(ServerInstance.prototype, "isoImage", {
        /**
        * 挿入されているISOイメージ
        *
        * @property isoImage
        * @type IsoImage
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_isoImage();
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
        Util.validateArgCount(arguments.length, 1);
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
        if (Util.existsPath(r, "CDROM")) {
            this.m_isoImage = Util.getByPath(r, "CDROM") == null ? null : new IsoImage(this._client, Util.getByPath(r, "CDROM"));
        } else {
            this.m_isoImage = null;
            this.isIncomplete = true;
        }
        ;
        this.n_isoImage = false;
    };

    /**
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    ServerInstance.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        var ret = {};
        if (withClean || this.n_status) {
            Util.setByPath(ret, "Status", this.m_status);
        }
        ;
        if (withClean || this.n_beforeStatus) {
            Util.setByPath(ret, "BeforeStatus", this.m_beforeStatus);
        }
        ;
        if (withClean || this.n_statusChangedAt) {
            Util.setByPath(ret, "StatusChangedAt", this.m_statusChangedAt == null ? null : Util.date2str(this.m_statusChangedAt));
        }
        ;
        if (withClean || this.n_isoImage) {
            Util.setByPath(ret, "CDROM", withClean ? (this.m_isoImage == null ? null : this.m_isoImage.apiSerialize(withClean)) : (this.m_isoImage == null ? { ID: "0" } : this.m_isoImage.apiSerializeID()));
        }
        ;
        return ret;
    };
    return ServerInstance;
})(Resource);
module.exports = ServerInstance;

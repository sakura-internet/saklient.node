var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Resource = require('./Resource');

'use strict';

/**
* ルータ帯域プラン情報の1レコードに対応するクラス。
*
* @module saklient.cloud.resource.RouterPlan
* @class RouterPlan
* @constructor
* @extends Resource
*/
var RouterPlan = (function (_super) {
    __extends(RouterPlan, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function RouterPlan(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resource.RouterPlan#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resource.RouterPlan#n_name
        * @default false
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saklient.cloud.resource.RouterPlan#n_bandWidthMbps
        * @default false
        * @type boolean
        * @private
        */
        this.n_bandWidthMbps = false;
        /**
        * @member saklient.cloud.resource.RouterPlan#n_serviceClass
        * @default false
        * @type boolean
        * @private
        */
        this.n_serviceClass = false;
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
    RouterPlan.prototype._apiPath = function () {
        return "/product/internet";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    RouterPlan.prototype._rootKey = function () {
        return "InternetPlan";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    RouterPlan.prototype._rootKeyM = function () {
        return "InternetPlans";
    };

    /**
    * @private
    * @method _className
    * @return {string}
    */
    RouterPlan.prototype._className = function () {
        return "RouterPlan";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    RouterPlan.prototype._id = function () {
        return this.get_id();
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    RouterPlan.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(RouterPlan.prototype, "id", {
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
    RouterPlan.prototype.get_name = function () {
        return this.m_name;
    };

    Object.defineProperty(RouterPlan.prototype, "name", {
        /**
        * 名前
        *
        * @property name
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_name();
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
    RouterPlan.prototype.get_bandWidthMbps = function () {
        return this.m_bandWidthMbps;
    };

    Object.defineProperty(RouterPlan.prototype, "bandWidthMbps", {
        /**
        * 帯域幅
        *
        * @property bandWidthMbps
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_bandWidthMbps();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_serviceClass
    * @private
    * @return {string}
    */
    RouterPlan.prototype.get_serviceClass = function () {
        return this.m_serviceClass;
    };

    Object.defineProperty(RouterPlan.prototype, "serviceClass", {
        /**
        * サービスクラス
        *
        * @property serviceClass
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_serviceClass();
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
    RouterPlan.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "BandWidthMbps")) {
            this.m_bandWidthMbps = Util.getByPath(r, "BandWidthMbps") == null ? null : parseInt("" + Util.getByPath(r, "BandWidthMbps"), 10);
        } else {
            this.m_bandWidthMbps = null;
            this.isIncomplete = true;
        }
        ;
        this.n_bandWidthMbps = false;
        if (Util.existsPath(r, "ServiceClass")) {
            this.m_serviceClass = Util.getByPath(r, "ServiceClass") == null ? null : "" + Util.getByPath(r, "ServiceClass");
        } else {
            this.m_serviceClass = null;
            this.isIncomplete = true;
        }
        ;
        this.n_serviceClass = false;
    };

    /**
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    RouterPlan.prototype.apiSerializeImpl = function (withClean) {
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
        if (withClean || this.n_bandWidthMbps) {
            Util.setByPath(ret, "BandWidthMbps", this.m_bandWidthMbps);
        }
        ;
        if (withClean || this.n_serviceClass) {
            Util.setByPath(ret, "ServiceClass", this.m_serviceClass);
        }
        ;
        return ret;
    };
    return RouterPlan;
})(Resource);
module.exports = RouterPlan;

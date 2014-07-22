var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');

var Resource = require('./Resource');

/**
* ルータのプラン情報へのアクセス機能を備えたクラス。
*
* @class InternetPlan
* @constructor
* @extends Resource
*/
var InternetPlan = (function (_super) {
    __extends(InternetPlan, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function InternetPlan(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.InternetPlan#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.InternetPlan#n_name
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saclient.cloud.resource.InternetPlan#n_bandWidthMbps
        * @type boolean
        * @private
        */
        this.n_bandWidthMbps = false;
        /**
        * @member saclient.cloud.resource.InternetPlan#n_serviceClass
        * @type boolean
        * @private
        */
        this.n_serviceClass = false;
        this.apiDeserialize(r);
    }
    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    InternetPlan.prototype._id = function () {
        return this.get_id();
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    InternetPlan.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(InternetPlan.prototype, "id", {
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
    * @method get_name
    * @private
    * @return {string}
    */
    InternetPlan.prototype.get_name = function () {
        return this.m_name;
    };

    Object.defineProperty(InternetPlan.prototype, "name", {
        /**
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
    InternetPlan.prototype.get_bandWidthMbps = function () {
        return this.m_bandWidthMbps;
    };

    Object.defineProperty(InternetPlan.prototype, "bandWidthMbps", {
        /**
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
    InternetPlan.prototype.get_serviceClass = function () {
        return this.m_serviceClass;
    };

    Object.defineProperty(InternetPlan.prototype, "serviceClass", {
        /**
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
    InternetPlan.prototype.apiDeserializeImpl = function (r) {
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
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    InternetPlan.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
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
    return InternetPlan;
})(Resource);
module.exports = InternetPlan;

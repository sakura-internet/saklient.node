var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Resource = require('./Resource');

/**
* サーバのプラン情報へのアクセス機能を備えたクラス。
*
* @class ServerPlan
* @constructor
* @extends Resource
*/
var ServerPlan = (function (_super) {
    __extends(ServerPlan, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function ServerPlan(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.ServerPlan#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.ServerPlan#n_name
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saclient.cloud.resource.ServerPlan#n_cpu
        * @type boolean
        * @private
        */
        this.n_cpu = false;
        /**
        * @member saclient.cloud.resource.ServerPlan#n_memoryMib
        * @type boolean
        * @private
        */
        this.n_memoryMib = false;
        /**
        * @member saclient.cloud.resource.ServerPlan#n_serviceClass
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
    ServerPlan.prototype._id = function () {
        return this.get_id();
    };

    /**
    * @method get_memoryGib
    * @protected
    * @return {number}
    */
    ServerPlan.prototype.get_memoryGib = function () {
        return this.get_memoryMib() >> 10;
    };

    Object.defineProperty(ServerPlan.prototype, "memoryGib", {
        /**
        * @property memoryGib
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_memoryGib();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    ServerPlan.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(ServerPlan.prototype, "id", {
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
    ServerPlan.prototype.get_name = function () {
        return this.m_name;
    };

    Object.defineProperty(ServerPlan.prototype, "name", {
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
    * @method get_cpu
    * @private
    * @return {number}
    */
    ServerPlan.prototype.get_cpu = function () {
        return this.m_cpu;
    };

    Object.defineProperty(ServerPlan.prototype, "cpu", {
        /**
        * @property cpu
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_cpu();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_memoryMib
    * @private
    * @return {number}
    */
    ServerPlan.prototype.get_memoryMib = function () {
        return this.m_memoryMib;
    };

    Object.defineProperty(ServerPlan.prototype, "memoryMib", {
        /**
        * @property memoryMib
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_memoryMib();
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
    ServerPlan.prototype.get_serviceClass = function () {
        return this.m_serviceClass;
    };

    Object.defineProperty(ServerPlan.prototype, "serviceClass", {
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
    ServerPlan.prototype.apiDeserializeImpl = function (r) {
        this.isNew = r == null;
        if (this.isNew) {
            r = {};
        }
        ;
        this.isIncomplete = false;
        if (("ID" in r)) {
            this.m_id = r["ID"] == null ? null : "" + r["ID"];
        } else {
            this.m_id = null;
            this.isIncomplete = true;
        }
        ;
        this.n_id = false;
        if (("Name" in r)) {
            this.m_name = r["Name"] == null ? null : "" + r["Name"];
        } else {
            this.m_name = null;
            this.isIncomplete = true;
        }
        ;
        this.n_name = false;
        if (("CPU" in r)) {
            this.m_cpu = r["CPU"] == null ? null : parseInt("" + r["CPU"], 10);
        } else {
            this.m_cpu = null;
            this.isIncomplete = true;
        }
        ;
        this.n_cpu = false;
        if (("MemoryMB" in r)) {
            this.m_memoryMib = r["MemoryMB"] == null ? null : parseInt("" + r["MemoryMB"], 10);
        } else {
            this.m_memoryMib = null;
            this.isIncomplete = true;
        }
        ;
        this.n_memoryMib = false;
        if (("ServiceClass" in r)) {
            this.m_serviceClass = r["ServiceClass"] == null ? null : "" + r["ServiceClass"];
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
    ServerPlan.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        var ret = {};
        if (withClean || this.n_id) {
            ret["ID"] = this.m_id;
        }
        ;
        if (withClean || this.n_name) {
            ret["Name"] = this.m_name;
        }
        ;
        if (withClean || this.n_cpu) {
            ret["CPU"] = this.m_cpu;
        }
        ;
        if (withClean || this.n_memoryMib) {
            ret["MemoryMB"] = this.m_memoryMib;
        }
        ;
        if (withClean || this.n_serviceClass) {
            ret["ServiceClass"] = this.m_serviceClass;
        }
        ;
        return ret;
    };
    return ServerPlan;
})(Resource);
module.exports = ServerPlan;

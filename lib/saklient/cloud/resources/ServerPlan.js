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
* サーバプラン情報の1レコードに対応するクラス。
*
* @module saklient.cloud.resources.ServerPlan
* @class ServerPlan
* @constructor
* @extends Resource
*/
var ServerPlan = (function (_super) {
    __extends(ServerPlan, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function ServerPlan(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resources.ServerPlan#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resources.ServerPlan#n_name
        * @default false
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saklient.cloud.resources.ServerPlan#n_cpu
        * @default false
        * @type boolean
        * @private
        */
        this.n_cpu = false;
        /**
        * @member saklient.cloud.resources.ServerPlan#n_memoryMib
        * @default false
        * @type boolean
        * @private
        */
        this.n_memoryMib = false;
        /**
        * @member saklient.cloud.resources.ServerPlan#n_serviceClass
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
    ServerPlan.prototype._apiPath = function () {
        return "/product/server";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    ServerPlan.prototype._rootKey = function () {
        return "ServerPlan";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    ServerPlan.prototype._rootKeyM = function () {
        return "ServerPlans";
    };

    /**
    * @private
    * @method _className
    * @return {string}
    */
    ServerPlan.prototype._className = function () {
        return "ServerPlan";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    ServerPlan.prototype._id = function () {
        return this.get_id();
    };

    /**
    * @method get_memoryGib
    * @protected
    * @private
    * @return {number}
    */
    ServerPlan.prototype.get_memoryGib = function () {
        var memoryMib = this.get_memoryMib();
        return memoryMib == null ? null : memoryMib >> 10;
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
    ServerPlan.prototype.get_name = function () {
        return this.m_name;
    };

    Object.defineProperty(ServerPlan.prototype, "name", {
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
    * @method get_cpu
    * @private
    * @return {number}
    */
    ServerPlan.prototype.get_cpu = function () {
        return this.m_cpu;
    };

    Object.defineProperty(ServerPlan.prototype, "cpu", {
        /**
        * 仮想コア数
        *
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
        * メモリ容量[MiB]
        *
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
    ServerPlan.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "CPU")) {
            this.m_cpu = Util.getByPath(r, "CPU") == null ? null : parseInt("" + Util.getByPath(r, "CPU"), 10);
        } else {
            this.m_cpu = null;
            this.isIncomplete = true;
        }
        ;
        this.n_cpu = false;
        if (Util.existsPath(r, "MemoryMB")) {
            this.m_memoryMib = Util.getByPath(r, "MemoryMB") == null ? null : parseInt("" + Util.getByPath(r, "MemoryMB"), 10);
        } else {
            this.m_memoryMib = null;
            this.isIncomplete = true;
        }
        ;
        this.n_memoryMib = false;
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
    ServerPlan.prototype.apiSerializeImpl = function (withClean) {
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
        if (withClean || this.n_cpu) {
            Util.setByPath(ret, "CPU", this.m_cpu);
        }
        ;
        if (withClean || this.n_memoryMib) {
            Util.setByPath(ret, "MemoryMB", this.m_memoryMib);
        }
        ;
        if (withClean || this.n_serviceClass) {
            Util.setByPath(ret, "ServiceClass", this.m_serviceClass);
        }
        ;
        return ret;
    };
    return ServerPlan;
})(Resource);
module.exports = ServerPlan;

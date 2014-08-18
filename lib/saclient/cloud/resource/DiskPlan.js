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
* ディスクのプラン情報へのアクセス機能を備えたクラス。
*
* @class DiskPlan
* @constructor
* @extends Resource
*/
var DiskPlan = (function (_super) {
    __extends(DiskPlan, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {any} obj
    * @param {Client} client
    * @param {boolean} wrapped=false
    */
    function DiskPlan(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.DiskPlan#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.DiskPlan#n_name
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saclient.cloud.resource.DiskPlan#n_storageClass
        * @type boolean
        * @private
        */
        this.n_storageClass = false;
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(client, "saclient.cloud.Client");
        Util.validateType(wrapped, "boolean");
        this.apiDeserialize(obj, wrapped);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    DiskPlan.prototype._apiPath = function () {
        return "/product/disk";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    DiskPlan.prototype._rootKey = function () {
        return "DiskPlan";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    DiskPlan.prototype._rootKeyM = function () {
        return "DiskPlans";
    };

    /**
    * @method className
    * @protected
    * @return {string}
    */
    DiskPlan.prototype.className = function () {
        return "DiskPlan";
    };

    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    DiskPlan.prototype._id = function () {
        return this.get_id();
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    DiskPlan.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(DiskPlan.prototype, "id", {
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
    DiskPlan.prototype.get_name = function () {
        return this.m_name;
    };

    Object.defineProperty(DiskPlan.prototype, "name", {
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
    * @method get_storageClass
    * @private
    * @return {string}
    */
    DiskPlan.prototype.get_storageClass = function () {
        return this.m_storageClass;
    };

    Object.defineProperty(DiskPlan.prototype, "storageClass", {
        /**
        * @property storageClass
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_storageClass();
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
    DiskPlan.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "StorageClass")) {
            this.m_storageClass = Util.getByPath(r, "StorageClass") == null ? null : "" + Util.getByPath(r, "StorageClass");
        } else {
            this.m_storageClass = null;
            this.isIncomplete = true;
        }
        ;
        this.n_storageClass = false;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    DiskPlan.prototype.apiSerializeImpl = function (withClean) {
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
        if (withClean || this.n_storageClass) {
            Util.setByPath(ret, "StorageClass", this.m_storageClass);
        }
        ;
        return ret;
    };
    return DiskPlan;
})(Resource);
module.exports = DiskPlan;

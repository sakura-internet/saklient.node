var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Resource = require('./Resource');

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
    * @param {Client} client
    * @param {any} r
    */
    function DiskPlan(client, r) {
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
        this.apiDeserialize(r);
    }
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
    * @method apiDeserialize
    * @public
    * @param {any} r
    */
    DiskPlan.prototype.apiDeserialize = function (r) {
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
        if (("StorageClass" in r)) {
            this.m_storageClass = r["StorageClass"] == null ? null : "" + r["StorageClass"];
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
    * @method apiSerialize
    * @public
    * @param {boolean} withClean=false
    * @return {any}
    */
    DiskPlan.prototype.apiSerialize = function (withClean) {
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
        if (withClean || this.n_storageClass) {
            ret["StorageClass"] = this.m_storageClass;
        }
        ;
        return ret;
    };
    return DiskPlan;
})(Resource);
module.exports = DiskPlan;

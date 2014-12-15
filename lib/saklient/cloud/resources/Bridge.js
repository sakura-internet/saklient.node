var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var SaklientException = require('../../errors/SaklientException');

var Resource = require('./Resource');
var Region = require('./Region');

'use strict';

/**
* ブリッジの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resources.Bridge
* @class Bridge
* @constructor
* @extends Resource
*/
var Bridge = (function (_super) {
    __extends(Bridge, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function Bridge(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resources.Bridge#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resources.Bridge#n_name
        * @default false
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saklient.cloud.resources.Bridge#n_description
        * @default false
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saklient.cloud.resources.Bridge#n_region
        * @default false
        * @type boolean
        * @private
        */
        this.n_region = false;
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
    Bridge.prototype._apiPath = function () {
        return "/bridge";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Bridge.prototype._rootKey = function () {
        return "Bridge";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Bridge.prototype._rootKeyM = function () {
        return "Bridges";
    };

    /**
    * @private
    * @method _className
    * @return {string}
    */
    Bridge.prototype._className = function () {
        return "Bridge";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    Bridge.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {Bridge} this
    */
    Bridge.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {Bridge} this
    */
    Bridge.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    Bridge.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(Bridge.prototype, "id", {
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
    Bridge.prototype.get_name = function () {
        return this.m_name;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_name
    * @private
    * @param {string} v
    * @return {string}
    */
    Bridge.prototype.set_name = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_name = v;
        this.n_name = true;
        return this.m_name;
    };

    Object.defineProperty(Bridge.prototype, "name", {
        /**
        * 名前
        *
        * @property name
        * @type string
        * @public
        */
        get: function () {
            return this.get_name();
        },
        set: function (v) {
            this.set_name(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_description
    * @private
    * @return {string}
    */
    Bridge.prototype.get_description = function () {
        return this.m_description;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_description
    * @private
    * @param {string} v
    * @return {string}
    */
    Bridge.prototype.set_description = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_description = v;
        this.n_description = true;
        return this.m_description;
    };

    Object.defineProperty(Bridge.prototype, "description", {
        /**
        * 説明
        *
        * @property description
        * @type string
        * @public
        */
        get: function () {
            return this.get_description();
        },
        set: function (v) {
            this.set_description(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_region
    * @private
    * @return {Region}
    */
    Bridge.prototype.get_region = function () {
        return this.m_region;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_region
    * @private
    * @param {Region} v
    * @return {Region}
    */
    Bridge.prototype.set_region = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "saklient.cloud.resources.Region");
        if (!this.isNew) {
            throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.Bridge#region");
        }
        ;
        this.m_region = v;
        this.n_region = true;
        return this.m_region;
    };

    Object.defineProperty(Bridge.prototype, "region", {
        /**
        * リージョン
        *
        * @property region
        * @type Region
        * @public
        */
        get: function () {
            return this.get_region();
        },
        set: function (v) {
            this.set_region(v);
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
    Bridge.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "Description")) {
            this.m_description = Util.getByPath(r, "Description") == null ? null : "" + Util.getByPath(r, "Description");
        } else {
            this.m_description = null;
            this.isIncomplete = true;
        }
        ;
        this.n_description = false;
        if (Util.existsPath(r, "Region")) {
            this.m_region = Util.getByPath(r, "Region") == null ? null : new Region(this._client, Util.getByPath(r, "Region"));
        } else {
            this.m_region = null;
            this.isIncomplete = true;
        }
        ;
        this.n_region = false;
    };

    /**
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Bridge.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        var missing = [];
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_name) {
            Util.setByPath(ret, "Name", this.m_name);
        } else {
            if (this.isNew) {
                missing.push("name");
            }
            ;
        }
        ;
        if (withClean || this.n_description) {
            Util.setByPath(ret, "Description", this.m_description);
        }
        ;
        if (withClean || this.n_region) {
            Util.setByPath(ret, "Region", withClean ? (this.m_region == null ? null : this.m_region.apiSerialize(withClean)) : (this.m_region == null ? { ID: "0" } : this.m_region.apiSerializeID()));
        } else {
            if (this.isNew) {
                missing.push("region");
            }
            ;
        }
        ;
        if (missing.length > 0) {
            throw new SaklientException("required_field", "Required fields must be set before the Bridge creation: " + missing.join(", "));
        }
        ;
        return ret;
    };
    return Bridge;
})(Resource);
module.exports = Bridge;

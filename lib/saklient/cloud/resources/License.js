var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var SaklientException = require('../../errors/SaklientException');

var Resource = require('./Resource');
var LicenseInfo = require('./LicenseInfo');

'use strict';

/**
* ライセンスの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resources.License
* @class License
* @constructor
* @extends Resource
*/
var License = (function (_super) {
    __extends(License, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function License(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resources.License#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resources.License#n_name
        * @default false
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saklient.cloud.resources.License#n_info
        * @default false
        * @type boolean
        * @private
        */
        this.n_info = false;
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
    License.prototype._apiPath = function () {
        return "/license";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    License.prototype._rootKey = function () {
        return "License";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    License.prototype._rootKeyM = function () {
        return "Licenses";
    };

    /**
    * @private
    * @method _className
    * @return {string}
    */
    License.prototype._className = function () {
        return "License";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    License.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {License} this
    */
    License.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {License} this
    */
    License.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    License.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(License.prototype, "id", {
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
    License.prototype.get_name = function () {
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
    License.prototype.set_name = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_name = v;
        this.n_name = true;
        return this.m_name;
    };

    Object.defineProperty(License.prototype, "name", {
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
    * @method get_info
    * @private
    * @return {LicenseInfo}
    */
    License.prototype.get_info = function () {
        return this.m_info;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_info
    * @private
    * @param {LicenseInfo} v
    * @return {LicenseInfo}
    */
    License.prototype.set_info = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "saklient.cloud.resources.LicenseInfo");
        if (!this.isNew) {
            throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.License#info");
        }
        ;
        this.m_info = v;
        this.n_info = true;
        return this.m_info;
    };

    Object.defineProperty(License.prototype, "info", {
        /**
        * ライセンス種別情報
        *
        * @property info
        * @type LicenseInfo
        * @public
        */
        get: function () {
            return this.get_info();
        },
        set: function (v) {
            this.set_info(v);
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
    License.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "LicenseInfo")) {
            this.m_info = Util.getByPath(r, "LicenseInfo") == null ? null : new LicenseInfo(this._client, Util.getByPath(r, "LicenseInfo"));
        } else {
            this.m_info = null;
            this.isIncomplete = true;
        }
        ;
        this.n_info = false;
    };

    /**
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    License.prototype.apiSerializeImpl = function (withClean) {
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
        if (withClean || this.n_info) {
            Util.setByPath(ret, "LicenseInfo", withClean ? (this.m_info == null ? null : this.m_info.apiSerialize(withClean)) : (this.m_info == null ? { ID: "0" } : this.m_info.apiSerializeID()));
        } else {
            if (this.isNew) {
                missing.push("info");
            }
            ;
        }
        ;
        if (missing.length > 0) {
            throw new SaklientException("required_field", "Required fields must be set before the License creation: " + missing.join(", "));
        }
        ;
        return ret;
    };
    return License;
})(Resource);
module.exports = License;

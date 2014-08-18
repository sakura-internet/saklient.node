var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var SaclientException = require('../../errors/SaclientException');

var Resource = require('./Resource');

'use strict';

/**
* アイコンのリソース情報へのアクセス機能や操作機能を備えたクラス。
*
* @class Icon
* @constructor
* @extends Resource
*/
var Icon = (function (_super) {
    __extends(Icon, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {any} obj
    * @param {Client} client
    * @param {boolean} wrapped=false
    */
    function Icon(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.Icon#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.Icon#n_scope
        * @type boolean
        * @private
        */
        this.n_scope = false;
        /**
        * @member saclient.cloud.resource.Icon#n_name
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saclient.cloud.resource.Icon#n_url
        * @type boolean
        * @private
        */
        this.n_url = false;
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
    Icon.prototype._apiPath = function () {
        return "/icon";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Icon.prototype._rootKey = function () {
        return "Icon";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Icon.prototype._rootKeyM = function () {
        return "Icons";
    };

    /**
    * @method className
    * @protected
    * @return {string}
    */
    Icon.prototype.className = function () {
        return "Icon";
    };

    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    Icon.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {Icon} this
    */
    Icon.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {Icon} this
    */
    Icon.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    Icon.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(Icon.prototype, "id", {
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
    * @method get_scope
    * @private
    * @return {string}
    */
    Icon.prototype.get_scope = function () {
        return this.m_scope;
    };

    Object.defineProperty(Icon.prototype, "scope", {
        /**
        * スコープ
        *
        * @property scope
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_scope();
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
    Icon.prototype.get_name = function () {
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
    Icon.prototype.set_name = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_name = v;
        this.n_name = true;
        return this.m_name;
    };

    Object.defineProperty(Icon.prototype, "name", {
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
    * @method get_url
    * @private
    * @return {string}
    */
    Icon.prototype.get_url = function () {
        return this.m_url;
    };

    Object.defineProperty(Icon.prototype, "url", {
        /**
        * URL
        *
        * @property url
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_url();
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
    Icon.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "Scope")) {
            this.m_scope = Util.getByPath(r, "Scope") == null ? null : "" + Util.getByPath(r, "Scope");
        } else {
            this.m_scope = null;
            this.isIncomplete = true;
        }
        ;
        this.n_scope = false;
        if (Util.existsPath(r, "Name")) {
            this.m_name = Util.getByPath(r, "Name") == null ? null : "" + Util.getByPath(r, "Name");
        } else {
            this.m_name = null;
            this.isIncomplete = true;
        }
        ;
        this.n_name = false;
        if (Util.existsPath(r, "URL")) {
            this.m_url = Util.getByPath(r, "URL") == null ? null : "" + Util.getByPath(r, "URL");
        } else {
            this.m_url = null;
            this.isIncomplete = true;
        }
        ;
        this.n_url = false;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Icon.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        var missing = [];
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_scope) {
            Util.setByPath(ret, "Scope", this.m_scope);
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
        if (withClean || this.n_url) {
            Util.setByPath(ret, "URL", this.m_url);
        }
        ;
        if (missing.length > 0) {
            throw new SaclientException("required_field", "Required fields must be set before the Icon creation: " + missing.join(", "));
        }
        ;
        return ret;
    };
    return Icon;
})(Resource);
module.exports = Icon;

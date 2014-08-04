var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Resource = require('./Resource');

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
    * @param {Client} client
    * @param {any} r
    */
    function Icon(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.Icon#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
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
        Util.validateType(r, "any");
        this.apiDeserialize(r);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Icon.prototype._apiPath = function () {
        Util.validateArgCount(arguments.length, 0);
        return "/icon";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Icon.prototype._rootKey = function () {
        Util.validateArgCount(arguments.length, 0);
        return "Icon";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Icon.prototype._rootKeyM = function () {
        Util.validateArgCount(arguments.length, 0);
        return "Icons";
    };

    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    Icon.prototype._id = function () {
        Util.validateArgCount(arguments.length, 0);
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
        Util.validateArgCount(arguments.length, 0);
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
        Util.validateArgCount(arguments.length, 0);
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
        Util.validateArgCount(arguments.length, 0);
        return this.m_id;
    };

    Object.defineProperty(Icon.prototype, "id", {
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
    Icon.prototype.get_name = function () {
        Util.validateArgCount(arguments.length, 0);
        return this.m_name;
    };

    Object.defineProperty(Icon.prototype, "name", {
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
    * @method get_url
    * @private
    * @return {string}
    */
    Icon.prototype.get_url = function () {
        Util.validateArgCount(arguments.length, 0);
        return this.m_url;
    };

    Object.defineProperty(Icon.prototype, "url", {
        /**
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
        Util.validateType(r, "any");
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
        Util.validateArgCount(arguments.length, 0);
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
        if (withClean || this.n_url) {
            Util.setByPath(ret, "URL", this.m_url);
        }
        ;
        return ret;
    };
    return Icon;
})(Resource);
module.exports = Icon;

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
* IPv6ネットワークの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resources.Ipv6Net
* @class Ipv6Net
* @constructor
* @extends Resource
*/
var Ipv6Net = (function (_super) {
    __extends(Ipv6Net, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function Ipv6Net(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resources.Ipv6Net#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resources.Ipv6Net#n_prefix
        * @default false
        * @type boolean
        * @private
        */
        this.n_prefix = false;
        /**
        * @member saklient.cloud.resources.Ipv6Net#n_prefixLen
        * @default false
        * @type boolean
        * @private
        */
        this.n_prefixLen = false;
        /**
        * @member saklient.cloud.resources.Ipv6Net#n_prefixTail
        * @default false
        * @type boolean
        * @private
        */
        this.n_prefixTail = false;
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
    Ipv6Net.prototype._apiPath = function () {
        return "/ipv6net";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Ipv6Net.prototype._rootKey = function () {
        return "IPv6Net";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Ipv6Net.prototype._rootKeyM = function () {
        return "IPv6Nets";
    };

    /**
    * @private
    * @method _className
    * @return {string}
    */
    Ipv6Net.prototype._className = function () {
        return "Ipv6Net";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    Ipv6Net.prototype._id = function () {
        return this.get_id();
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @public
    * @return {Swytch} this
    */
    Ipv6Net.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    Ipv6Net.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(Ipv6Net.prototype, "id", {
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
    * @method get_prefix
    * @private
    * @return {string}
    */
    Ipv6Net.prototype.get_prefix = function () {
        return this.m_prefix;
    };

    Object.defineProperty(Ipv6Net.prototype, "prefix", {
        /**
        * ネットワークプレフィックス
        *
        * @property prefix
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_prefix();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_prefixLen
    * @private
    * @return {number}
    */
    Ipv6Net.prototype.get_prefixLen = function () {
        return this.m_prefixLen;
    };

    Object.defineProperty(Ipv6Net.prototype, "prefixLen", {
        /**
        * ネットワークプレフィックス長
        *
        * @property prefixLen
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_prefixLen();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_prefixTail
    * @private
    * @return {string}
    */
    Ipv6Net.prototype.get_prefixTail = function () {
        return this.m_prefixTail;
    };

    Object.defineProperty(Ipv6Net.prototype, "prefixTail", {
        /**
        * このネットワーク範囲における最後のIPv6アドレス
        *
        * @property prefixTail
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_prefixTail();
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
    Ipv6Net.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "IPv6Prefix")) {
            this.m_prefix = Util.getByPath(r, "IPv6Prefix") == null ? null : "" + Util.getByPath(r, "IPv6Prefix");
        } else {
            this.m_prefix = null;
            this.isIncomplete = true;
        }
        ;
        this.n_prefix = false;
        if (Util.existsPath(r, "IPv6PrefixLen")) {
            this.m_prefixLen = Util.getByPath(r, "IPv6PrefixLen") == null ? null : parseInt("" + Util.getByPath(r, "IPv6PrefixLen"), 10);
        } else {
            this.m_prefixLen = null;
            this.isIncomplete = true;
        }
        ;
        this.n_prefixLen = false;
        if (Util.existsPath(r, "IPv6PrefixTail")) {
            this.m_prefixTail = Util.getByPath(r, "IPv6PrefixTail") == null ? null : "" + Util.getByPath(r, "IPv6PrefixTail");
        } else {
            this.m_prefixTail = null;
            this.isIncomplete = true;
        }
        ;
        this.n_prefixTail = false;
    };

    /**
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Ipv6Net.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_prefix) {
            Util.setByPath(ret, "IPv6Prefix", this.m_prefix);
        }
        ;
        if (withClean || this.n_prefixLen) {
            Util.setByPath(ret, "IPv6PrefixLen", this.m_prefixLen);
        }
        ;
        if (withClean || this.n_prefixTail) {
            Util.setByPath(ret, "IPv6PrefixTail", this.m_prefixTail);
        }
        ;
        return ret;
    };
    return Ipv6Net;
})(Resource);
module.exports = Ipv6Net;

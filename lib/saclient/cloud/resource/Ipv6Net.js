var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Resource = require('./Resource');

/**
* IPv6ネットワークのリソース情報へのアクセス機能や操作機能を備えたクラス。
*
* @class Ipv6Net
* @constructor
* @extends Resource
*/
var Ipv6Net = (function (_super) {
    __extends(Ipv6Net, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function Ipv6Net(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.Ipv6Net#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.Ipv6Net#n_prefix
        * @type boolean
        * @private
        */
        this.n_prefix = false;
        /**
        * @member saclient.cloud.resource.Ipv6Net#n_prefixLen
        * @type boolean
        * @private
        */
        this.n_prefixLen = false;
        /**
        * @member saclient.cloud.resource.Ipv6Net#n_prefixTail
        * @type boolean
        * @private
        */
        this.n_prefixTail = false;
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
    Ipv6Net.prototype._apiPath = function () {
        Util.validateArgCount(arguments.length, 0);
        return "/ipv6net";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Ipv6Net.prototype._rootKey = function () {
        Util.validateArgCount(arguments.length, 0);
        return "IPv6Net";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Ipv6Net.prototype._rootKeyM = function () {
        Util.validateArgCount(arguments.length, 0);
        return "IPv6Nets";
    };

    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    Ipv6Net.prototype._id = function () {
        Util.validateArgCount(arguments.length, 0);
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
    Ipv6Net.prototype.get_id = function () {
        Util.validateArgCount(arguments.length, 0);
        return this.m_id;
    };

    Object.defineProperty(Ipv6Net.prototype, "id", {
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
    * @method get_prefix
    * @private
    * @return {string}
    */
    Ipv6Net.prototype.get_prefix = function () {
        Util.validateArgCount(arguments.length, 0);
        return this.m_prefix;
    };

    Object.defineProperty(Ipv6Net.prototype, "prefix", {
        /**
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
        Util.validateArgCount(arguments.length, 0);
        return this.m_prefixLen;
    };

    Object.defineProperty(Ipv6Net.prototype, "prefixLen", {
        /**
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
        Util.validateArgCount(arguments.length, 0);
        return this.m_prefixTail;
    };

    Object.defineProperty(Ipv6Net.prototype, "prefixTail", {
        /**
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
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Ipv6Net.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateArgCount(arguments.length, 0);
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

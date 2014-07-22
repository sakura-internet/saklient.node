var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');

var Resource = require('./Resource');

/**
* IPv6ネットワークのリソース情報へのアクセス機能や操作機能を備えたクラス。
*
* @class IPv6Net
* @constructor
* @extends Resource
*/
var IPv6Net = (function (_super) {
    __extends(IPv6Net, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function IPv6Net(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.IPv6Net#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.IPv6Net#n_ipv6Prefix
        * @type boolean
        * @private
        */
        this.n_ipv6Prefix = false;
        /**
        * @member saclient.cloud.resource.IPv6Net#n_ipv6PrefixLen
        * @type boolean
        * @private
        */
        this.n_ipv6PrefixLen = false;
        /**
        * @member saclient.cloud.resource.IPv6Net#n_ipv6PrefixTail
        * @type boolean
        * @private
        */
        this.n_ipv6PrefixTail = false;
        this.apiDeserialize(r);
    }
    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    IPv6Net.prototype._id = function () {
        return this.get_id();
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    IPv6Net.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(IPv6Net.prototype, "id", {
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
    * @method get_ipv6Prefix
    * @private
    * @return {string}
    */
    IPv6Net.prototype.get_ipv6Prefix = function () {
        return this.m_ipv6Prefix;
    };

    Object.defineProperty(IPv6Net.prototype, "ipv6Prefix", {
        /**
        * @property ipv6Prefix
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ipv6Prefix();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_ipv6PrefixLen
    * @private
    * @return {number}
    */
    IPv6Net.prototype.get_ipv6PrefixLen = function () {
        return this.m_ipv6PrefixLen;
    };

    Object.defineProperty(IPv6Net.prototype, "ipv6PrefixLen", {
        /**
        * @property ipv6PrefixLen
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ipv6PrefixLen();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_ipv6PrefixTail
    * @private
    * @return {string}
    */
    IPv6Net.prototype.get_ipv6PrefixTail = function () {
        return this.m_ipv6PrefixTail;
    };

    Object.defineProperty(IPv6Net.prototype, "ipv6PrefixTail", {
        /**
        * @property ipv6PrefixTail
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ipv6PrefixTail();
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
    IPv6Net.prototype.apiDeserializeImpl = function (r) {
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
            this.m_ipv6Prefix = Util.getByPath(r, "IPv6Prefix") == null ? null : "" + Util.getByPath(r, "IPv6Prefix");
        } else {
            this.m_ipv6Prefix = null;
            this.isIncomplete = true;
        }
        ;
        this.n_ipv6Prefix = false;
        if (Util.existsPath(r, "IPv6PrefixLen")) {
            this.m_ipv6PrefixLen = Util.getByPath(r, "IPv6PrefixLen") == null ? null : parseInt("" + Util.getByPath(r, "IPv6PrefixLen"), 10);
        } else {
            this.m_ipv6PrefixLen = null;
            this.isIncomplete = true;
        }
        ;
        this.n_ipv6PrefixLen = false;
        if (Util.existsPath(r, "IPv6PrefixTail")) {
            this.m_ipv6PrefixTail = Util.getByPath(r, "IPv6PrefixTail") == null ? null : "" + Util.getByPath(r, "IPv6PrefixTail");
        } else {
            this.m_ipv6PrefixTail = null;
            this.isIncomplete = true;
        }
        ;
        this.n_ipv6PrefixTail = false;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    IPv6Net.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_ipv6Prefix) {
            Util.setByPath(ret, "IPv6Prefix", this.m_ipv6Prefix);
        }
        ;
        if (withClean || this.n_ipv6PrefixLen) {
            Util.setByPath(ret, "IPv6PrefixLen", this.m_ipv6PrefixLen);
        }
        ;
        if (withClean || this.n_ipv6PrefixTail) {
            Util.setByPath(ret, "IPv6PrefixTail", this.m_ipv6PrefixTail);
        }
        ;
        return ret;
    };
    return IPv6Net;
})(Resource);
module.exports = IPv6Net;

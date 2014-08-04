var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Resource = require('./Resource');

/**
* IPv4ネットワークのリソース情報へのアクセス機能や操作機能を備えたクラス。
*
* @class Ipv4Net
* @constructor
* @extends Resource
*/
var Ipv4Net = (function (_super) {
    __extends(Ipv4Net, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function Ipv4Net(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.Ipv4Net#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.Ipv4Net#n_address
        * @type boolean
        * @private
        */
        this.n_address = false;
        /**
        * @member saclient.cloud.resource.Ipv4Net#n_maskLen
        * @type boolean
        * @private
        */
        this.n_maskLen = false;
        /**
        * @member saclient.cloud.resource.Ipv4Net#n_defaultRoute
        * @type boolean
        * @private
        */
        this.n_defaultRoute = false;
        /**
        * @member saclient.cloud.resource.Ipv4Net#n_nextHop
        * @type boolean
        * @private
        */
        this.n_nextHop = false;
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
    Ipv4Net.prototype._apiPath = function () {
        Util.validateArgCount(arguments.length, 0);
        return "/subnet";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Ipv4Net.prototype._rootKey = function () {
        Util.validateArgCount(arguments.length, 0);
        return "Subnet";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Ipv4Net.prototype._rootKeyM = function () {
        Util.validateArgCount(arguments.length, 0);
        return "Subnets";
    };

    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    Ipv4Net.prototype._id = function () {
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
    Ipv4Net.prototype.reload = function () {
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
    Ipv4Net.prototype.get_id = function () {
        Util.validateArgCount(arguments.length, 0);
        return this.m_id;
    };

    Object.defineProperty(Ipv4Net.prototype, "id", {
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
    * @method get_address
    * @private
    * @return {string}
    */
    Ipv4Net.prototype.get_address = function () {
        Util.validateArgCount(arguments.length, 0);
        return this.m_address;
    };

    Object.defineProperty(Ipv4Net.prototype, "address", {
        /**
        * @property address
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_address();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_maskLen
    * @private
    * @return {number}
    */
    Ipv4Net.prototype.get_maskLen = function () {
        Util.validateArgCount(arguments.length, 0);
        return this.m_maskLen;
    };

    Object.defineProperty(Ipv4Net.prototype, "maskLen", {
        /**
        * @property maskLen
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_maskLen();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_defaultRoute
    * @private
    * @return {string}
    */
    Ipv4Net.prototype.get_defaultRoute = function () {
        Util.validateArgCount(arguments.length, 0);
        return this.m_defaultRoute;
    };

    Object.defineProperty(Ipv4Net.prototype, "defaultRoute", {
        /**
        * @property defaultRoute
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_defaultRoute();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_nextHop
    * @private
    * @return {string}
    */
    Ipv4Net.prototype.get_nextHop = function () {
        Util.validateArgCount(arguments.length, 0);
        return this.m_nextHop;
    };

    Object.defineProperty(Ipv4Net.prototype, "nextHop", {
        /**
        * @property nextHop
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_nextHop();
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
    Ipv4Net.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "NetworkAddress")) {
            this.m_address = Util.getByPath(r, "NetworkAddress") == null ? null : "" + Util.getByPath(r, "NetworkAddress");
        } else {
            this.m_address = null;
            this.isIncomplete = true;
        }
        ;
        this.n_address = false;
        if (Util.existsPath(r, "NetworkMaskLen")) {
            this.m_maskLen = Util.getByPath(r, "NetworkMaskLen") == null ? null : parseInt("" + Util.getByPath(r, "NetworkMaskLen"), 10);
        } else {
            this.m_maskLen = null;
            this.isIncomplete = true;
        }
        ;
        this.n_maskLen = false;
        if (Util.existsPath(r, "DefaultRoute")) {
            this.m_defaultRoute = Util.getByPath(r, "DefaultRoute") == null ? null : "" + Util.getByPath(r, "DefaultRoute");
        } else {
            this.m_defaultRoute = null;
            this.isIncomplete = true;
        }
        ;
        this.n_defaultRoute = false;
        if (Util.existsPath(r, "NextHop")) {
            this.m_nextHop = Util.getByPath(r, "NextHop") == null ? null : "" + Util.getByPath(r, "NextHop");
        } else {
            this.m_nextHop = null;
            this.isIncomplete = true;
        }
        ;
        this.n_nextHop = false;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Ipv4Net.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateArgCount(arguments.length, 0);
        Util.validateType(withClean, "boolean");
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_address) {
            Util.setByPath(ret, "NetworkAddress", this.m_address);
        }
        ;
        if (withClean || this.n_maskLen) {
            Util.setByPath(ret, "NetworkMaskLen", this.m_maskLen);
        }
        ;
        if (withClean || this.n_defaultRoute) {
            Util.setByPath(ret, "DefaultRoute", this.m_defaultRoute);
        }
        ;
        if (withClean || this.n_nextHop) {
            Util.setByPath(ret, "NextHop", this.m_nextHop);
        }
        ;
        return ret;
    };
    return Ipv4Net;
})(Resource);
module.exports = Ipv4Net;

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
* IPv4ネットワークの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resources.Ipv4Net
* @class Ipv4Net
* @constructor
* @extends Resource
*/
var Ipv4Net = (function (_super) {
    __extends(Ipv4Net, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function Ipv4Net(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resources.Ipv4Net#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resources.Ipv4Net#n_address
        * @default false
        * @type boolean
        * @private
        */
        this.n_address = false;
        /**
        * @member saklient.cloud.resources.Ipv4Net#n_maskLen
        * @default false
        * @type boolean
        * @private
        */
        this.n_maskLen = false;
        /**
        * @member saklient.cloud.resources.Ipv4Net#n_defaultRoute
        * @default false
        * @type boolean
        * @private
        */
        this.n_defaultRoute = false;
        /**
        * @member saklient.cloud.resources.Ipv4Net#n_nextHop
        * @default false
        * @type boolean
        * @private
        */
        this.n_nextHop = false;
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
    Ipv4Net.prototype._apiPath = function () {
        return "/subnet";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Ipv4Net.prototype._rootKey = function () {
        return "Subnet";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Ipv4Net.prototype._rootKeyM = function () {
        return "Subnets";
    };

    /**
    * @private
    * @method _className
    * @return {string}
    */
    Ipv4Net.prototype._className = function () {
        return "Ipv4Net";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    Ipv4Net.prototype._id = function () {
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
        return this.m_id;
    };

    Object.defineProperty(Ipv4Net.prototype, "id", {
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
    * @method get_address
    * @private
    * @return {string}
    */
    Ipv4Net.prototype.get_address = function () {
        return this.m_address;
    };

    Object.defineProperty(Ipv4Net.prototype, "address", {
        /**
        * ネットワークアドレス
        *
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
        return this.m_maskLen;
    };

    Object.defineProperty(Ipv4Net.prototype, "maskLen", {
        /**
        * マスク長
        *
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
        return this.m_defaultRoute;
    };

    Object.defineProperty(Ipv4Net.prototype, "defaultRoute", {
        /**
        * デフォルトルート
        *
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
        return this.m_nextHop;
    };

    Object.defineProperty(Ipv4Net.prototype, "nextHop", {
        /**
        * ネクストホップ
        *
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
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Ipv4Net.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
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


var Util = require('../Util');
var Client = require('./Client');
var Product = require('./Product');
var Model_Icon = require('./models/Model_Icon');
var Model_Server = require('./models/Model_Server');
var Model_Disk = require('./models/Model_Disk');
var Model_Appliance = require('./models/Model_Appliance');
var Model_Archive = require('./models/Model_Archive');
var Model_IsoImage = require('./models/Model_IsoImage');
var Model_Iface = require('./models/Model_Iface');
var Model_Swytch = require('./models/Model_Swytch');
var Model_Router = require('./models/Model_Router');
var Model_Ipv6Net = require('./models/Model_Ipv6Net');
var Model_Script = require('./models/Model_Script');

'use strict';

/**
* さくらのクラウドAPIクライアントを利用する際、最初にアクセスすべきルートとなるクラス。
*
* @see API.authorize
* @module saklient.cloud.API
* @class API
* @constructor
*/
var API = (function () {
    /**
    * @private
    * @constructor
    * @protected
    * @param {Client} client
    */
    function API(client) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saklient.cloud.Client");
        this._client = client;
        this._product = new Product(client);
        this._icon = new Model_Icon(client);
        this._server = new Model_Server(client);
        this._disk = new Model_Disk(client);
        this._appliance = new Model_Appliance(client);
        this._archive = new Model_Archive(client);
        this._isoImage = new Model_IsoImage(client);
        this._iface = new Model_Iface(client);
        this._swytch = new Model_Swytch(client);
        this._router = new Model_Router(client);
        this._ipv6Net = new Model_Ipv6Net(client);
        this._script = new Model_Script(client);
    }
    /**
    * @method get_client
    * @protected
    * @private
    * @return {Client}
    */
    API.prototype.get_client = function () {
        return this._client;
    };

    Object.defineProperty(API.prototype, "client", {
        /**
        * @private
        * @property client
        * @type Client
        * @readOnly
        */
        get: function () {
            return this.get_client();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_product
    * @protected
    * @private
    * @return {Product}
    */
    API.prototype.get_product = function () {
        return this._product;
    };

    Object.defineProperty(API.prototype, "product", {
        /**
        * 商品情報にアクセスするためのモデルを集めたオブジェクト。
        *
        * @property product
        * @type Product
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_product();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_icon
    * @protected
    * @private
    * @return {Model_Icon}
    */
    API.prototype.get_icon = function () {
        return this._icon;
    };

    Object.defineProperty(API.prototype, "icon", {
        /**
        * アイコンにアクセスするためのモデル。
        *
        * @property icon
        * @type Model_Icon
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_icon();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_server
    * @protected
    * @private
    * @return {Model_Server}
    */
    API.prototype.get_server = function () {
        return this._server;
    };

    Object.defineProperty(API.prototype, "server", {
        /**
        * サーバにアクセスするためのモデル。
        *
        * @property server
        * @type Model_Server
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_server();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_disk
    * @protected
    * @private
    * @return {Model_Disk}
    */
    API.prototype.get_disk = function () {
        return this._disk;
    };

    Object.defineProperty(API.prototype, "disk", {
        /**
        * ディスクにアクセスするためのモデル。
        *
        * @property disk
        * @type Model_Disk
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_disk();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_appliance
    * @protected
    * @private
    * @return {Model_Appliance}
    */
    API.prototype.get_appliance = function () {
        return this._appliance;
    };

    Object.defineProperty(API.prototype, "appliance", {
        /**
        * アプライアンスにアクセスするためのモデル。
        *
        * @property appliance
        * @type Model_Appliance
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_appliance();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_archive
    * @protected
    * @private
    * @return {Model_Archive}
    */
    API.prototype.get_archive = function () {
        return this._archive;
    };

    Object.defineProperty(API.prototype, "archive", {
        /**
        * アーカイブにアクセスするためのモデル。
        *
        * @property archive
        * @type Model_Archive
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_archive();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_isoImage
    * @protected
    * @private
    * @return {Model_IsoImage}
    */
    API.prototype.get_isoImage = function () {
        return this._isoImage;
    };

    Object.defineProperty(API.prototype, "isoImage", {
        /**
        * ISOイメージにアクセスするためのモデル。
        *
        * @property isoImage
        * @type Model_IsoImage
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_isoImage();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_iface
    * @protected
    * @private
    * @return {Model_Iface}
    */
    API.prototype.get_iface = function () {
        return this._iface;
    };

    Object.defineProperty(API.prototype, "iface", {
        /**
        * インタフェースにアクセスするためのモデル。
        *
        * @property iface
        * @type Model_Iface
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_iface();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_swytch
    * @protected
    * @private
    * @return {Model_Swytch}
    */
    API.prototype.get_swytch = function () {
        return this._swytch;
    };

    Object.defineProperty(API.prototype, "swytch", {
        /**
        * スイッチにアクセスするためのモデル。
        *
        * @property swytch
        * @type Model_Swytch
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_swytch();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_router
    * @protected
    * @private
    * @return {Model_Router}
    */
    API.prototype.get_router = function () {
        return this._router;
    };

    Object.defineProperty(API.prototype, "router", {
        /**
        * ルータにアクセスするためのモデル。
        *
        * @property router
        * @type Model_Router
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_router();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_ipv6Net
    * @protected
    * @private
    * @return {Model_Ipv6Net}
    */
    API.prototype.get_ipv6Net = function () {
        return this._ipv6Net;
    };

    Object.defineProperty(API.prototype, "ipv6Net", {
        /**
        * IPv6ネットワークにアクセスするためのモデル。
        *
        * @property ipv6Net
        * @type Model_Ipv6Net
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ipv6Net();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_script
    * @protected
    * @private
    * @return {Model_Script}
    */
    API.prototype.get_script = function () {
        return this._script;
    };

    Object.defineProperty(API.prototype, "script", {
        /**
        * スクリプトにアクセスするためのモデル。
        *
        * @property script
        * @type Model_Script
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_script();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * 指定した認証情報を用いてアクセスを行うAPIクライアントを作成します。
    *
    * 必要な認証情報は、コントロールパネル右上にあるアカウントのプルダウンから
    * 「設定」を選択し、「APIキー」のページにて作成できます。
    *
    * @static
    * @method authorize
    * @chainable
    * @public
    * @param {string} token ACCESS TOKEN
    * @param {string} secret ACCESS TOKEN SECRET
    * @param {string} zone=null
    * @return {API} APIクライアント
    */
    API.authorize = function (token, secret, zone) {
        if (typeof zone === "undefined") { zone = null; }
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(token, "string");
        Util.validateType(secret, "string");
        Util.validateType(zone, "string");
        var c = new Client(token, secret);
        var ret = new API(c);
        if (zone != null) {
            ret = ret.inZone(zone);
        }
        ;
        return ret;
    };

    /**
    * 認証情報を引き継ぎ、指定したゾーンへのアクセスを行うAPIクライアントを作成します。
    *
    * @method inZone
    * @chainable
    * @public
    * @param {string} name ゾーン名
    * @return {API} APIクライアント
    */
    API.prototype.inZone = function (name) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(name, "string");
        var ret = new API(this._client.cloneInstance());
        var suffix = "";
        if (name == "is1x" || name == "is1y") {
            suffix = "-test";
        }
        ;
        ret._client.setApiRoot("https://secure.sakura.ad.jp/cloud" + suffix + "/");
        ret._client.setApiRootSuffix("zone/" + name);
        return ret;
    };

    /**
    * 指定した秒数の間、スリープします。
    *
    * Fiber内で使用可能です。
    *
    * @method sleep
    * @public
    * @param {number} sec 秒数
    * @return {void}
    */
    API.prototype.sleep = function (sec) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(sec, "number");
        Util.sleep(sec);
    };
    return API;
})();
module.exports = API;

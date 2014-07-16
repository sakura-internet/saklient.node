
var Util = require('./Util');
var Client = require('./Client');
var Product = require('./Product');
var Model_Icon = require('./model/Model_Icon');
var Model_Server = require('./model/Model_Server');
var Model_Disk = require('./model/Model_Disk');
var Model_Appliance = require('./model/Model_Appliance');
var Model_Archive = require('./model/Model_Archive');
var Model_IPv6Net = require('./model/Model_IPv6Net');

/**
* さくらのクラウドAPIクライアントを利用する際、最初にアクセスすべきルートとなるクラス。
*
* @see API.authorize
* @class API
* @constructor
*/
var API = (function () {
    /**
    * @constructor
    * @protected
    * @param {Client} client
    */
    function API(client) {
        this._client = client;
        this._product = new Product(client);
        this._icon = new Model_Icon(client);
        this._server = new Model_Server(client);
        this._disk = new Model_Disk(client);
        this._appliance = new Model_Appliance(client);
        this._archive = new Model_Archive(client);
        this._ipv6net = new Model_IPv6Net(client);
    }
    /**
    * @method get_client
    * @protected
    * @return {Client}
    */
    API.prototype.get_client = function () {
        return this._client;
    };

    Object.defineProperty(API.prototype, "client", {
        /**
        * @property client
        * @type Client
        * @readOnly
        * @public
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
    * @return {Product}
    */
    API.prototype.get_product = function () {
        return this._product;
    };

    Object.defineProperty(API.prototype, "product", {
        /**
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
    * @return {Model_Icon}
    */
    API.prototype.get_icon = function () {
        return this._icon;
    };

    Object.defineProperty(API.prototype, "icon", {
        /**
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
    * @return {Model_Server}
    */
    API.prototype.get_server = function () {
        return this._server;
    };

    Object.defineProperty(API.prototype, "server", {
        /**
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
    * @return {Model_Disk}
    */
    API.prototype.get_disk = function () {
        return this._disk;
    };

    Object.defineProperty(API.prototype, "disk", {
        /**
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
    * @return {Model_Appliance}
    */
    API.prototype.get_appliance = function () {
        return this._appliance;
    };

    Object.defineProperty(API.prototype, "appliance", {
        /**
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
    * @return {Model_Archive}
    */
    API.prototype.get_archive = function () {
        return this._archive;
    };

    Object.defineProperty(API.prototype, "archive", {
        /**
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
    * @method get_ipv6net
    * @protected
    * @return {Model_IPv6Net}
    */
    API.prototype.get_ipv6net = function () {
        return this._ipv6net;
    };

    Object.defineProperty(API.prototype, "ipv6net", {
        /**
        * @property ipv6net
        * @type Model_IPv6Net
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ipv6net();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * 指定した認証情報を用いてアクセスを行うAPIクライアントを作成します。
    * 必要な認証情報は、コントロールパネル右上にあるアカウントのプルダウンから
    * 「設定」を選択し、「APIキー」のページにて作成できます。
    *
    * @static
    * @method authorize
    * @chainable
    * @public
    * @param {string} token ACCESS TOKEN
    * @param {string} secret ACCESS TOKEN SECRET
    * @return {API} APIクライアント
    */
    API.authorize = function (token, secret) {
        var c = new Client(token, secret);
        return new API(c);
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
        var ret = new API(this._client.cloneInstance());
        ret._client.setApiRoot("https://secure.sakura.ad.jp/cloud/");
        ret._client.setApiRootSuffix("zone/" + name);
        return ret;
    };

    /**
    * @method sleep
    * @public
    * @param {number} sec
    * @return {void}
    */
    API.prototype.sleep = function (sec) {
        Util.sleep(sec);
    };
    return API;
})();
module.exports = API;

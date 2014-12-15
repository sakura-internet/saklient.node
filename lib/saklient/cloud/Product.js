
var Util = require('../Util');
var Model_ServerPlan = require('./models/Model_ServerPlan');
var Model_DiskPlan = require('./models/Model_DiskPlan');
var Model_RouterPlan = require('./models/Model_RouterPlan');
var Model_LicenseInfo = require('./models/Model_LicenseInfo');

'use strict';

/**
* 商品情報にアクセスするためのモデルを集めたクラス。
*
* @module saklient.cloud.Product
* @class Product
* @constructor
*/
var Product = (function () {
    /**
    * @private
    * @constructor
    * @param {Client} client
    */
    function Product(client) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saklient.cloud.Client");
        this._server = new Model_ServerPlan(client);
        this._disk = new Model_DiskPlan(client);
        this._router = new Model_RouterPlan(client);
        this._license = new Model_LicenseInfo(client);
    }
    /**
    * @method get_server
    * @protected
    * @private
    * @return {Model_ServerPlan}
    */
    Product.prototype.get_server = function () {
        return this._server;
    };

    Object.defineProperty(Product.prototype, "server", {
        /**
        * サーバプラン情報。
        *
        * @property server
        * @type Model_ServerPlan
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
    * @return {Model_DiskPlan}
    */
    Product.prototype.get_disk = function () {
        return this._disk;
    };

    Object.defineProperty(Product.prototype, "disk", {
        /**
        * ディスクプラン情報。
        *
        * @property disk
        * @type Model_DiskPlan
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
    * @method get_router
    * @protected
    * @private
    * @return {Model_RouterPlan}
    */
    Product.prototype.get_router = function () {
        return this._router;
    };

    Object.defineProperty(Product.prototype, "router", {
        /**
        * ルータ帯域プラン情報。
        *
        * @property router
        * @type Model_RouterPlan
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
    * @method get_license
    * @protected
    * @private
    * @return {Model_LicenseInfo}
    */
    Product.prototype.get_license = function () {
        return this._license;
    };

    Object.defineProperty(Product.prototype, "license", {
        /**
        * ライセンス種別情報。
        *
        * @property license
        * @type Model_LicenseInfo
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_license();
        },
        enumerable: true,
        configurable: true
    });
    return Product;
})();
module.exports = Product;

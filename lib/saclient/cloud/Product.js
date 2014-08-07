
var Util = require('../Util');
var Model_ServerPlan = require('./model/Model_ServerPlan');
var Model_DiskPlan = require('./model/Model_DiskPlan');
var Model_RouterPlan = require('./model/Model_RouterPlan');

'use strict';

/**
* @class Product
* @constructor
*/
var Product = (function () {
    /**
    * @constructor
    * @public
    * @param {Client} client
    */
    function Product(client) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saclient.cloud.Client");
        this._server = new Model_ServerPlan(client);
        this._disk = new Model_DiskPlan(client);
        this._router = new Model_RouterPlan(client);
    }
    /**
    * @method get_server
    * @protected
    * @return {Model_ServerPlan}
    */
    Product.prototype.get_server = function () {
        return this._server;
    };

    Object.defineProperty(Product.prototype, "server", {
        /**
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
    * @return {Model_DiskPlan}
    */
    Product.prototype.get_disk = function () {
        return this._disk;
    };

    Object.defineProperty(Product.prototype, "disk", {
        /**
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
    * @return {Model_RouterPlan}
    */
    Product.prototype.get_router = function () {
        return this._router;
    };

    Object.defineProperty(Product.prototype, "router", {
        /**
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
    return Product;
})();
module.exports = Product;

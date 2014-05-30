
var Model_ServerPlan = require('./model/Model_ServerPlan');
var Model_DiskPlan = require('./model/Model_DiskPlan');
var Model_InternetPlan = require('./model/Model_InternetPlan');

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
        this._server = new Model_ServerPlan(client);
        this._disk = new Model_DiskPlan(client);
        this._internet = new Model_InternetPlan(client);
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
    * @method get_internet
    * @protected
    * @return {Model_InternetPlan}
    */
    Product.prototype.get_internet = function () {
        return this._internet;
    };

    Object.defineProperty(Product.prototype, "internet", {
        /**
        * @property internet
        * @type Model_InternetPlan
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_internet();
        },
        enumerable: true,
        configurable: true
    });
    return Product;
})();
module.exports = Product;

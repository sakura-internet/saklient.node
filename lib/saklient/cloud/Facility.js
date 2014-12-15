
var Util = require('../Util');
var Model_Region = require('./models/Model_Region');

'use strict';

/**
* 設備情報にアクセスするためのモデルを集めたクラス。
*
* @module saklient.cloud.Facility
* @class Facility
* @constructor
*/
var Facility = (function () {
    /**
    * @private
    * @constructor
    * @param {Client} client
    */
    function Facility(client) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saklient.cloud.Client");
        this._region = new Model_Region(client);
    }
    /**
    * @method get_region
    * @protected
    * @private
    * @return {Model_Region}
    */
    Facility.prototype.get_region = function () {
        return this._region;
    };

    Object.defineProperty(Facility.prototype, "region", {
        /**
        * リージョン情報。
        *
        * @property region
        * @type Model_Region
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_region();
        },
        enumerable: true,
        configurable: true
    });
    return Facility;
})();
module.exports = Facility;

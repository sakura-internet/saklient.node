
var Util = require('../../Util');

'use strict';

/**
* @private
* @module saklient.cloud.resources.ServerActivitySample
* @class ServerActivitySample
* @constructor
*/
var ServerActivitySample = (function () {
    /**
    * @constructor
    * @public
    * @param {string} atStr
    * @param {any} data
    */
    function ServerActivitySample(atStr, data) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(atStr, "string");
        this._at = (Util.str2date(atStr));
        this._isAvailable = false;
        var v = data["CPU-TIME"];
        if (v != null) {
            this._isAvailable = true;
            this._cpuTime = (v);
        }
        ;
    }
    /**
    * @method get_at
    * @private
    * @return {Date}
    */
    ServerActivitySample.prototype.get_at = function () {
        return this._at;
    };

    Object.defineProperty(ServerActivitySample.prototype, "at", {
        /**
        * 記録日時
        *
        * @property at
        * @type Date
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_at();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_isAvailable
    * @private
    * @return {boolean}
    */
    ServerActivitySample.prototype.get_isAvailable = function () {
        return this._isAvailable;
    };

    Object.defineProperty(ServerActivitySample.prototype, "isAvailable", {
        /**
        * 有効な値のとき真
        *
        * @property isAvailable
        * @type boolean
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_isAvailable();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_cpuTime
    * @private
    * @return {number}
    */
    ServerActivitySample.prototype.get_cpuTime = function () {
        return this._cpuTime;
    };

    Object.defineProperty(ServerActivitySample.prototype, "cpuTime", {
        /**
        * CPU時間
        *
        * @property cpuTime
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_cpuTime();
        },
        enumerable: true,
        configurable: true
    });
    return ServerActivitySample;
})();
module.exports = ServerActivitySample;

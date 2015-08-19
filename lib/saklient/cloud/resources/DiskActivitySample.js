
var Util = require('../../Util');

'use strict';

/**
* @private
* @module saklient.cloud.resources.DiskActivitySample
* @class DiskActivitySample
* @constructor
*/
var DiskActivitySample = (function () {
    /**
    * @constructor
    * @public
    * @param {string} atStr
    * @param {any} data
    */
    function DiskActivitySample(atStr, data) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(atStr, "string");
        this._at = (Util.str2date(atStr));
        this._isAvailable = true;
        var v = null;
        v = data["Write"];
        if (v == null) {
            this._isAvailable = false;
        } else {
            this._write = (v);
        }
        ;
        v = data["Read"];
        if (v == null) {
            this._isAvailable = false;
        } else {
            this._read = (v);
        }
        ;
    }
    /**
    * @method get_at
    * @private
    * @return {Date}
    */
    DiskActivitySample.prototype.get_at = function () {
        return this._at;
    };

    Object.defineProperty(DiskActivitySample.prototype, "at", {
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
    DiskActivitySample.prototype.get_isAvailable = function () {
        return this._isAvailable;
    };

    Object.defineProperty(DiskActivitySample.prototype, "isAvailable", {
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
    * @method get_write
    * @private
    * @return {number}
    */
    DiskActivitySample.prototype.get_write = function () {
        return this._write;
    };

    Object.defineProperty(DiskActivitySample.prototype, "write", {
        /**
        * ライト[BPS]
        *
        * @property write
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_write();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_read
    * @private
    * @return {number}
    */
    DiskActivitySample.prototype.get_read = function () {
        return this._read;
    };

    Object.defineProperty(DiskActivitySample.prototype, "read", {
        /**
        * リード[BPS]
        *
        * @property read
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_read();
        },
        enumerable: true,
        configurable: true
    });
    return DiskActivitySample;
})();
module.exports = DiskActivitySample;

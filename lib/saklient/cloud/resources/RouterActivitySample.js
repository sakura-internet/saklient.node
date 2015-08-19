
var Util = require('../../Util');

'use strict';

/**
* @private
* @module saklient.cloud.resources.RouterActivitySample
* @class RouterActivitySample
* @constructor
*/
var RouterActivitySample = (function () {
    /**
    * @constructor
    * @public
    * @param {string} atStr
    * @param {any} data
    */
    function RouterActivitySample(atStr, data) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(atStr, "string");
        this._at = (Util.str2date(atStr));
        this._isAvailable = true;
        var v = null;
        v = data["Out"];
        if (v == null) {
            this._isAvailable = false;
        } else {
            this._outgoing = (v);
        }
        ;
        v = data["In"];
        if (v == null) {
            this._isAvailable = false;
        } else {
            this._incoming = (v);
        }
        ;
    }
    /**
    * @method get_at
    * @private
    * @return {Date}
    */
    RouterActivitySample.prototype.get_at = function () {
        return this._at;
    };

    Object.defineProperty(RouterActivitySample.prototype, "at", {
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
    RouterActivitySample.prototype.get_isAvailable = function () {
        return this._isAvailable;
    };

    Object.defineProperty(RouterActivitySample.prototype, "isAvailable", {
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
    * @method get_outgoing
    * @private
    * @return {number}
    */
    RouterActivitySample.prototype.get_outgoing = function () {
        return this._outgoing;
    };

    Object.defineProperty(RouterActivitySample.prototype, "outgoing", {
        /**
        * 送信[BPS]
        *
        * @property outgoing
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_outgoing();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_incoming
    * @private
    * @return {number}
    */
    RouterActivitySample.prototype.get_incoming = function () {
        return this._incoming;
    };

    Object.defineProperty(RouterActivitySample.prototype, "incoming", {
        /**
        * 受信[BPS]
        *
        * @property incoming
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_incoming();
        },
        enumerable: true,
        configurable: true
    });
    return RouterActivitySample;
})();
module.exports = RouterActivitySample;

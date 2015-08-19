
var Util = require('../../Util');

'use strict';

/**
* @private
* @module saklient.cloud.resources.IfaceActivitySample
* @class IfaceActivitySample
* @constructor
*/
var IfaceActivitySample = (function () {
    /**
    * @constructor
    * @public
    * @param {string} atStr
    * @param {any} data
    */
    function IfaceActivitySample(atStr, data) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(atStr, "string");
        this._at = (Util.str2date(atStr));
        this._isAvailable = true;
        var v = null;
        v = data["Send"];
        if (v == null) {
            this._isAvailable = false;
        } else {
            this._send = (v);
        }
        ;
        v = data["Receive"];
        if (v == null) {
            this._isAvailable = false;
        } else {
            this._receive = (v);
        }
        ;
    }
    /**
    * @method get_at
    * @private
    * @return {Date}
    */
    IfaceActivitySample.prototype.get_at = function () {
        return this._at;
    };

    Object.defineProperty(IfaceActivitySample.prototype, "at", {
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
    IfaceActivitySample.prototype.get_isAvailable = function () {
        return this._isAvailable;
    };

    Object.defineProperty(IfaceActivitySample.prototype, "isAvailable", {
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
    * @method get_send
    * @private
    * @return {number}
    */
    IfaceActivitySample.prototype.get_send = function () {
        return this._send;
    };

    Object.defineProperty(IfaceActivitySample.prototype, "send", {
        /**
        * 送信[byte/sec]
        *
        * @property send
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_send();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_receive
    * @private
    * @return {number}
    */
    IfaceActivitySample.prototype.get_receive = function () {
        return this._receive;
    };

    Object.defineProperty(IfaceActivitySample.prototype, "receive", {
        /**
        * 受信[byte/sec]
        *
        * @property receive
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_receive();
        },
        enumerable: true,
        configurable: true
    });
    return IfaceActivitySample;
})();
module.exports = IfaceActivitySample;

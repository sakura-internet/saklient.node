
var Util = require('../../Util');

'use strict';

/**
* IPv4ネットワークのIPアドレス範囲。
*
* @module saklient.cloud.resources.Ipv4Range
* @class Ipv4Range
* @constructor
*/
var Ipv4Range = (function () {
    /**
    * @private
    * @constructor
    * @param {any} obj=null
    */
    function Ipv4Range(obj) {
        if (typeof obj === "undefined") { obj = null; }
        if (obj == null) {
            obj = {};
        }
        ;
        var first = Util.getByPathAny([obj], ["Min", "min"]);
        this._first = null;
        if (first != null) {
            this._first = (first);
        }
        ;
        if (this._first != null && this._first == "") {
            this._first = null;
        }
        ;
        var last = Util.getByPathAny([obj], ["Max", "max"]);
        this._last = null;
        if (last != null) {
            this._last = (last);
        }
        ;
        if (this._last != null && this._last == "") {
            this._last = null;
        }
        ;
    }
    /**
    * @method get_first
    * @private
    * @return {string}
    */
    Ipv4Range.prototype.get_first = function () {
        return this._first;
    };

    Object.defineProperty(Ipv4Range.prototype, "first", {
        /**
        * 開始アドレス
        *
        * @property first
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_first();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_last
    * @private
    * @return {string}
    */
    Ipv4Range.prototype.get_last = function () {
        return this._last;
    };

    Object.defineProperty(Ipv4Range.prototype, "last", {
        /**
        * 終了アドレス
        *
        * @property last
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_last();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_asArray
    * @private
    * @return {string[]}
    */
    Ipv4Range.prototype.get_asArray = function () {
        var ret = [];
        var i = Util.ip2long(this._first);
        var i1 = Util.ip2long(this._last);
        while (i <= i1) {
            ret.push(Util.long2ip(i));
            i++;
        }
        ;
        return ret;
    };

    Object.defineProperty(Ipv4Range.prototype, "asArray", {
        /**
        * この範囲に属するIPv4アドレスの一覧を取得します。
        *
        * @property asArray
        * @type string[]
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_asArray();
        },
        enumerable: true,
        configurable: true
    });
    return Ipv4Range;
})();
module.exports = Ipv4Range;

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。参照するリソースは同一ゾーンに存在しなければなりません。
*/
var MustBeOfSameZoneException = (function (_super) {
    __extends(MustBeOfSameZoneException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function MustBeOfSameZoneException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "不適切な要求です。参照するリソースは同一ゾーンに存在しなければなりません。" : message);
    }
    return MustBeOfSameZoneException;
})(HttpBadRequestException);
module.exports = MustBeOfSameZoneException;

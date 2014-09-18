var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。リクエストパラメータに指定されたゾーンをパスに含むURLへアクセスしてください。
*/
var AmbiguousZoneException = (function (_super) {
    __extends(AmbiguousZoneException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function AmbiguousZoneException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "不適切な要求です。リクエストパラメータに指定されたゾーンをパスに含むURLへアクセスしてください。" : message);
    }
    return AmbiguousZoneException;
})(HttpBadRequestException);
module.exports = AmbiguousZoneException;

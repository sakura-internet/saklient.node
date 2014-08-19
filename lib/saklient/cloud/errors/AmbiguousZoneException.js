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
*
* @class AmbiguousZoneException
* @constructor
* @extends HttpBadRequestException
*/
var AmbiguousZoneException = (function (_super) {
    __extends(AmbiguousZoneException, _super);
    function AmbiguousZoneException() {
        _super.apply(this, arguments);
    }
    AmbiguousZoneException.defaultMessage = "不適切な要求です。リクエストパラメータに指定されたゾーンをパスに含むURLへアクセスしてください。";
    return AmbiguousZoneException;
})(HttpBadRequestException);
module.exports = AmbiguousZoneException;

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
* 不適切な要求です。参照するリソースは同一ゾーンに存在しなければなりません。
*
* @class MustBeOfSameZoneException
* @constructor
* @extends HttpBadRequestException
*/
var MustBeOfSameZoneException = (function (_super) {
    __extends(MustBeOfSameZoneException, _super);
    function MustBeOfSameZoneException() {
        _super.apply(this, arguments);
    }
    MustBeOfSameZoneException.defaultMessage = "不適切な要求です。参照するリソースは同一ゾーンに存在しなければなりません。";
    return MustBeOfSameZoneException;
})(HttpBadRequestException);
module.exports = MustBeOfSameZoneException;

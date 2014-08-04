var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
* 不適切な要求です。パラメータに含まれている値の範囲が一部不正です。
*
* @class InvalidRangeException
* @constructor
* @extends HttpBadRequestException
*/
var InvalidRangeException = (function (_super) {
    __extends(InvalidRangeException, _super);
    function InvalidRangeException() {
        _super.apply(this, arguments);
    }
    InvalidRangeException.defaultMessage = "不適切な要求です。パラメータに含まれている値の範囲が一部不正です。";
    return InvalidRangeException;
})(HttpBadRequestException);
module.exports = InvalidRangeException;

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
* 不適切な要求です。参照するリソースのサイズが合致しません。
*
* @class SizeMismatchException
* @constructor
* @extends HttpBadRequestException
*/
var SizeMismatchException = (function (_super) {
    __extends(SizeMismatchException, _super);
    function SizeMismatchException() {
        _super.apply(this, arguments);
    }
    SizeMismatchException.defaultMessage = "不適切な要求です。参照するリソースのサイズが合致しません。";
    return SizeMismatchException;
})(HttpBadRequestException);
module.exports = SizeMismatchException;

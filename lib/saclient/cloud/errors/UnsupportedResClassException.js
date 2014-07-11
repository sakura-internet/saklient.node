var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('./HttpBadRequestException');

/**
* 不適切な要求です。この種類のリソースは要求された操作に対応しません。
*
* @class UnsupportedResClassException
* @constructor
* @extends HttpBadRequestException
*/
var UnsupportedResClassException = (function (_super) {
    __extends(UnsupportedResClassException, _super);
    function UnsupportedResClassException() {
        _super.apply(this, arguments);
    }
    UnsupportedResClassException.defaultMessage = "不適切な要求です。この種類のリソースは要求された操作に対応しません。";
    return UnsupportedResClassException;
})(HttpBadRequestException);
module.exports = UnsupportedResClassException;
